
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const Selling = (props: Node) => {
  return <NodeLayout title="Selling" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
