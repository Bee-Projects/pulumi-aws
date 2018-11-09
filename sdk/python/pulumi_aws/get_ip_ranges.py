# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from . import utilities, tables

class GetIpRangesResult(object):
    """
    A collection of values returned by getIpRanges.
    """
    def __init__(__self__, cidr_blocks=None, create_date=None, ipv6_cidr_blocks=None, sync_token=None, id=None):
        if cidr_blocks and not isinstance(cidr_blocks, list):
            raise TypeError('Expected argument cidr_blocks to be a list')
        __self__.cidr_blocks = cidr_blocks
        """
        The lexically ordered list of CIDR blocks.
        """
        if create_date and not isinstance(create_date, str):
            raise TypeError('Expected argument create_date to be a str')
        __self__.create_date = create_date
        """
        The publication time of the IP ranges (e.g. `2016-08-03-23-46-05`).
        """
        if ipv6_cidr_blocks and not isinstance(ipv6_cidr_blocks, list):
            raise TypeError('Expected argument ipv6_cidr_blocks to be a list')
        __self__.ipv6_cidr_blocks = ipv6_cidr_blocks
        """
        The lexically ordered list of IPv6 CIDR blocks.
        """
        if sync_token and not isinstance(sync_token, int):
            raise TypeError('Expected argument sync_token to be a int')
        __self__.sync_token = sync_token
        """
        The publication time of the IP ranges, in Unix epoch time format
        (e.g. `1470267965`).
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_ip_ranges(regions=None, services=None):
    """
    Use this data source to get the [IP ranges][1] of various AWS products and services.
    """
    __args__ = dict()

    __args__['regions'] = regions
    __args__['services'] = services
    __ret__ = pulumi.runtime.invoke('aws:index/getIpRanges:getIpRanges', __args__)

    return GetIpRangesResult(
        cidr_blocks=__ret__.get('cidrBlocks'),
        create_date=__ret__.get('createDate'),
        ipv6_cidr_blocks=__ret__.get('ipv6CidrBlocks'),
        sync_token=__ret__.get('syncToken'),
        id=__ret__.get('id'))
