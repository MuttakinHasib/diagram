
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const StrikeSize = (props: Node) => {
  return <NodeLayout title="Strike Size" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
