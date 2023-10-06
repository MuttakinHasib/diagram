import React from "react";
import {
  ArrowDownToLine,
  BookMarked,
  Copy,
  Crop,
  Eraser,
  ExternalLink,
} from "lucide-react";

const controls = [
  {
    icon: <BookMarked color="#333" size={22} />,
  },
  {
    icon: <Crop color="#333" size={22} />,
  },
  {
    icon: <ExternalLink color="#333" size={22} />,
  },
  {
    icon: <Copy color="#333" size={22} />,
  },
  {
    icon: <ArrowDownToLine color="#333" size={22} />,
  },
  {
    icon: <Eraser color="#333" size={22} />,
  },
];

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-primary h-20 px-5 flex items-center justify-end"></header>
      <div className="py-2 px-5 flex justify-between items-center gap-10">
        <h3 className="text-center text-xl font-bold">Flow Diagram</h3>
        <div className="flex items-center gap-2">
          <button className="border rounded-md py-1 px-3">Blacktest</button>
          <button className="border rounded-md py-1 px-3">Live</button>
        </div>
        <div className="flex items-center gap-2">
          {controls.map((control, index) => (
            <button key={index} className="border rounded-md py-2 px-3">
              {control.icon}
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
