
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Quantity = (props: Node) => {
  return <NodeLayout title="Quantity" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
