// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ReplicationGroup
        extends fabric.Resource implements ReplicationGroupArgs {
    public readonly applyImmediately: fabric.Property<boolean>;
    public readonly autoMinorVersionUpgrade?: fabric.Property<boolean>;
    public readonly automaticFailoverEnabled?: fabric.Property<boolean>;
    public readonly availabilityZones?: fabric.Property<string[]>;
    public readonly clusterMode?: fabric.Property<{ numNodeGroups: number, replicasPerNodeGroup: number }[]>;
    public /*out*/ readonly configurationEndpointAddress: fabric.Property<string>;
    public readonly engine?: fabric.Property<string>;
    public readonly engineVersion: fabric.Property<string>;
    public readonly maintenanceWindow: fabric.Property<string>;
    public readonly nodeType: fabric.Property<string>;
    public readonly notificationTopicArn?: fabric.Property<string>;
    public readonly numberCacheClusters: fabric.Property<number>;
    public readonly parameterGroupName: fabric.Property<string>;
    public readonly port: fabric.Property<number>;
    public /*out*/ readonly primaryEndpointAddress: fabric.Property<string>;
    public readonly replicationGroupDescription: fabric.Property<string>;
    public readonly replicationGroupId: fabric.Property<string>;
    public readonly securityGroupIds: fabric.Property<string[]>;
    public readonly securityGroupNames: fabric.Property<string[]>;
    public readonly snapshotArns?: fabric.Property<string[]>;
    public readonly snapshotName?: fabric.Property<string>;
    public readonly snapshotRetentionLimit?: fabric.Property<number>;
    public readonly snapshotWindow: fabric.Property<string>;
    public readonly subnetGroupName: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: ReplicationGroupArgs) {
        if (args.nodeType === undefined) {
            throw new Error("Missing required property 'nodeType'");
        }
        if (args.port === undefined) {
            throw new Error("Missing required property 'port'");
        }
        if (args.replicationGroupDescription === undefined) {
            throw new Error("Missing required property 'replicationGroupDescription'");
        }
        if (args.replicationGroupId === undefined) {
            throw new Error("Missing required property 'replicationGroupId'");
        }
        super("aws:elasticache/replicationGroup:ReplicationGroup", urnName, {
            "applyImmediately": args.applyImmediately,
            "autoMinorVersionUpgrade": args.autoMinorVersionUpgrade,
            "automaticFailoverEnabled": args.automaticFailoverEnabled,
            "availabilityZones": args.availabilityZones,
            "clusterMode": args.clusterMode,
            "engine": args.engine,
            "engineVersion": args.engineVersion,
            "maintenanceWindow": args.maintenanceWindow,
            "nodeType": args.nodeType,
            "notificationTopicArn": args.notificationTopicArn,
            "numberCacheClusters": args.numberCacheClusters,
            "parameterGroupName": args.parameterGroupName,
            "port": args.port,
            "replicationGroupDescription": args.replicationGroupDescription,
            "replicationGroupId": args.replicationGroupId,
            "securityGroupIds": args.securityGroupIds,
            "securityGroupNames": args.securityGroupNames,
            "snapshotArns": args.snapshotArns,
            "snapshotName": args.snapshotName,
            "snapshotRetentionLimit": args.snapshotRetentionLimit,
            "snapshotWindow": args.snapshotWindow,
            "subnetGroupName": args.subnetGroupName,
            "tags": args.tags,
        });
    }
}

export interface ReplicationGroupArgs {
    readonly applyImmediately?: fabric.PropertyValue<boolean>;
    readonly autoMinorVersionUpgrade?: fabric.PropertyValue<boolean>;
    readonly automaticFailoverEnabled?: fabric.PropertyValue<boolean>;
    readonly availabilityZones?: fabric.PropertyValue<string[]>;
    readonly clusterMode?: fabric.PropertyValue<{ numNodeGroups: number, replicasPerNodeGroup: number }[]>;
    readonly engine?: fabric.PropertyValue<string>;
    readonly engineVersion?: fabric.PropertyValue<string>;
    readonly maintenanceWindow?: fabric.PropertyValue<string>;
    readonly nodeType: fabric.PropertyValue<string>;
    readonly notificationTopicArn?: fabric.PropertyValue<string>;
    readonly numberCacheClusters?: fabric.PropertyValue<number>;
    readonly parameterGroupName?: fabric.PropertyValue<string>;
    readonly port: fabric.PropertyValue<number>;
    readonly replicationGroupDescription: fabric.PropertyValue<string>;
    readonly replicationGroupId: fabric.PropertyValue<string>;
    readonly securityGroupIds?: fabric.PropertyValue<string[]>;
    readonly securityGroupNames?: fabric.PropertyValue<string[]>;
    readonly snapshotArns?: fabric.PropertyValue<string[]>;
    readonly snapshotName?: fabric.PropertyValue<string>;
    readonly snapshotRetentionLimit?: fabric.PropertyValue<number>;
    readonly snapshotWindow?: fabric.PropertyValue<string>;
    readonly subnetGroupName?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

