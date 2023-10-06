import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-gray-100">
      <Link
        href="/"
        className="h-20 grid place-content-center text-center font-bold text-3xl bg-primary text-white"
      >
        Logo
      </Link>
      <h3 className="py-3 text-center text-xl font-bold">Categories</h3>
    </aside>
  );
};

export default Sidebar;
