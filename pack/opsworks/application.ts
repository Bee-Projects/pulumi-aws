// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Application
        extends fabric.Resource implements ApplicationArgs {
    public readonly appSource: fabric.Property<{ password?: string, revision?: string, sshKey?: string, type: string, url?: string, username?: string }[]>;
    public readonly autoBundleOnDeploy?: fabric.Property<string>;
    public readonly awsFlowRubySettings?: fabric.Property<string>;
    public readonly dataSourceArn?: fabric.Property<string>;
    public readonly dataSourceDatabaseName?: fabric.Property<string>;
    public readonly dataSourceType?: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly documentRoot?: fabric.Property<string>;
    public readonly domains?: fabric.Property<string[]>;
    public readonly enableSsl?: fabric.Property<boolean>;
    public readonly environment?: fabric.Property<{ key: string, secure?: boolean, value: string }[]>;
    public /*out*/ readonly applicationId: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly railsEnv?: fabric.Property<string>;
    public readonly shortName: fabric.Property<string>;
    public readonly sslConfiguration?: fabric.Property<{ certificate: string, chain?: string, privateKey: string }[]>;
    public readonly stackId: fabric.Property<string>;
    public readonly type: fabric.Property<string>;

    constructor(urnName: string, args: ApplicationArgs) {
        if (args.stackId === undefined) {
            throw new Error("Missing required property 'stackId'");
        }
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        super("aws:opsworks/application:Application", urnName, {
            "appSource": args.appSource,
            "autoBundleOnDeploy": args.autoBundleOnDeploy,
            "awsFlowRubySettings": args.awsFlowRubySettings,
            "dataSourceArn": args.dataSourceArn,
            "dataSourceDatabaseName": args.dataSourceDatabaseName,
            "dataSourceType": args.dataSourceType,
            "description": args.description,
            "documentRoot": args.documentRoot,
            "domains": args.domains,
            "enableSsl": args.enableSsl,
            "environment": args.environment,
            "name": args.name,
            "railsEnv": args.railsEnv,
            "shortName": args.shortName,
            "sslConfiguration": args.sslConfiguration,
            "stackId": args.stackId,
            "type": args.type,
        });
    }
}

export interface ApplicationArgs {
    readonly appSource?: fabric.PropertyValue<{ password?: string, revision?: string, sshKey?: string, type: string, url?: string, username?: string }[]>;
    readonly autoBundleOnDeploy?: fabric.PropertyValue<string>;
    readonly awsFlowRubySettings?: fabric.PropertyValue<string>;
    readonly dataSourceArn?: fabric.PropertyValue<string>;
    readonly dataSourceDatabaseName?: fabric.PropertyValue<string>;
    readonly dataSourceType?: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly documentRoot?: fabric.PropertyValue<string>;
    readonly domains?: fabric.PropertyValue<string[]>;
    readonly enableSsl?: fabric.PropertyValue<boolean>;
    readonly environment?: fabric.PropertyValue<{ key: string, secure?: boolean, value: string }[]>;
    readonly name?: fabric.PropertyValue<string>;
    readonly railsEnv?: fabric.PropertyValue<string>;
    readonly shortName?: fabric.PropertyValue<string>;
    readonly sslConfiguration?: fabric.PropertyValue<{ certificate: string, chain?: string, privateKey: string }[]>;
    readonly stackId: fabric.PropertyValue<string>;
    readonly type: fabric.PropertyValue<string>;
}

