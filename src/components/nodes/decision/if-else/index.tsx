
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const IfElse = (props: Node) => {
  return <NodeLayout title="IF_else" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
