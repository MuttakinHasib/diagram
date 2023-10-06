"use client";
import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

type Props = {};

const HomePage = (props: Props) => {
  const proOptions = { hideAttribution: true };
  return (
    <div className="p-5 !h-[calc(100vh-5rem-64px)]">
      <ReactFlow proOptions={proOptions} className="border rounded-md">
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
};

export default HomePage;
