// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class TargetGroupAttachment
        extends fabric.Resource implements TargetGroupAttachmentArgs {
    public readonly port?: fabric.Property<number>;
    public readonly targetGroupArn: fabric.Property<string>;
    public readonly targetId: fabric.Property<string>;

    constructor(urnName: string, args: TargetGroupAttachmentArgs) {
        if (args.targetGroupArn === undefined) {
            throw new Error("Missing required property 'targetGroupArn'");
        }
        if (args.targetId === undefined) {
            throw new Error("Missing required property 'targetId'");
        }
        super("aws:elasticloadbalancingv2/targetGroupAttachment:TargetGroupAttachment", urnName, {
            "port": args.port,
            "targetGroupArn": args.targetGroupArn,
            "targetId": args.targetId,
        });
    }
}

export interface TargetGroupAttachmentArgs {
    readonly port?: fabric.PropertyValue<number>;
    readonly targetGroupArn: fabric.PropertyValue<string>;
    readonly targetId: fabric.PropertyValue<string>;
}

