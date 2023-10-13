import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const BrokerB = (props: Node) => {
  return (
    <NodeLayout
      title="Broker B"
      nodeProps={props}
      fields={NODE_COMMON_FIELDS}
    />
  );
};
