# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from . import utilities, tables

class GetCanonicalUserIdResult(object):
    """
    A collection of values returned by getCanonicalUserId.
    """
    def __init__(__self__, display_name=None, id=None):
        if display_name and not isinstance(display_name, str):
            raise TypeError('Expected argument display_name to be a str')
        __self__.display_name = display_name
        """
        The human-friendly name linked to the canonical user ID.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_canonical_user_id():
    """
    The Canonical User ID data source allows access to the [canonical user ID](http://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html)
    for the effective account in which Terraform is working.
    """
    __args__ = dict()

    __ret__ = await pulumi.runtime.invoke('aws:index/getCanonicalUserId:getCanonicalUserId', __args__)

    return GetCanonicalUserIdResult(
        display_name=__ret__.get('displayName'),
        id=__ret__.get('id'))
