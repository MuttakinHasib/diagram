
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const ExpiryDate = (props: Node) => {
  return <NodeLayout title="Expiry Date" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
