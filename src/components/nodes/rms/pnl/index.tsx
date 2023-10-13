
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Pnl = (props: Node) => {
  return <NodeLayout title="PNL" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
