
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const StrikeSelection = (props: Node) => {
  return <NodeLayout title="Strike Selection" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
