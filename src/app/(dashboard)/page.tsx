"use client";
import Broker from "@/components/nodes";
import { initialNodes } from "@/data/node";
import React, { useCallback, useMemo, useState, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  useEdgesState,
  useNodesState,
  useReactFlow,
  addEdge,
} from "reactflow";
import { nanoid } from "nanoid";

type Props = {};

const HomePage = (props: Props) => {
  const reactFlowWrapper: any = useRef(null);
  const { fitView } = useReactFlow();
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodeTypes = useMemo(() => ({ broker: Broker }), []);

  const proOptions = { hideAttribution: true };
  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds: Edge[]) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: "azim",
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds: Node) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  return (
    <div
      className="p-5 !h-[calc(100vh-5rem-64px)] reactflow-wrapper"
      ref={reactFlowWrapper}
    >
      <ReactFlow
        {...{ proOptions, nodeTypes, nodes, onNodesChange, onEdgesChange }}
        // onNodeClick={onNodeClick}
        // onNodeMouseEnter={handleMouseEnter}
        onConnect={onConnect}
        onDrop={onDrop}
        maxZoom={5}
        minZoom={0.3}
        fitview="true"
        onInit={setReactFlowInstance}
        onDragOver={onDragOver}
        arrowheadcolor="#595A66"
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
