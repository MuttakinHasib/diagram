
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const PremiumBelow = (props: Node) => {
  return <NodeLayout title="Premium Below" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
