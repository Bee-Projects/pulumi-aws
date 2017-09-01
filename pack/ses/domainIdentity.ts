// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DomainIdentity
        extends fabric.Resource implements DomainIdentityArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly domain: fabric.Property<string>;
    public /*out*/ readonly verificationToken: fabric.Property<string>;

    constructor(urnName: string, args: DomainIdentityArgs) {
        if (args.domain === undefined) {
            throw new Error("Missing required property 'domain'");
        }
        super("aws:ses/domainIdentity:DomainIdentity", urnName, {
            "domain": args.domain,
        });
    }
}

export interface DomainIdentityArgs {
    readonly domain: fabric.PropertyValue<string>;
}

