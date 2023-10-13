
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const ScanTime = (props: Node) => {
  return <NodeLayout title="Scan Time" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
