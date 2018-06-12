# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Cluster(pulumi.CustomResource):
    """
    Provides a DAX Cluster resource.
    """
    def __init__(__self__, __name__, __opts__=None, availability_zones=None, cluster_name=None, description=None, iam_role_arn=None, maintenance_window=None, node_type=None, notification_topic_arn=None, parameter_group_name=None, replication_factor=None, security_group_ids=None, subnet_group_name=None, tags=None):
        """Create a Cluster resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if availability_zones and not isinstance(availability_zones, list):
            raise TypeError('Expected property availability_zones to be a list')
        __self__.availability_zones = availability_zones
        """
        List of Availability Zones in which the
        nodes will be created
        """
        __props__['availabilityZones'] = availability_zones

        if not cluster_name:
            raise TypeError('Missing required property cluster_name')
        elif not isinstance(cluster_name, basestring):
            raise TypeError('Expected property cluster_name to be a basestring')
        __self__.cluster_name = cluster_name
        """
        Group identifier. DAX converts this name to
        lowercase
        """
        __props__['clusterName'] = cluster_name

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        Description for the cluster
        """
        __props__['description'] = description

        if not iam_role_arn:
            raise TypeError('Missing required property iam_role_arn')
        elif not isinstance(iam_role_arn, basestring):
            raise TypeError('Expected property iam_role_arn to be a basestring')
        __self__.iam_role_arn = iam_role_arn
        """
        A valid Amazon Resource Name (ARN) that identifies
        an IAM role. At runtime, DAX will assume this role and use the role's
        permissions to access DynamoDB on your behalf
        """
        __props__['iamRoleArn'] = iam_role_arn

        if maintenance_window and not isinstance(maintenance_window, basestring):
            raise TypeError('Expected property maintenance_window to be a basestring')
        __self__.maintenance_window = maintenance_window
        """
        Specifies the weekly time range for when
        maintenance on the cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi`
        (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example:
        `sun:05:00-sun:09:00`
        """
        __props__['maintenanceWindow'] = maintenance_window

        if not node_type:
            raise TypeError('Missing required property node_type')
        elif not isinstance(node_type, basestring):
            raise TypeError('Expected property node_type to be a basestring')
        __self__.node_type = node_type
        """
        The compute and memory capacity of the nodes. See
        [Nodes][1] for supported node types
        """
        __props__['nodeType'] = node_type

        if notification_topic_arn and not isinstance(notification_topic_arn, basestring):
            raise TypeError('Expected property notification_topic_arn to be a basestring')
        __self__.notification_topic_arn = notification_topic_arn
        """
        An Amazon Resource Name (ARN) of an
        SNS topic to send DAX notifications to. Example:
        `arn:aws:sns:us-east-1:012345678999:my_sns_topic`
        """
        __props__['notificationTopicArn'] = notification_topic_arn

        if parameter_group_name and not isinstance(parameter_group_name, basestring):
            raise TypeError('Expected property parameter_group_name to be a basestring')
        __self__.parameter_group_name = parameter_group_name
        """
        Name of the parameter group to associate
        with this DAX cluster
        """
        __props__['parameterGroupName'] = parameter_group_name

        if not replication_factor:
            raise TypeError('Missing required property replication_factor')
        elif not isinstance(replication_factor, int):
            raise TypeError('Expected property replication_factor to be a int')
        __self__.replication_factor = replication_factor
        """
        The number of nodes in the DAX cluster. A
        replication factor of 1 will create a single-node cluster, without any read
        replicas
        """
        __props__['replicationFactor'] = replication_factor

        if security_group_ids and not isinstance(security_group_ids, list):
            raise TypeError('Expected property security_group_ids to be a list')
        __self__.security_group_ids = security_group_ids
        """
        One or more VPC security groups associated
        with the cluster
        """
        __props__['securityGroupIds'] = security_group_ids

        if subnet_group_name and not isinstance(subnet_group_name, basestring):
            raise TypeError('Expected property subnet_group_name to be a basestring')
        __self__.subnet_group_name = subnet_group_name
        """
        Name of the subnet group to be used for the
        cluster
        """
        __props__['subnetGroupName'] = subnet_group_name

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource
        """
        __props__['tags'] = tags

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the DAX cluster
        """
        __self__.cluster_address = pulumi.runtime.UNKNOWN
        """
        The DNS name of the DAX cluster without the port appended
        """
        __self__.configuration_endpoint = pulumi.runtime.UNKNOWN
        """
        The configuration endpoint for this DAX cluster,
        consisting of a DNS name and a port number
        """
        __self__.nodes = pulumi.runtime.UNKNOWN
        """
        List of node objects including `id`, `address`, `port` and
        `availability_zone`. Referenceable e.g. as
        `${aws_dax_cluster.test.nodes.0.address}`
        """
        __self__.port = pulumi.runtime.UNKNOWN
        """
        The port used by the configuration endpoint
        """

        super(Cluster, __self__).__init__(
            'aws:dax/cluster:Cluster',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'availabilityZones' in outs:
            self.availability_zones = outs['availabilityZones']
        if 'clusterAddress' in outs:
            self.cluster_address = outs['clusterAddress']
        if 'clusterName' in outs:
            self.cluster_name = outs['clusterName']
        if 'configurationEndpoint' in outs:
            self.configuration_endpoint = outs['configurationEndpoint']
        if 'description' in outs:
            self.description = outs['description']
        if 'iamRoleArn' in outs:
            self.iam_role_arn = outs['iamRoleArn']
        if 'maintenanceWindow' in outs:
            self.maintenance_window = outs['maintenanceWindow']
        if 'nodeType' in outs:
            self.node_type = outs['nodeType']
        if 'nodes' in outs:
            self.nodes = outs['nodes']
        if 'notificationTopicArn' in outs:
            self.notification_topic_arn = outs['notificationTopicArn']
        if 'parameterGroupName' in outs:
            self.parameter_group_name = outs['parameterGroupName']
        if 'port' in outs:
            self.port = outs['port']
        if 'replicationFactor' in outs:
            self.replication_factor = outs['replicationFactor']
        if 'securityGroupIds' in outs:
            self.security_group_ids = outs['securityGroupIds']
        if 'subnetGroupName' in outs:
            self.subnet_group_name = outs['subnetGroupName']
        if 'tags' in outs:
            self.tags = outs['tags']