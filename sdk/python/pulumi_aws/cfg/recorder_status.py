# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class RecorderStatus(pulumi.CustomResource):
    """
    Manages status (recording / stopped) of an AWS Config Configuration Recorder.
    
    ~> **Note:** Starting Configuration Recorder requires a [Delivery Channel](/docs/providers/aws/r/config_delivery_channel.html) to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.
    """
    def __init__(__self__, __name__, __opts__=None, is_enabled=None, name=None):
        """Create a RecorderStatus resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not is_enabled:
            raise TypeError('Missing required property is_enabled')
        elif not isinstance(is_enabled, bool):
            raise TypeError('Expected property is_enabled to be a bool')
        __self__.is_enabled = is_enabled
        """
        Whether the configuration recorder should be enabled or disabled.
        """
        __props__['isEnabled'] = is_enabled

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the recorder
        """
        __props__['name'] = name

        super(RecorderStatus, __self__).__init__(
            'aws:cfg/recorderStatus:RecorderStatus',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'isEnabled' in outs:
            self.is_enabled = outs['isEnabled']
        if 'name' in outs:
            self.name = outs['name']