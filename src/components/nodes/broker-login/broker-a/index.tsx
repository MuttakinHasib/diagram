import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const BrokerA = (props: Node) => {
  return (
    <NodeLayout
      title="Broker A"
      nodeProps={props}
      fields={NODE_COMMON_FIELDS}
    />
  );
};
