import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Handle, Node, Position } from "reactflow";

interface IField {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  options?: string[];
}

export interface NodeLayoutProps {
  title: string;
  fields: IField[];
  nodeProps?: Node;
}

export const NodeLayout = (props: NodeLayoutProps) => {
  const { nodeProps, fields } = props;
  return (
    <React.Fragment>
      <Handle type="source" position={Position.Bottom} />
      <Card className="w-64 divide-y-2 border-2 border-blue-800 shadow-xl">
        <CardHeader className="py-3">
          <CardTitle>{nodeProps?.data?.nodeLabel}</CardTitle>
        </CardHeader>
        <CardContent className="pt-3">
          <form>
            <div className="grid w-full items-center gap-4">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="flex flex-col space-y-1.5 relative"
                >
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Handle
                    type="source"
                    isConnectable
                    id={field.name}
                    position={Position.Right}
                    style={{ top: 32, right: -30 }}
                  />
                  <Select name={field.name}>
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {field.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export const NODE_COMMON_FIELDS: IField[] = [
  {
    label: "Input Correction",
    name: "input_correction",
    type: "select",
    options: ["next", "sveltekit", "astro", "nuxt"],
  },
  {
    label: "Value 1",
    name: "value_1",
    type: "select",
    options: ["next", "sveltekit", "astro", "nuxt"],
  },
  {
    label: "Value 2",
    name: "value_2",
    type: "select",
    options: ["next", "sveltekit", "astro", "nuxt"],
  },
  {
    label: "Output Correction",
    name: "output_correction",
    type: "select",
    options: ["next", "sveltekit", "astro", "nuxt"],
  },
];
