// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ParameterGroup
        extends fabric.Resource implements ParameterGroupArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly family: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix: fabric.Property<string>;
    public readonly parameter?: fabric.Property<{ applyMethod?: string, name: string, value: string }[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: ParameterGroupArgs) {
        if (args.family === undefined) {
            throw new Error("Missing required property 'family'");
        }
        super("aws:rds/parameterGroup:ParameterGroup", urnName, {
            "description": args.description,
            "family": args.family,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "parameter": args.parameter,
            "tags": args.tags,
        });
    }
}

export interface ParameterGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly family: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly parameter?: fabric.PropertyValue<{ applyMethod?: string, name: string, value: string }[]>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

