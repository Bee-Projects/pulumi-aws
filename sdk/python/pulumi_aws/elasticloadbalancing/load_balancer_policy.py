# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class LoadBalancerPolicy(pulumi.CustomResource):
    """
    Provides a load balancer policy, which can be attached to an ELB listener or backend server.
    """
    def __init__(__self__, __name__, __opts__=None, load_balancer_name=None, policy_attributes=None, policy_name=None, policy_type_name=None):
        """Create a LoadBalancerPolicy resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not load_balancer_name:
            raise TypeError('Missing required property load_balancer_name')
        __props__['load_balancer_name'] = load_balancer_name

        __props__['policy_attributes'] = policy_attributes

        if not policy_name:
            raise TypeError('Missing required property policy_name')
        __props__['policy_name'] = policy_name

        if not policy_type_name:
            raise TypeError('Missing required property policy_type_name')
        __props__['policy_type_name'] = policy_type_name

        super(LoadBalancerPolicy, __self__).__init__(
            'aws:elasticloadbalancing/loadBalancerPolicy:LoadBalancerPolicy',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

