import pkg from "lodash";
import fs from "fs";
import path from "path";

const { camelCase, kebabCase, upperFirst } = pkg;
const __dirname = path.resolve();

export const sidebarNavigation = [
  {
    label: "Broker Login",
    children: [
      { name: "Broker A" },
      { name: "Broker B" },
      { name: "Broker C" },
    ],
  },
  {
    label: "Instrument Selection",
    children: [
      {
        label: "Options",
        children: [{ name: "Index" }, { name: "Expiry Date" }],
      },
      { name: "Equity" },
    ],
  },
  {
    label: "Customize Parameter",
    children: [
      { name: "Strike Size" },
      { name: "Lot Size" },
      {
        label: "Strike Length",
        children: [
          { name: "Scan Time" },
          { name: "PNL Check Frequency" },
          { name: "Trading Decision" },
          { name: "Buying" },
          { name: "Selling" },
        ],
      },
    ],
  },
  {
    label: "Decision",
    children: [{ name: "IF_else" }],
  },
  {
    label: "Loops",
    children: [{ name: "For Loop" }, { name: "While Loop" }],
  },
  {
    label: "Trading",
    children: [
      { name: "Instruments" },
      { name: "Indicators" },
      { name: "Triggers" },
      { name: "Trade Legs" },
    ],
  },
  {
    label: "OMS",
    children: [
      { name: "Cancel Open Order" },
      { name: "Square Off All Positions" },
      { name: "Order Filter" },
      {
        label: "Square Positions",
        children: [
          { name: "Price Limit" },
          { name: "Premium Above" },
          { name: "Premium Below" },
          { name: "All Buy" },
          { name: "All Sell" },
        ],
      },
    ],
  },
  {
    label: "Hedge Buy",
    children: [{ name: "Premium Max Limit" }, { name: "Quantity" }],
  },
  {
    label: "RMS",
    children: [{ name: "PNL" }, { name: "Order Count" }],
  },
  {
    label: "Trade Leg",
    children: [{ name: "Strike Selection" }],
  },
  // Add more sections and children as needed
];

const componentCode = (name) => {
  return `
import React from "react";
import { NODE_COMMON_FIELDS, NodeLayout } from "@/layouts";

export const ${upperFirst(camelCase(name))} = () => {
  return <NodeLayout title="${name}" fields={NODE_COMMON_FIELDS} />;
}; 
    `;
};

sidebarNavigation.forEach((navigation) => {
  const rootDirectory = path.join(
    __dirname,
    `/src/components/nodes/${kebabCase(navigation.label)}`
  );
  const nodesDirectory = path.join(__dirname, `/src/components/nodes`);

  navigation.children.forEach((child) => {
    if (child.children) {
      const childDirectory = `${rootDirectory}/${kebabCase(child.label)}`;

      child.children.forEach((grandChild) => {
        const file = `${childDirectory}/${kebabCase(grandChild.name)}`;
        if (!fs.existsSync(file)) {
          fs.mkdirSync(file, { recursive: true });
        }

        fs.writeFileSync(file + "/index.tsx", componentCode(grandChild.name));
        fs.appendFileSync(
          childDirectory + "/index.ts",
          `export * from "./${kebabCase(grandChild.name)}"\n`
        );
      });
      if (child.label) {
        fs.appendFileSync(
          rootDirectory + "/index.ts",
          `export * from "./${kebabCase(child.label)}"\n`
        );
      }
    } else {
      const file = `${rootDirectory}/${kebabCase(child.name)}`;
      if (!fs.existsSync(file)) {
        fs.mkdirSync(file, { recursive: true });
      }
      fs.writeFileSync(file + "/index.tsx", componentCode(child.name));
      fs.appendFileSync(
        rootDirectory + "/index.ts",
        `export * from "./${kebabCase(child.name)}"\n`
      );
      console.log("creating", child.name);
    }
  });

  fs.appendFileSync(
    nodesDirectory + "/index.ts",
    `export * from "./${kebabCase(navigation.label)}"\n`
  );
});
