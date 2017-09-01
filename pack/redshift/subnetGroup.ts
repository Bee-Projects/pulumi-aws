// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SubnetGroup
        extends fabric.Resource implements SubnetGroupArgs {
    public readonly description?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly subnetIds: fabric.Property<string[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: SubnetGroupArgs) {
        if (args.subnetIds === undefined) {
            throw new Error("Missing required property 'subnetIds'");
        }
        super("aws:redshift/subnetGroup:SubnetGroup", urnName, {
            "description": args.description,
            "name": args.name,
            "subnetIds": args.subnetIds,
            "tags": args.tags,
        });
    }
}

export interface SubnetGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly subnetIds: fabric.PropertyValue<string[]>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

