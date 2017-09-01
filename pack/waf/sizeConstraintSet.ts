// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SizeConstraintSet
        extends fabric.Resource implements SizeConstraintSetArgs {
    public readonly name: fabric.Property<string>;
    public readonly sizeConstraints?: fabric.Property<{ comparisonOperator: string, fieldToMatch: { data?: string, type: string }[], size: number, textTransformation: string }[]>;

    constructor(urnName: string, args: SizeConstraintSetArgs) {
        super("aws:waf/sizeConstraintSet:SizeConstraintSet", urnName, {
            "name": args.name,
            "sizeConstraints": args.sizeConstraints,
        });
    }
}

export interface SizeConstraintSetArgs {
    readonly name?: fabric.PropertyValue<string>;
    readonly sizeConstraints?: fabric.PropertyValue<{ comparisonOperator: string, fieldToMatch: { data?: string, type: string }[], size: number, textTransformation: string }[]>;
}

