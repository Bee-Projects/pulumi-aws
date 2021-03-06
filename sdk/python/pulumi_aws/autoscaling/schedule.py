# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Schedule(pulumi.CustomResource):
    """
    Provides an AutoScaling Schedule resource.
    """
    def __init__(__self__, __name__, __opts__=None, autoscaling_group_name=None, desired_capacity=None, end_time=None, max_size=None, min_size=None, recurrence=None, scheduled_action_name=None, start_time=None):
        """Create a Schedule resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not autoscaling_group_name:
            raise TypeError('Missing required property autoscaling_group_name')
        __props__['autoscaling_group_name'] = autoscaling_group_name

        __props__['desired_capacity'] = desired_capacity

        __props__['end_time'] = end_time

        __props__['max_size'] = max_size

        __props__['min_size'] = min_size

        __props__['recurrence'] = recurrence

        if not scheduled_action_name:
            raise TypeError('Missing required property scheduled_action_name')
        __props__['scheduled_action_name'] = scheduled_action_name

        __props__['start_time'] = start_time

        __props__['arn'] = None

        super(Schedule, __self__).__init__(
            'aws:autoscaling/schedule:Schedule',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

