
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const AllSell = (props: Node) => {
  return <NodeLayout title="All Sell" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
