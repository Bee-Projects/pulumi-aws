// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Deployment} from "./deployment";
import {RestApi} from "./restApi";

export class Stage
        extends fabric.Resource implements StageArgs {
    public readonly cacheClusterEnabled?: fabric.Property<boolean>;
    public readonly cacheClusterSize?: fabric.Property<string>;
    public readonly clientCertificateId?: fabric.Property<string>;
    public readonly deployment: fabric.Property<Deployment>;
    public readonly description?: fabric.Property<string>;
    public readonly documentationVersion?: fabric.Property<string>;
    public readonly restApi: fabric.Property<RestApi>;
    public readonly stageName: fabric.Property<string>;
    public readonly variables?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: StageArgs) {
        if (args.deployment === undefined) {
            throw new Error("Missing required property 'deployment'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        if (args.stageName === undefined) {
            throw new Error("Missing required property 'stageName'");
        }
        super("aws:apigateway/stage:Stage", urnName, {
            "cacheClusterEnabled": args.cacheClusterEnabled,
            "cacheClusterSize": args.cacheClusterSize,
            "clientCertificateId": args.clientCertificateId,
            "deployment": args.deployment,
            "description": args.description,
            "documentationVersion": args.documentationVersion,
            "restApi": args.restApi,
            "stageName": args.stageName,
            "variables": args.variables,
        });
    }
}

export interface StageArgs {
    readonly cacheClusterEnabled?: fabric.PropertyValue<boolean>;
    readonly cacheClusterSize?: fabric.PropertyValue<string>;
    readonly clientCertificateId?: fabric.PropertyValue<string>;
    readonly deployment: fabric.PropertyValue<Deployment>;
    readonly description?: fabric.PropertyValue<string>;
    readonly documentationVersion?: fabric.PropertyValue<string>;
    readonly restApi: fabric.PropertyValue<RestApi>;
    readonly stageName: fabric.PropertyValue<string>;
    readonly variables?: fabric.PropertyValue<{[key: string]: any}>;
}

