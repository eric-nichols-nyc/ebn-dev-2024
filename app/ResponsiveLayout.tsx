'use client';
import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { useSidebarStore } from "../store/sidebarStore";

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const { open } = useSidebarStore();
  return (
    <div className="flex min-h-screen bg-zinc-950 p-8">
      <div
        className={`transition-all duration-300 ${open ? "w-72" : "w-16"} bg-zinc-900 border-r border-zinc-800 mr-8 flex-shrink-0`}
      >
        <Sidebar />
      </div>
      <div className="bg-white rounded-lg p-8 transition-all duration-300">
        {children}
      </div>
    </div>
  );
} 