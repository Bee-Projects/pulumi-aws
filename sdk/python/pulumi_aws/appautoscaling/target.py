# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Target(pulumi.CustomResource):
    """
    Provides an Application AutoScaling ScalableTarget resource. To manage policies which get attached to the target, see the [`aws_appautoscaling_policy` resource](https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html).
    """
    def __init__(__self__, __name__, __opts__=None, max_capacity=None, min_capacity=None, resource_id=None, role_arn=None, scalable_dimension=None, service_namespace=None):
        """Create a Target resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not max_capacity:
            raise TypeError('Missing required property max_capacity')
        __props__['max_capacity'] = max_capacity

        if not min_capacity:
            raise TypeError('Missing required property min_capacity')
        __props__['min_capacity'] = min_capacity

        if not resource_id:
            raise TypeError('Missing required property resource_id')
        __props__['resource_id'] = resource_id

        __props__['role_arn'] = role_arn

        if not scalable_dimension:
            raise TypeError('Missing required property scalable_dimension')
        __props__['scalable_dimension'] = scalable_dimension

        if not service_namespace:
            raise TypeError('Missing required property service_namespace')
        __props__['service_namespace'] = service_namespace

        super(Target, __self__).__init__(
            'aws:appautoscaling/target:Target',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

