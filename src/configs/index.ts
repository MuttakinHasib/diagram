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
