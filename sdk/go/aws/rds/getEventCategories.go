// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupEventCategories(ctx *pulumi.Context, args *GetEventCategoriesArgs) (*GetEventCategoriesResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["sourceType"] = args.SourceType
	}
	outputs, err := ctx.Invoke("aws:rds/getEventCategories:getEventCategories", inputs)
	if err != nil {
		return nil, err
	}
	return &GetEventCategoriesResult{
		EventCategories: outputs["eventCategories"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getEventCategories.
type GetEventCategoriesArgs struct {
	// The type of source that will be generating the events. Valid options are db-instance, db-security-group, db-parameter-group, db-snapshot, db-cluster or db-cluster-snapshot.
	SourceType interface{}
}

// A collection of values returned by getEventCategories.
type GetEventCategoriesResult struct {
	// A list of the event categories.
	EventCategories interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
