
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";
import { Node } from "reactflow";

export const BrokerC = (props: Node) => {
  return <NodeLayout title="Broker C" nodeProps={props} fields={NODE_COMMON_FIELDS} />;
};
