// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DeploymentGroup
        extends fabric.Resource implements DeploymentGroupArgs {
    public readonly alarmConfiguration?: fabric.Property<{ alarms?: string[], enabled?: boolean, ignorePollAlarmFailure?: boolean }[]>;
    public readonly appName: fabric.Property<string>;
    public readonly autoRollbackConfiguration?: fabric.Property<{ enabled?: boolean, events?: string[] }[]>;
    public readonly autoscalingGroups?: fabric.Property<string[]>;
    public readonly deploymentConfigName?: fabric.Property<string>;
    public readonly deploymentGroupName: fabric.Property<string>;
    public readonly ec2TagFilter?: fabric.Property<{ key?: string, type?: string, value?: string }[]>;
    public readonly onPremisesInstanceTagFilter?: fabric.Property<{ key?: string, type?: string, value?: string }[]>;
    public readonly serviceRoleArn: fabric.Property<string>;
    public readonly triggerConfiguration?: fabric.Property<{ triggerEvents: string[], triggerName: string, triggerTargetArn: string }[]>;

    constructor(urnName: string, args: DeploymentGroupArgs) {
        if (args.appName === undefined) {
            throw new Error("Missing required property 'appName'");
        }
        if (args.deploymentGroupName === undefined) {
            throw new Error("Missing required property 'deploymentGroupName'");
        }
        if (args.serviceRoleArn === undefined) {
            throw new Error("Missing required property 'serviceRoleArn'");
        }
        super("aws:codedeploy/deploymentGroup:DeploymentGroup", urnName, {
            "alarmConfiguration": args.alarmConfiguration,
            "appName": args.appName,
            "autoRollbackConfiguration": args.autoRollbackConfiguration,
            "autoscalingGroups": args.autoscalingGroups,
            "deploymentConfigName": args.deploymentConfigName,
            "deploymentGroupName": args.deploymentGroupName,
            "ec2TagFilter": args.ec2TagFilter,
            "onPremisesInstanceTagFilter": args.onPremisesInstanceTagFilter,
            "serviceRoleArn": args.serviceRoleArn,
            "triggerConfiguration": args.triggerConfiguration,
        });
    }
}

export interface DeploymentGroupArgs {
    readonly alarmConfiguration?: fabric.PropertyValue<{ alarms?: string[], enabled?: boolean, ignorePollAlarmFailure?: boolean }[]>;
    readonly appName: fabric.PropertyValue<string>;
    readonly autoRollbackConfiguration?: fabric.PropertyValue<{ enabled?: boolean, events?: string[] }[]>;
    readonly autoscalingGroups?: fabric.PropertyValue<string[]>;
    readonly deploymentConfigName?: fabric.PropertyValue<string>;
    readonly deploymentGroupName: fabric.PropertyValue<string>;
    readonly ec2TagFilter?: fabric.PropertyValue<{ key?: string, type?: string, value?: string }[]>;
    readonly onPremisesInstanceTagFilter?: fabric.PropertyValue<{ key?: string, type?: string, value?: string }[]>;
    readonly serviceRoleArn: fabric.PropertyValue<string>;
    readonly triggerConfiguration?: fabric.PropertyValue<{ triggerEvents: string[], triggerName: string, triggerTargetArn: string }[]>;
}

