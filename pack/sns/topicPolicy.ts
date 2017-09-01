// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class TopicPolicy
        extends fabric.Resource implements TopicPolicyArgs {
    public readonly arn: fabric.Property<string>;
    public readonly policy: fabric.Property<string>;

    constructor(urnName: string, args: TopicPolicyArgs) {
        if (args.arn === undefined) {
            throw new Error("Missing required property 'arn'");
        }
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:sns/topicPolicy:TopicPolicy", urnName, {
            "arn": args.arn,
            "policy": args.policy,
        });
    }
}

export interface TopicPolicyArgs {
    readonly arn: fabric.PropertyValue<string>;
    readonly policy: fabric.PropertyValue<string>;
}

