import { BrokerA, BrokerB, BrokerC } from "@/components/nodes/brokers/";
import { camelCase, flatMap, map, pick } from "lodash";

export const sidebarNavigation = [
  {
    label: "Broker Login",
    children: [
      { name: "Broker A", component: BrokerA },
      { name: "Broker B", component: BrokerB },
      { name: "Broker C", component: BrokerC },
    ],
  },
  {
    label: "Instrument Selection",
    children: [
      {
        label: "Options",
        children: [
          { name: "Index", component: BrokerA },
          { name: "Expiry Date", component: BrokerA },
        ],
      },
      { name: "Equity", component: BrokerA },
    ],
  },
  {
    label: "Customize Parameter",
    children: [
      { name: "Strike Size", component: BrokerA },
      { name: "Lot Size", component: BrokerA },
      {
        label: "Strike Length",
        children: [
          { name: "Scan Time", component: BrokerA },
          { name: "PNL Check Frequency", component: BrokerA },
          { name: "Trading Decision", component: BrokerA },
          { name: "Buying", component: BrokerA },
          { name: "Selling", component: BrokerA },
        ],
      },
    ],
  },
  {
    label: "Decision",
    children: [{ name: "IF_else", component: BrokerA }],
  },
  {
    label: "Loops",
    children: [
      { name: "For Loop", component: BrokerA },
      { name: "While Loop", component: BrokerA },
    ],
  },
  {
    label: "Trading",
    children: [
      { name: "Instruments", component: BrokerA },
      { name: "Indicators", component: BrokerA },
      { name: "Triggers", component: BrokerA },
      { name: "Trade Legs", component: BrokerA },
    ],
  },
  {
    label: "OMS",
    children: [
      { name: "Cancel Open Order", component: BrokerA },
      { name: "Square Off All Positions", component: BrokerA },
      { name: "Order Filter", component: BrokerA },
      {
        label: "Square Positions",
        children: [
          { name: "Price Limit", component: BrokerA },
          { name: "Premium Above", component: BrokerA },
          { name: "Premium Below", component: BrokerA },
          { name: "All Buy", component: BrokerA },
          { name: "All Sell", component: BrokerA },
        ],
      },
    ],
  },
  {
    label: "Hedge Buy",
    children: [
      { name: "Premium Max Limit", component: BrokerA },
      { name: "Quantity", component: BrokerA },
    ],
  },
  {
    label: "RMS",
    children: [
      { name: "PNL", component: BrokerA },
      { name: "Order Count", component: BrokerA },
    ],
  },
  {
    label: "Trade Leg",
    children: [{ name: "Strike Selection", component: BrokerA }],
  },
  // Add more sections and children as needed
];

export const generatedNodeTypes: any = Object.assign(
  {},
  ...flatMap(sidebarNavigation, (item) =>
    flatMap(item.children, (child) => {
      if (child.children) {
        return map(child.children, (grandChild) =>
          pick(grandChild, ["name", "component"])
        );
      }
      return pick(child, ["name", "component"]);
    })
  ).map((node) => ({
    [camelCase(node.name)!]: node.component,
  }))
);
