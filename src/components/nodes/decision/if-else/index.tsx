import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const IfElse = (props: any) => {
  console.log({ props });
  return <NodeLayout title="IF_else" fields={NODE_COMMON_FIELDS} />;
};
