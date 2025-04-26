"use client";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { ShineBorder } from "@/components/ShineBorderCard";
import { GradientText } from "@/components/GradientText";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectsPage = () => {
  return (
    <motion.div
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div></div>
      <div className="container mx-auto">
        <div className="relative pb-16 px-4 mx-auto">
          <div className="pt-20 mx-auto space-y-8 max-w-7xl md:space-y-16 md:pt-24 lg:pt-32">
            <div className="flex flex-col gap-4 max-w-2xl mx-auto lg:mx-0">
              <GradientText colors={["#A07CFE", "#FFFFFF", "#FFBE7B"]} className="text-3xl font-bold tracking-tight sm:text-4xl">
                Projects
              </GradientText>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
