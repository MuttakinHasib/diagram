
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const WhileLoop = (props: Node) => {
  return <NodeLayout title="While Loop" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
