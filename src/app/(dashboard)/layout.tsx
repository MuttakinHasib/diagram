import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
