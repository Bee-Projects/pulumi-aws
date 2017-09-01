// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class TaskDefinition
        extends fabric.Resource implements TaskDefinitionArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly containerDefinitions: fabric.Property<string>;
    public readonly family: fabric.Property<string>;
    public readonly networkMode: fabric.Property<string>;
    public readonly placementConstraints?: fabric.Property<{ expression?: string, type: string }[]>;
    public /*out*/ readonly revision: fabric.Property<number>;
    public readonly taskRoleArn?: fabric.Property<string>;
    public readonly volume?: fabric.Property<{ hostPath?: string, name: string }[]>;

    constructor(urnName: string, args: TaskDefinitionArgs) {
        if (args.containerDefinitions === undefined) {
            throw new Error("Missing required property 'containerDefinitions'");
        }
        if (args.family === undefined) {
            throw new Error("Missing required property 'family'");
        }
        super("aws:ecs/taskDefinition:TaskDefinition", urnName, {
            "containerDefinitions": args.containerDefinitions,
            "family": args.family,
            "networkMode": args.networkMode,
            "placementConstraints": args.placementConstraints,
            "taskRoleArn": args.taskRoleArn,
            "volume": args.volume,
        });
    }
}

export interface TaskDefinitionArgs {
    readonly containerDefinitions: fabric.PropertyValue<string>;
    readonly family: fabric.PropertyValue<string>;
    readonly networkMode?: fabric.PropertyValue<string>;
    readonly placementConstraints?: fabric.PropertyValue<{ expression?: string, type: string }[]>;
    readonly taskRoleArn?: fabric.PropertyValue<string>;
    readonly volume?: fabric.PropertyValue<{ hostPath?: string, name: string }[]>;
}

