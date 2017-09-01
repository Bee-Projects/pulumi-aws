// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class PatchBaseline
        extends fabric.Resource implements PatchBaselineArgs {
    public readonly approvalRule?: fabric.Property<{ approveAfterDays: number, patchFilter: { key: string, values: string[] }[] }[]>;
    public readonly approvedPatches?: fabric.Property<string[]>;
    public readonly description?: fabric.Property<string>;
    public readonly globalFilter?: fabric.Property<{ key: string, values: string[] }[]>;
    public readonly name: fabric.Property<string>;
    public readonly rejectedPatches?: fabric.Property<string[]>;

    constructor(urnName: string, args: PatchBaselineArgs) {
        super("aws:ssm/patchBaseline:PatchBaseline", urnName, {
            "approvalRule": args.approvalRule,
            "approvedPatches": args.approvedPatches,
            "description": args.description,
            "globalFilter": args.globalFilter,
            "name": args.name,
            "rejectedPatches": args.rejectedPatches,
        });
    }
}

export interface PatchBaselineArgs {
    readonly approvalRule?: fabric.PropertyValue<{ approveAfterDays: number, patchFilter: { key: string, values: string[] }[] }[]>;
    readonly approvedPatches?: fabric.PropertyValue<string[]>;
    readonly description?: fabric.PropertyValue<string>;
    readonly globalFilter?: fabric.PropertyValue<{ key: string, values: string[] }[]>;
    readonly name?: fabric.PropertyValue<string>;
    readonly rejectedPatches?: fabric.PropertyValue<string[]>;
}

