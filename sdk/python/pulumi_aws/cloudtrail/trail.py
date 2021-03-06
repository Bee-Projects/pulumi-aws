# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Trail(pulumi.CustomResource):
    """
    Provides a CloudTrail resource.
    """
    def __init__(__self__, __name__, __opts__=None, cloud_watch_logs_group_arn=None, cloud_watch_logs_role_arn=None, enable_log_file_validation=None, enable_logging=None, event_selectors=None, include_global_service_events=None, is_multi_region_trail=None, kms_key_id=None, name=None, s3_bucket_name=None, s3_key_prefix=None, sns_topic_name=None, tags=None):
        """Create a Trail resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['cloud_watch_logs_group_arn'] = cloud_watch_logs_group_arn

        __props__['cloud_watch_logs_role_arn'] = cloud_watch_logs_role_arn

        __props__['enable_log_file_validation'] = enable_log_file_validation

        __props__['enable_logging'] = enable_logging

        __props__['event_selectors'] = event_selectors

        __props__['include_global_service_events'] = include_global_service_events

        __props__['is_multi_region_trail'] = is_multi_region_trail

        __props__['kms_key_id'] = kms_key_id

        __props__['name'] = name

        if not s3_bucket_name:
            raise TypeError('Missing required property s3_bucket_name')
        __props__['s3_bucket_name'] = s3_bucket_name

        __props__['s3_key_prefix'] = s3_key_prefix

        __props__['sns_topic_name'] = sns_topic_name

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['home_region'] = None

        super(Trail, __self__).__init__(
            'aws:cloudtrail/trail:Trail',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

