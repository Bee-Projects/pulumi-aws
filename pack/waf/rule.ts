// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Rule
        extends fabric.Resource implements RuleArgs {
    public readonly metricName: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly predicates?: fabric.Property<{ dataId?: string, negated: boolean, type: string }[]>;

    constructor(urnName: string, args: RuleArgs) {
        if (args.metricName === undefined) {
            throw new Error("Missing required property 'metricName'");
        }
        super("aws:waf/rule:Rule", urnName, {
            "metricName": args.metricName,
            "name": args.name,
            "predicates": args.predicates,
        });
    }
}

export interface RuleArgs {
    readonly metricName: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly predicates?: fabric.PropertyValue<{ dataId?: string, negated: boolean, type: string }[]>;
}

