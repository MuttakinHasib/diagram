"use client";

import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import { useFlow } from "@/hooks/useFlow";
const proOptions = { hideAttribution: true };

type Props = {};

const HomePage = (props: Props) => {
  const {
    nodes,
    setNodes,
    nodeTypes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    reactFlowWrapper,
    setReactFlowInstance,
    onDrop,
    onDragOver,
  } = useFlow();

  return (
    <div className="p-5 !h-[calc(100vh-5rem-64px)]" ref={reactFlowWrapper}>
      <ReactFlow
        {...{
          proOptions,
          nodeTypes,
          nodes,
          onNodesChange,
          onEdgesChange,
          onConnect,
          onDrop,
          onDragOver,
        }}
        maxZoom={5}
        minZoom={0.3}
        onInit={setReactFlowInstance}
        fitView
        className="border rounded-md"
      >
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
};

export default HomePage;
