"use client";

import Sidebar from "@/components/layout/Sidebar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full w-full border-2 border-white">
      {" "}
      <Sidebar />
      {children}
    </div>
  );
}
