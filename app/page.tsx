"use client";
import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { useSidebarStore } from "./store/sidebarStore";
import HomeContent from "../components/HomeContent";

export default function Home() {
  const { open } = useSidebarStore();
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-800/80 to-black p-4 transition-transform duration-300 md:ml-72
        ${open ? "translate-x-72" : "translate-x-0"} md:translate-x-0`
      }
    >
      <HomeContent />
    </div>
  );
}
