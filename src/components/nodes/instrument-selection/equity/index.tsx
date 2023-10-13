import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const Equity = (props: Node) => {
  return (
    <NodeLayout title="Equity" nodeProps={props} fields={NODE_COMMON_FIELDS} />
  );
};
