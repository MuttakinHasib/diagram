
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const LotSize = (props: Node) => {
  return <NodeLayout title="Lot Size" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
