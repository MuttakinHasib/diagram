
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const TradingDecision = (props: Node) => {
  return <NodeLayout title="Trading Decision" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
