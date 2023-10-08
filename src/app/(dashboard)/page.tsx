"use client";
import Broker from "@/components/nodes";
import { initialNodes } from "@/data/node";
import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

type Props = {};

const getLayoutedElements = (nodes: any, edges: any) => {
  return { nodes, edges };
};

const HomePage = (props: Props) => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const nodeTypes = useMemo(() => ({ broker: Broker }), []);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges);

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [nodes, edges]);

  const proOptions = { hideAttribution: true };
  return (
    <div className="p-5 !h-[calc(100vh-5rem-64px)]">
      <ReactFlow
        {...{ proOptions, nodeTypes, nodes, onNodesChange, onEdgesChange }}
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
