import { generatedNodeTypes } from "@/configs";
import { initialNodes } from "@/data/node";

import { nanoid } from "nanoid";
import { DragEvent, useCallback, useMemo, useRef, useState } from "react";
import {
  Edge,
  MarkerType,
  Node,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

export const useFlow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = useMemo(() => generatedNodeTypes, []);
  // console.log({ nodeTypes });

  const onConnect = useCallback(
    (params: any) => {
      if (params.source === params.target) return;

      const addNewEdge = {
        id: nanoid(),
        source: params.source,
        target: params.target,
        type: "default",
        arrowHeadType: "arrow",
        style: { stroke: "black", strokeWidth: "1.3" },
        labelBgBorderRadius: 4,
        markerStart: { type: MarkerType.Arrow },
        markerEnd: { type: MarkerType.ArrowClosed, color: "black" },
      };
      setEdges((eds: Edge[]) => addEdge({ ...addNewEdge, ...params }, eds));
    },
    [setEdges]
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const nodeLabel = event.dataTransfer.getData(
        "application/reactflow/nodeLabel"
      );

      if (typeof type === "undefined" || !type || !reactFlowBounds) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      if (!position) return;

      const newNode = {
        id: nanoid(),
        type,
        position,
        data: { nodeLabel },
      };

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    onDrop,
    onDragOver,
    nodeTypes,
    reactFlowWrapper,
    setReactFlowInstance,
  };
};
