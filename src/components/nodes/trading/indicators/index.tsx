
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Indicators = (props: Node) => {
  return <NodeLayout title="Indicators" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
