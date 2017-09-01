// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class IdentityPool
        extends fabric.Resource implements IdentityPoolArgs {
    public readonly allowUnauthenticatedIdentities?: fabric.Property<boolean>;
    public readonly cognitoIdentityProviders?: fabric.Property<{ clientId?: string, providerName?: string, serverSideTokenCheck?: boolean }[]>;
    public readonly developerProviderName?: fabric.Property<string>;
    public readonly identityPoolName: fabric.Property<string>;
    public readonly openidConnectProviderArns?: fabric.Property<string[]>;
    public readonly samlProviderArns?: fabric.Property<string[]>;
    public readonly supportedLoginProviders?: fabric.Property<{[key: string]: string}>;

    constructor(urnName: string, args: IdentityPoolArgs) {
        if (args.identityPoolName === undefined) {
            throw new Error("Missing required property 'identityPoolName'");
        }
        super("aws:cognito/identityPool:IdentityPool", urnName, {
            "allowUnauthenticatedIdentities": args.allowUnauthenticatedIdentities,
            "cognitoIdentityProviders": args.cognitoIdentityProviders,
            "developerProviderName": args.developerProviderName,
            "identityPoolName": args.identityPoolName,
            "openidConnectProviderArns": args.openidConnectProviderArns,
            "samlProviderArns": args.samlProviderArns,
            "supportedLoginProviders": args.supportedLoginProviders,
        });
    }
}

export interface IdentityPoolArgs {
    readonly allowUnauthenticatedIdentities?: fabric.PropertyValue<boolean>;
    readonly cognitoIdentityProviders?: fabric.PropertyValue<{ clientId?: string, providerName?: string, serverSideTokenCheck?: boolean }[]>;
    readonly developerProviderName?: fabric.PropertyValue<string>;
    readonly identityPoolName: fabric.PropertyValue<string>;
    readonly openidConnectProviderArns?: fabric.PropertyValue<string[]>;
    readonly samlProviderArns?: fabric.PropertyValue<string[]>;
    readonly supportedLoginProviders?: fabric.PropertyValue<{[key: string]: string}>;
}

