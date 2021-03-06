# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class ThreatIntelSet(pulumi.CustomResource):
    """
    Provides a resource to manage a GuardDuty ThreatIntelSet.
    
    ~> **Note:** Currently in GuardDuty, users from member accounts cannot upload and further manage ThreatIntelSets. ThreatIntelSets that are uploaded by the master account are imposed on GuardDuty functionality in its member accounts. See the [GuardDuty API Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/create-threat-intel-set.html)
    """
    def __init__(__self__, __name__, __opts__=None, activate=None, detector_id=None, format=None, location=None, name=None):
        """Create a ThreatIntelSet resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not activate:
            raise TypeError('Missing required property activate')
        __props__['activate'] = activate

        if not detector_id:
            raise TypeError('Missing required property detector_id')
        __props__['detector_id'] = detector_id

        if not format:
            raise TypeError('Missing required property format')
        __props__['format'] = format

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        super(ThreatIntelSet, __self__).__init__(
            'aws:glacier/threatIntelSet:ThreatIntelSet',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

