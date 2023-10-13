
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Instruments = (props: Node) => {
  return <NodeLayout title="Instruments" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
