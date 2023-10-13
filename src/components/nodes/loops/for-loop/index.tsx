
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const ForLoop = (props: Node) => {
  return <NodeLayout title="For Loop" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
