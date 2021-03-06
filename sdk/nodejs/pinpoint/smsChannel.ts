// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class SmsChannel extends pulumi.CustomResource {
    /**
     * Get an existing SmsChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmsChannelState): SmsChannel {
        return new SmsChannel(name, <any>state, { id });
    }

    public readonly applicationId: pulumi.Output<string>;
    public readonly enabled: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly promotionalMessagesPerSecond: pulumi.Output<number>;
    public readonly senderId: pulumi.Output<string | undefined>;
    public readonly shortCode: pulumi.Output<string | undefined>;
    public /*out*/ readonly transactionalMessagesPerSecond: pulumi.Output<number>;

    /**
     * Create a SmsChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmsChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmsChannelArgs | SmsChannelState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SmsChannelState = argsOrState as SmsChannelState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["promotionalMessagesPerSecond"] = state ? state.promotionalMessagesPerSecond : undefined;
            inputs["senderId"] = state ? state.senderId : undefined;
            inputs["shortCode"] = state ? state.shortCode : undefined;
            inputs["transactionalMessagesPerSecond"] = state ? state.transactionalMessagesPerSecond : undefined;
        } else {
            const args = argsOrState as SmsChannelArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["senderId"] = args ? args.senderId : undefined;
            inputs["shortCode"] = args ? args.shortCode : undefined;
            inputs["promotionalMessagesPerSecond"] = undefined /*out*/;
            inputs["transactionalMessagesPerSecond"] = undefined /*out*/;
        }
        super("aws:pinpoint/smsChannel:SmsChannel", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SmsChannel resources.
 */
export interface SmsChannelState {
    readonly applicationId?: pulumi.Input<string>;
    readonly enabled?: pulumi.Input<boolean>;
    readonly promotionalMessagesPerSecond?: pulumi.Input<number>;
    readonly senderId?: pulumi.Input<string>;
    readonly shortCode?: pulumi.Input<string>;
    readonly transactionalMessagesPerSecond?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SmsChannel resource.
 */
export interface SmsChannelArgs {
    readonly applicationId: pulumi.Input<string>;
    readonly enabled?: pulumi.Input<boolean>;
    readonly senderId?: pulumi.Input<string>;
    readonly shortCode?: pulumi.Input<string>;
}
