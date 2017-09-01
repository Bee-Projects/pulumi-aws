// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class Integration
        extends fabric.Resource implements IntegrationArgs {
    public readonly cacheKeyParameters?: fabric.Property<string[]>;
    public readonly cacheNamespace: fabric.Property<string>;
    public readonly contentHandling?: fabric.Property<string>;
    public readonly credentials?: fabric.Property<string>;
    public readonly httpMethod: fabric.Property<string>;
    public readonly integrationHttpMethod?: fabric.Property<string>;
    public readonly passthroughBehavior: fabric.Property<string>;
    public readonly requestParameters?: fabric.Property<{[key: string]: string}>;
    public readonly requestParametersInJson?: fabric.Property<string>;
    public readonly requestTemplates?: fabric.Property<{[key: string]: string}>;
    public readonly resourceId: fabric.Property<string>;
    public readonly restApi: fabric.Property<RestApi>;
    public readonly type: fabric.Property<string>;
    public readonly uri?: fabric.Property<string>;

    constructor(urnName: string, args: IntegrationArgs) {
        if (args.httpMethod === undefined) {
            throw new Error("Missing required property 'httpMethod'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        super("aws:apigateway/integration:Integration", urnName, {
            "cacheKeyParameters": args.cacheKeyParameters,
            "cacheNamespace": args.cacheNamespace,
            "contentHandling": args.contentHandling,
            "credentials": args.credentials,
            "httpMethod": args.httpMethod,
            "integrationHttpMethod": args.integrationHttpMethod,
            "passthroughBehavior": args.passthroughBehavior,
            "requestParameters": args.requestParameters,
            "requestParametersInJson": args.requestParametersInJson,
            "requestTemplates": args.requestTemplates,
            "resourceId": args.resourceId,
            "restApi": args.restApi,
            "type": args.type,
            "uri": args.uri,
        });
    }
}

export interface IntegrationArgs {
    readonly cacheKeyParameters?: fabric.PropertyValue<string[]>;
    readonly cacheNamespace?: fabric.PropertyValue<string>;
    readonly contentHandling?: fabric.PropertyValue<string>;
    readonly credentials?: fabric.PropertyValue<string>;
    readonly httpMethod: fabric.PropertyValue<string>;
    readonly integrationHttpMethod?: fabric.PropertyValue<string>;
    readonly passthroughBehavior?: fabric.PropertyValue<string>;
    readonly requestParameters?: fabric.PropertyValue<{[key: string]: string}>;
    readonly requestParametersInJson?: fabric.PropertyValue<string>;
    readonly requestTemplates?: fabric.PropertyValue<{[key: string]: string}>;
    readonly resourceId: fabric.PropertyValue<string>;
    readonly restApi: fabric.PropertyValue<RestApi>;
    readonly type: fabric.PropertyValue<string>;
    readonly uri?: fabric.PropertyValue<string>;
}

