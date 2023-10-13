
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const OrderCount = (props: Node) => {
  return <NodeLayout title="Order Count" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
