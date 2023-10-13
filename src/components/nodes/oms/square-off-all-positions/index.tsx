
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const SquareOffAllPositions = (props: Node) => {
  return <NodeLayout title="Square Off All Positions" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
