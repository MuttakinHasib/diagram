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
import { Handle, Position } from "reactflow";

interface IField {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  options?: string[];
}

export interface BrokerProps {
  title: string;
  fields: IField[];
}

export const Broker = ({ title, fields }: BrokerProps) => {
  return (
    <React.Fragment>
      <Handle type="target" position={Position.Bottom} />
      <Card className="w-64">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {fields.map((field) => (
                <div key={field.label} className="flex flex-col space-y-1.5">
                  <Label htmlFor={field.name}>{field.label}</Label>
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

export const BROKER_COMMON_FIELDS: IField[] = [
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

export * from './brokerA'
export * from './brokerB'
export * from './brokerC'