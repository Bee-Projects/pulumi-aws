// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Group
        extends fabric.Resource implements GroupArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly availabilityZones: fabric.Property<string[]>;
    public readonly defaultCooldown: fabric.Property<number>;
    public readonly desiredCapacity: fabric.Property<number>;
    public readonly enabledMetrics?: fabric.Property<string[]>;
    public readonly forceDelete?: fabric.Property<boolean>;
    public readonly healthCheckGracePeriod?: fabric.Property<number>;
    public readonly healthCheckType: fabric.Property<string>;
    public readonly initialLifecycleHook?: fabric.Property<{ defaultResult: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[]>;
    public readonly launchConfiguration: fabric.Property<string>;
    public readonly loadBalancers: fabric.Property<string[]>;
    public readonly maxSize: fabric.Property<number>;
    public readonly metricsGranularity?: fabric.Property<string>;
    public readonly minElbCapacity?: fabric.Property<number>;
    public readonly minSize: fabric.Property<number>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly placementGroup?: fabric.Property<string>;
    public readonly protectFromScaleIn?: fabric.Property<boolean>;
    public readonly suspendedProcesses?: fabric.Property<string[]>;
    public readonly tag?: fabric.Property<{ key: string, propagateAtLaunch: boolean, value: string }[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}[]>;
    public readonly targetGroupArns: fabric.Property<string[]>;
    public readonly terminationPolicies?: fabric.Property<string[]>;
    public readonly vpcZoneIdentifier: fabric.Property<string[]>;
    public readonly waitForCapacityTimeout?: fabric.Property<string>;
    public readonly waitForElbCapacity?: fabric.Property<number>;

    constructor(urnName: string, args: GroupArgs) {
        if (args.launchConfiguration === undefined) {
            throw new Error("Missing required property 'launchConfiguration'");
        }
        if (args.maxSize === undefined) {
            throw new Error("Missing required property 'maxSize'");
        }
        if (args.minSize === undefined) {
            throw new Error("Missing required property 'minSize'");
        }
        super("aws:autoscaling/group:Group", urnName, {
            "availabilityZones": args.availabilityZones,
            "defaultCooldown": args.defaultCooldown,
            "desiredCapacity": args.desiredCapacity,
            "enabledMetrics": args.enabledMetrics,
            "forceDelete": args.forceDelete,
            "healthCheckGracePeriod": args.healthCheckGracePeriod,
            "healthCheckType": args.healthCheckType,
            "initialLifecycleHook": args.initialLifecycleHook,
            "launchConfiguration": args.launchConfiguration,
            "loadBalancers": args.loadBalancers,
            "maxSize": args.maxSize,
            "metricsGranularity": args.metricsGranularity,
            "minElbCapacity": args.minElbCapacity,
            "minSize": args.minSize,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "placementGroup": args.placementGroup,
            "protectFromScaleIn": args.protectFromScaleIn,
            "suspendedProcesses": args.suspendedProcesses,
            "tag": args.tag,
            "tags": args.tags,
            "targetGroupArns": args.targetGroupArns,
            "terminationPolicies": args.terminationPolicies,
            "vpcZoneIdentifier": args.vpcZoneIdentifier,
            "waitForCapacityTimeout": args.waitForCapacityTimeout,
            "waitForElbCapacity": args.waitForElbCapacity,
        });
    }
}

export interface GroupArgs {
    readonly availabilityZones?: fabric.PropertyValue<string[]>;
    readonly defaultCooldown?: fabric.PropertyValue<number>;
    readonly desiredCapacity?: fabric.PropertyValue<number>;
    readonly enabledMetrics?: fabric.PropertyValue<string[]>;
    readonly forceDelete?: fabric.PropertyValue<boolean>;
    readonly healthCheckGracePeriod?: fabric.PropertyValue<number>;
    readonly healthCheckType?: fabric.PropertyValue<string>;
    readonly initialLifecycleHook?: fabric.PropertyValue<{ defaultResult?: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[]>;
    readonly launchConfiguration: fabric.PropertyValue<string>;
    readonly loadBalancers?: fabric.PropertyValue<string[]>;
    readonly maxSize: fabric.PropertyValue<number>;
    readonly metricsGranularity?: fabric.PropertyValue<string>;
    readonly minElbCapacity?: fabric.PropertyValue<number>;
    readonly minSize: fabric.PropertyValue<number>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly placementGroup?: fabric.PropertyValue<string>;
    readonly protectFromScaleIn?: fabric.PropertyValue<boolean>;
    readonly suspendedProcesses?: fabric.PropertyValue<string[]>;
    readonly tag?: fabric.PropertyValue<{ key: string, propagateAtLaunch: boolean, value: string }[]>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}[]>;
    readonly targetGroupArns?: fabric.PropertyValue<string[]>;
    readonly terminationPolicies?: fabric.PropertyValue<string[]>;
    readonly vpcZoneIdentifier?: fabric.PropertyValue<string[]>;
    readonly waitForCapacityTimeout?: fabric.PropertyValue<string>;
    readonly waitForElbCapacity?: fabric.PropertyValue<number>;
}

