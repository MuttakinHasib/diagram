
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const AllBuy = (props: Node) => {
  return <NodeLayout title="All Buy" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
