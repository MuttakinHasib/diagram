
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const OrderFilter = (props: Node) => {
  return <NodeLayout title="Order Filter" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
