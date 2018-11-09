# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class IntegrationResponse(pulumi.CustomResource):
    """
    Provides an HTTP Method Integration Response for an API Gateway Resource.
    
    -> **Note:** Depends on having `aws_api_gateway_integration` inside your rest api. To ensure this
    you might need to add an explicit `depends_on` for clean runs.
    """
    def __init__(__self__, __name__, __opts__=None, content_handling=None, http_method=None, resource_id=None, response_parameters=None, response_parameters_in_json=None, response_templates=None, rest_api=None, selection_pattern=None, status_code=None):
        """Create a IntegrationResponse resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['content_handling'] = content_handling

        if not http_method:
            raise TypeError('Missing required property http_method')
        __props__['http_method'] = http_method

        if not resource_id:
            raise TypeError('Missing required property resource_id')
        __props__['resource_id'] = resource_id

        __props__['response_parameters'] = response_parameters

        __props__['response_parameters_in_json'] = response_parameters_in_json

        __props__['response_templates'] = response_templates

        if not rest_api:
            raise TypeError('Missing required property rest_api')
        __props__['rest_api'] = rest_api

        __props__['selection_pattern'] = selection_pattern

        if not status_code:
            raise TypeError('Missing required property status_code')
        __props__['status_code'] = status_code

        super(IntegrationResponse, __self__).__init__(
            'aws:apigateway/integrationResponse:IntegrationResponse',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

