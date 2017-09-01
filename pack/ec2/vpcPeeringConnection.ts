// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class VpcPeeringConnection
        extends fabric.Resource implements VpcPeeringConnectionArgs {
    public /*out*/ readonly acceptStatus: fabric.Property<string>;
    public readonly accepter: fabric.Property<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    public readonly autoAccept?: fabric.Property<boolean>;
    public readonly peerOwnerId: fabric.Property<string>;
    public readonly peerVpcId: fabric.Property<string>;
    public readonly requester: fabric.Property<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: VpcPeeringConnectionArgs) {
        if (args.peerVpcId === undefined) {
            throw new Error("Missing required property 'peerVpcId'");
        }
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        super("aws:ec2/vpcPeeringConnection:VpcPeeringConnection", urnName, {
            "accepter": args.accepter,
            "autoAccept": args.autoAccept,
            "peerOwnerId": args.peerOwnerId,
            "peerVpcId": args.peerVpcId,
            "requester": args.requester,
            "tags": args.tags,
            "vpcId": args.vpcId,
        });
    }
}

export interface VpcPeeringConnectionArgs {
    readonly accepter?: fabric.PropertyValue<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    readonly autoAccept?: fabric.PropertyValue<boolean>;
    readonly peerOwnerId?: fabric.PropertyValue<string>;
    readonly peerVpcId: fabric.PropertyValue<string>;
    readonly requester?: fabric.PropertyValue<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }[]>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly vpcId: fabric.PropertyValue<string>;
}

