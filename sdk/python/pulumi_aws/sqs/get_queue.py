# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetQueueResult(object):
    """
    A collection of values returned by getQueue.
    """
    def __init__(__self__, arn=None, url=None, id=None):
        if arn and not isinstance(arn, str):
            raise TypeError('Expected argument arn to be a str')
        __self__.arn = arn
        """
        The Amazon Resource Name (ARN) of the queue.
        """
        if url and not isinstance(url, str):
            raise TypeError('Expected argument url to be a str')
        __self__.url = url
        """
        The URL of the queue.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_queue(name=None):
    """
    Use this data source to get the ARN and URL of queue in AWS Simple Queue Service (SQS).
    By using this data source, you can reference SQS queues without having to hardcode
    the ARNs as input.
    """
    __args__ = dict()

    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('aws:sqs/getQueue:getQueue', __args__)

    return GetQueueResult(
        arn=__ret__.get('arn'),
        url=__ret__.get('url'),
        id=__ret__.get('id'))
