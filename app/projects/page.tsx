"use client";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { ShineBorder } from "@/components/ShineBorderCard";
import { GradientText } from "@/components/GradientText";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="relative pb-16 px-4 mx-auto">
          <div className="pt-20 mx-auto space-y-8 max-w-7xl md:space-y-16 md:pt-24 lg:pt-32">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <GradientText colors={["#A07CFE", "#FFFFFF", "#FFBE7B"]} className="text-3xl font-bold tracking-tight sm:text-4xl">
                Projects
              </GradientText>
              <p className="mt-4 text-zinc-400">
                Some of the projects are from work and some are on my own time.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProjects.map((project) => (
              <div key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group">
                  <ShineBorder
                    className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 hover:scale-105 md:shadow-xl"
                  >
                    <div className="flex flex-col h-full justify-between pointer-events-none">
                      <GradientText colors={["#000000", "#808080"]} className="flex flex-col space-y-2 whitespace-pre-wrap text-left font-semibold dark:from-white dark:to-slate-900/10">
                        <h3 className="text-2xl font-bold h-16 flex items-center">{project.title}</h3>
                        <p className="text-base font-normal">{project.description}</p>
                      </GradientText>
                      <div className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      Learn more →
                    </div>
                    </div>
                  </ShineBorder>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
