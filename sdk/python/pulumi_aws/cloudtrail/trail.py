# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Trail(pulumi.CustomResource):
    """
    Provides a CloudTrail resource.
    """
    def __init__(__self__, __name__, __opts__=None, cloud_watch_logs_group_arn=None, cloud_watch_logs_role_arn=None, enable_log_file_validation=None, enable_logging=None, event_selectors=None, include_global_service_events=None, is_multi_region_trail=None, kms_key_id=None, name=None, s3_bucket_name=None, s3_key_prefix=None, sns_topic_name=None, tags=None):
        """Create a Trail resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if cloud_watch_logs_group_arn and not isinstance(cloud_watch_logs_group_arn, basestring):
            raise TypeError('Expected property cloud_watch_logs_group_arn to be a basestring')
        __self__.cloud_watch_logs_group_arn = cloud_watch_logs_group_arn
        """
        Specifies a log group name using an Amazon Resource Name (ARN),
        that represents the log group to which CloudTrail logs will be delivered.
        """
        __props__['cloudWatchLogsGroupArn'] = cloud_watch_logs_group_arn

        if cloud_watch_logs_role_arn and not isinstance(cloud_watch_logs_role_arn, basestring):
            raise TypeError('Expected property cloud_watch_logs_role_arn to be a basestring')
        __self__.cloud_watch_logs_role_arn = cloud_watch_logs_role_arn
        """
        Specifies the role for the CloudWatch Logs
        endpoint to assume to write to a user’s log group.
        """
        __props__['cloudWatchLogsRoleArn'] = cloud_watch_logs_role_arn

        if enable_log_file_validation and not isinstance(enable_log_file_validation, bool):
            raise TypeError('Expected property enable_log_file_validation to be a bool')
        __self__.enable_log_file_validation = enable_log_file_validation
        """
        Specifies whether log file integrity validation is enabled.
        Defaults to `false`.
        """
        __props__['enableLogFileValidation'] = enable_log_file_validation

        if enable_logging and not isinstance(enable_logging, bool):
            raise TypeError('Expected property enable_logging to be a bool')
        __self__.enable_logging = enable_logging
        """
        Enables logging for the trail. Defaults to `true`.
        Setting this to `false` will pause logging.
        """
        __props__['enableLogging'] = enable_logging

        if event_selectors and not isinstance(event_selectors, list):
            raise TypeError('Expected property event_selectors to be a list')
        __self__.event_selectors = event_selectors
        """
        Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these.
        """
        __props__['eventSelectors'] = event_selectors

        if include_global_service_events and not isinstance(include_global_service_events, bool):
            raise TypeError('Expected property include_global_service_events to be a bool')
        __self__.include_global_service_events = include_global_service_events
        """
        Specifies whether the trail is publishing events
        from global services such as IAM to the log files. Defaults to `true`.
        """
        __props__['includeGlobalServiceEvents'] = include_global_service_events

        if is_multi_region_trail and not isinstance(is_multi_region_trail, bool):
            raise TypeError('Expected property is_multi_region_trail to be a bool')
        __self__.is_multi_region_trail = is_multi_region_trail
        """
        Specifies whether the trail is created in the current
        region or in all regions. Defaults to `false`.
        """
        __props__['isMultiRegionTrail'] = is_multi_region_trail

        if kms_key_id and not isinstance(kms_key_id, basestring):
            raise TypeError('Expected property kms_key_id to be a basestring')
        __self__.kms_key_id = kms_key_id
        """
        Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
        """
        __props__['kmsKeyId'] = kms_key_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Specifies the name of the trail.
        """
        __props__['name'] = name

        if not s3_bucket_name:
            raise TypeError('Missing required property s3_bucket_name')
        elif not isinstance(s3_bucket_name, basestring):
            raise TypeError('Expected property s3_bucket_name to be a basestring')
        __self__.s3_bucket_name = s3_bucket_name
        """
        Specifies the name of the S3 bucket designated for publishing log files.
        """
        __props__['s3BucketName'] = s3_bucket_name

        if s3_key_prefix and not isinstance(s3_key_prefix, basestring):
            raise TypeError('Expected property s3_key_prefix to be a basestring')
        __self__.s3_key_prefix = s3_key_prefix
        """
        Specifies the S3 key prefix that precedes
        the name of the bucket you have designated for log file delivery.
        """
        __props__['s3KeyPrefix'] = s3_key_prefix

        if sns_topic_name and not isinstance(sns_topic_name, basestring):
            raise TypeError('Expected property sns_topic_name to be a basestring')
        __self__.sns_topic_name = sns_topic_name
        """
        Specifies the name of the Amazon SNS topic
        defined for notification of log file delivery.
        """
        __props__['snsTopicName'] = sns_topic_name

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the trail
        """
        __props__['tags'] = tags

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The Amazon Resource Name of the trail.
        """
        __self__.home_region = pulumi.runtime.UNKNOWN
        """
        The region in which the trail was created.
        """

        super(Trail, __self__).__init__(
            'aws:cloudtrail/trail:Trail',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'cloudWatchLogsGroupArn' in outs:
            self.cloud_watch_logs_group_arn = outs['cloudWatchLogsGroupArn']
        if 'cloudWatchLogsRoleArn' in outs:
            self.cloud_watch_logs_role_arn = outs['cloudWatchLogsRoleArn']
        if 'enableLogFileValidation' in outs:
            self.enable_log_file_validation = outs['enableLogFileValidation']
        if 'enableLogging' in outs:
            self.enable_logging = outs['enableLogging']
        if 'eventSelectors' in outs:
            self.event_selectors = outs['eventSelectors']
        if 'homeRegion' in outs:
            self.home_region = outs['homeRegion']
        if 'includeGlobalServiceEvents' in outs:
            self.include_global_service_events = outs['includeGlobalServiceEvents']
        if 'isMultiRegionTrail' in outs:
            self.is_multi_region_trail = outs['isMultiRegionTrail']
        if 'kmsKeyId' in outs:
            self.kms_key_id = outs['kmsKeyId']
        if 'name' in outs:
            self.name = outs['name']
        if 's3BucketName' in outs:
            self.s3_bucket_name = outs['s3BucketName']
        if 's3KeyPrefix' in outs:
            self.s3_key_prefix = outs['s3KeyPrefix']
        if 'snsTopicName' in outs:
            self.sns_topic_name = outs['snsTopicName']
        if 'tags' in outs:
            self.tags = outs['tags']