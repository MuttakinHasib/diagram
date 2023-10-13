
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Triggers = (props: Node) => {
  return <NodeLayout title="Triggers" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
