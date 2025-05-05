"use client";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { ShineBorder } from "@/components/ShineBorderCard";
import { GradientText } from "@/components/GradientText";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { useSidebarStore } from "../../store/sidebarStore";
import PageContainer from "@/components/layout/page-container";
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectsPage = () => {
  const { open } = useSidebarStore();
  return (
    <PageContainer>
      <div className="w-full">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-zinc-800 px-4 py-6 mb-8 w-full">
          <GradientText
            colors={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
            className="text-2xl font-bold tracking-tight w-full
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              md:static md:translate-x-0 md:translate-y-0 md:text-left md:top-auto md:left-auto md:w-auto text-center"
          >
            Projects
          </GradientText>
        </div>
        <div className="relative pb-16 px-4 mx-auto">
          <div className="pt-4 mx-auto space-y-8 max-w-7xl md:space-y-16">
            {/* Removed old header location */}
          </div>
        </div>
        <div className="px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {allProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
