"use client";
import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { useSidebarStore } from "../store/sidebarStore";
import HomeContent from "../components/HomeContent";
import PageContainer from "@/components/layout/page-container"
export default function Home() {
  const { open } = useSidebarStore();
  return (
    <PageContainer>
      <HomeContent />
    </PageContainer>
  );
}
