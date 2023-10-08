"use client";

import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import { useFlow } from "@/hooks/useFlow";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <Input
          type="text"
          className="max-w-xs w-full relative z-50 top-3 left-3 bg-white border-2"
          placeholder="Enter Diagram Name"
        />
        <div className="flex items-center absolute z-50 top-3 right-3 gap-3">
          <Select>
            <SelectTrigger className="w-[180px] bg-white border-2">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-white border-2">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
};

export default HomePage;
