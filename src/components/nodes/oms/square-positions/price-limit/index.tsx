
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const PriceLimit = (props: Node) => {
  return <NodeLayout title="Price Limit" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
