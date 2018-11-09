# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Service(pulumi.CustomResource):
    """
    Provides a Service Discovery Service resource.
    """
    def __init__(__self__, __name__, __opts__=None, description=None, dns_config=None, health_check_config=None, health_check_custom_config=None, name=None):
        """Create a Service resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['description'] = description

        if not dns_config:
            raise TypeError('Missing required property dns_config')
        __props__['dns_config'] = dns_config

        __props__['health_check_config'] = health_check_config

        __props__['health_check_custom_config'] = health_check_custom_config

        __props__['name'] = name

        __props__['arn'] = None

        super(Service, __self__).__init__(
            'aws:servicediscovery/service:Service',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

