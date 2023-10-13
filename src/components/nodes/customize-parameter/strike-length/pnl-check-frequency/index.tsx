
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const PnlCheckFrequency = (props: Node) => {
  return <NodeLayout title="PNL Check Frequency" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
