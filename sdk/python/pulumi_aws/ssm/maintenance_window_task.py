# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class MaintenanceWindowTask(pulumi.CustomResource):
    """
    Provides an SSM Maintenance Window Task resource
    """
    def __init__(__self__, __name__, __opts__=None, logging_info=None, max_concurrency=None, max_errors=None, priority=None, service_role_arn=None, targets=None, task_arn=None, task_parameters=None, task_type=None, window_id=None):
        """Create a MaintenanceWindowTask resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['logging_info'] = logging_info

        if not max_concurrency:
            raise TypeError('Missing required property max_concurrency')
        __props__['max_concurrency'] = max_concurrency

        if not max_errors:
            raise TypeError('Missing required property max_errors')
        __props__['max_errors'] = max_errors

        __props__['priority'] = priority

        if not service_role_arn:
            raise TypeError('Missing required property service_role_arn')
        __props__['service_role_arn'] = service_role_arn

        if not targets:
            raise TypeError('Missing required property targets')
        __props__['targets'] = targets

        if not task_arn:
            raise TypeError('Missing required property task_arn')
        __props__['task_arn'] = task_arn

        __props__['task_parameters'] = task_parameters

        if not task_type:
            raise TypeError('Missing required property task_type')
        __props__['task_type'] = task_type

        if not window_id:
            raise TypeError('Missing required property window_id')
        __props__['window_id'] = window_id

        super(MaintenanceWindowTask, __self__).__init__(
            'aws:ssm/maintenanceWindowTask:MaintenanceWindowTask',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

