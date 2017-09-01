// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class GroupPolicy
        extends fabric.Resource implements GroupPolicyArgs {
    public readonly group: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly policy: fabric.Property<string>;

    constructor(urnName: string, args: GroupPolicyArgs) {
        if (args.group === undefined) {
            throw new Error("Missing required property 'group'");
        }
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:iam/groupPolicy:GroupPolicy", urnName, {
            "group": args.group,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "policy": args.policy,
        });
    }
}

export interface GroupPolicyArgs {
    readonly group: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly policy: fabric.PropertyValue<string>;
}

