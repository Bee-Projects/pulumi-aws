# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Cluster(pulumi.CustomResource):
    """
    Manages an EKS Cluster.
    """
    def __init__(__self__, __name__, __opts__=None, name=None, role_arn=None, version=None, vpc_config=None):
        """Create a Cluster resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['name'] = name

        if not role_arn:
            raise TypeError('Missing required property role_arn')
        __props__['role_arn'] = role_arn

        __props__['version'] = version

        if not vpc_config:
            raise TypeError('Missing required property vpc_config')
        __props__['vpc_config'] = vpc_config

        __props__['arn'] = None
        __props__['certificate_authority'] = None
        __props__['created_at'] = None
        __props__['endpoint'] = None
        __props__['platform_version'] = None

        super(Cluster, __self__).__init__(
            'aws:eks/cluster:Cluster',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

