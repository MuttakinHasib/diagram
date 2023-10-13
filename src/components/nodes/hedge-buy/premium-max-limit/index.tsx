
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const PremiumMaxLimit = (props: Node) => {
  return <NodeLayout title="Premium Max Limit" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
