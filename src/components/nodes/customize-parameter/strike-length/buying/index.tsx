
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Buying = (props: Node) => {
  return <NodeLayout title="Buying" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
