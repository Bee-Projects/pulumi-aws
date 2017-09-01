// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";

export class Topic
        extends fabric.Resource implements TopicArgs {
    public /*out*/ readonly arn: fabric.Property<ARN>;
    public readonly deliveryPolicy?: fabric.Property<string>;
    public readonly displayName?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly policy: fabric.Property<string>;

    constructor(urnName: string, args: TopicArgs) {
        super("aws:sns/topic:Topic", urnName, {
            "deliveryPolicy": args.deliveryPolicy,
            "displayName": args.displayName,
            "name": args.name,
            "policy": args.policy,
        });
    }
}

export interface TopicArgs {
    readonly deliveryPolicy?: fabric.PropertyValue<string>;
    readonly displayName?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly policy?: fabric.PropertyValue<string>;
}

