
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const TradeLegs = (props: Node) => {
  return <NodeLayout title="Trade Legs" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
