import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const OptionIndex = (props: Node) => {
  return (
    <NodeLayout title="Index" nodeProps={props} fields={NODE_COMMON_FIELDS} />
  );
};
