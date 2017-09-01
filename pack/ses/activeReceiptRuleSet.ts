// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ActiveReceiptRuleSet
        extends fabric.Resource implements ActiveReceiptRuleSetArgs {
    public readonly ruleSetName: fabric.Property<string>;

    constructor(urnName: string, args: ActiveReceiptRuleSetArgs) {
        if (args.ruleSetName === undefined) {
            throw new Error("Missing required property 'ruleSetName'");
        }
        super("aws:ses/activeReceiptRuleSet:ActiveReceiptRuleSet", urnName, {
            "ruleSetName": args.ruleSetName,
        });
    }
}

export interface ActiveReceiptRuleSetArgs {
    readonly ruleSetName: fabric.PropertyValue<string>;
}

