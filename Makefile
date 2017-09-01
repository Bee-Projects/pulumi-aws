SHELL=/bin/bash
.SHELLFLAGS=-e

PACK    =aws
PACKDIR =pack
PACKNAME=Amazon Web Services (AWS)
PROJECT =github.com/pulumi/pulumi-aws

TFGEN           = lumi-tfgen-${PACK}
TFBRIDGE        = lumi-tfbridge-${PACK}
TFBRIDGE_BIN    = ${GOPATH}/bin/${TFBRIDGE}
LUMIPLUG        = lumi-resource
TESTPARALLELISM = 10

ECHO=echo -e
GOMETALINTERBIN=gometalinter
GOMETALINTER=${GOMETALINTERBIN} --config=Gometalinter.json

default: banner buildtools gen build test install
notest: banner buildtools gen build install
all: banner buildtools gen build install examples
.PHONY: default notest all

banner:
	@$(ECHO) "\033[1;37m========================================\033[0m"
	@$(ECHO) "\033[1;37m${PACKNAME} Lumi Package\033[0m"
	@$(ECHO) "\033[1;37m========================================\033[0m"
	@go version
.PHONY: banner

buildtools:
	go install ${PROJECT}/cmd/${TFGEN}
	go install ${PROJECT}/cmd/${TFBRIDGE}

gen:
	$(TFGEN) --out pack/
.PHONY: gen

build:
	@$(ECHO) "[Building ${PACK} package:]"
	cd ${PACKDIR} && yarn link @pulumi/pulumi-fabric # ensure we resolve to Lumi's stdlibs.
	cd ${PACKDIR} && yarn run build                  # compile into a JavaScript NPM package.
.PHONY: build

test:
	go test -cover -parallel ${TESTPARALLELISM} ${GOPKGS}
	go tool vet -printf=false ./cmd
	go tool vet -printf=false resources.go
	which ${GOMETALINTERBIN} >/dev/null
	$(GOMETALINTER) ./cmd/... resources.go | sort ; exit "$${PIPESTATUS[0]}"
.PHONY: test

install:
	@$(ECHO) "[Installing ${PACK} package:]"
	cd ${PACKDIR} && yarn link --force               # ensure this pack is made available.
.PHONY: install

publish:
	@$(ECHO) "\033[0;32mPublishing current release:\033[0m"
	./scripts/publish.sh
.PHONY: publish

clean:
	rm -rf ${INSTALLDIR}
.PHONY: clean

examples:
	@echo "\033[0;32mTEST EXAMPLES:\033[0m"
	go test -v -cover -timeout 1h -parallel ${TESTPARALLELISM} ./examples
.PHONY: examples
