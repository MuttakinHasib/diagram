
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const CancelOpenOrder = (props: Node) => {
  return <NodeLayout title="Cancel Open Order" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
