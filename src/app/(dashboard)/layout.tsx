"use client";
import { ReactFlowProvider } from "reactflow";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactFlowProvider>
      <main className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </main>
    </ReactFlowProvider>
  );
};

export default DashboardLayout;
