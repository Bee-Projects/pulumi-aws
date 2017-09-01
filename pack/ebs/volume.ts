// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Volume
        extends fabric.Resource implements VolumeArgs {
    public readonly availabilityZone: fabric.Property<string>;
    public readonly encrypted: fabric.Property<boolean>;
    public readonly iops: fabric.Property<number>;
    public readonly kmsKeyId: fabric.Property<string>;
    public readonly size: fabric.Property<number>;
    public readonly snapshotId: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly type: fabric.Property<string>;

    constructor(urnName: string, args: VolumeArgs) {
        if (args.availabilityZone === undefined) {
            throw new Error("Missing required property 'availabilityZone'");
        }
        super("aws:ebs/volume:Volume", urnName, {
            "availabilityZone": args.availabilityZone,
            "encrypted": args.encrypted,
            "iops": args.iops,
            "kmsKeyId": args.kmsKeyId,
            "size": args.size,
            "snapshotId": args.snapshotId,
            "tags": args.tags,
            "type": args.type,
        });
    }
}

export interface VolumeArgs {
    readonly availabilityZone: fabric.PropertyValue<string>;
    readonly encrypted?: fabric.PropertyValue<boolean>;
    readonly iops?: fabric.PropertyValue<number>;
    readonly kmsKeyId?: fabric.PropertyValue<string>;
    readonly size?: fabric.PropertyValue<number>;
    readonly snapshotId?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly type?: fabric.PropertyValue<string>;
}

