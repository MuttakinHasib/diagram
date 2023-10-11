import {
  AllBuy,
  AllSell,
  BrokerA,
  BrokerB,
  BrokerC,
  Buying,
  CancelOpenOrder,
  Equity,
  ExpiryDate,
  ForLoop,
  IfElse,
  Indicators,
  Instruments,
  LotSize,
  OptionIndex,
  OrderCount,
  OrderFilter,
  Pnl,
  PnlCheckFrequency,
  PremiumAbove,
  PremiumBelow,
  PremiumMaxLimit,
  PriceLimit,
  Quantity,
  ScanTime,
  Selling,
  SquareOffAllPositions,
  StrikeSelection,
  StrikeSize,
  TradeLegs,
  TradingDecision,
  Triggers,
  WhileLoop,
} from "@/components/nodes";
import { camelCase, flatMap, map, pick } from "lodash";
import { NodeTypes } from "reactflow";

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
          { name: "Index", component: OptionIndex },
          { name: "Expiry Date", component: ExpiryDate },
        ],
      },
      { name: "Equity", component: Equity },
    ],
  },
  {
    label: "Customize Parameter",
    children: [
      { name: "Strike Size", component: StrikeSize },
      { name: "Lot Size", component: LotSize },
      {
        label: "Strike Length",
        children: [
          { name: "Scan Time", component: ScanTime },
          { name: "PNL Check Frequency", component: PnlCheckFrequency },
          { name: "Trading Decision", component: TradingDecision },
          { name: "Buying", component: Buying },
          { name: "Selling", component: Selling },
        ],
      },
    ],
  },
  {
    label: "Decision",
    children: [{ name: "IF_else", component: IfElse }],
  },
  {
    label: "Loops",
    children: [
      { name: "For Loop", component: ForLoop },
      { name: "While Loop", component: WhileLoop },
    ],
  },
  {
    label: "Trading",
    children: [
      { name: "Instruments", component: Instruments },
      { name: "Indicators", component: Indicators },
      { name: "Triggers", component: Triggers },
      { name: "Trade Legs", component: TradeLegs },
    ],
  },
  {
    label: "OMS",
    children: [
      { name: "Cancel Open Order", component: CancelOpenOrder },
      { name: "Square Off All Positions", component: SquareOffAllPositions },
      { name: "Order Filter", component: OrderFilter },
      {
        label: "Square Positions",
        children: [
          { name: "Price Limit", component: PriceLimit },
          { name: "Premium Above", component: PremiumAbove },
          { name: "Premium Below", component: PremiumBelow },
          { name: "All Buy", component: AllBuy },
          { name: "All Sell", component: AllSell },
        ],
      },
    ],
  },
  {
    label: "Hedge Buy",
    children: [
      { name: "Premium Max Limit", component: PremiumMaxLimit },
      { name: "Quantity", component: Quantity },
    ],
  },
  {
    label: "RMS",
    children: [
      { name: "PNL", component: Pnl },
      { name: "Order Count", component: OrderCount },
    ],
  },
  {
    label: "Trade Leg",
    children: [{ name: "Strike Selection", component: StrikeSelection }],
  },
  // Add more sections and children as needed
];

export const generatedNodeTypes: NodeTypes = Object.assign(
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
