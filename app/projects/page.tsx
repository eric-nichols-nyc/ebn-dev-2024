import React from "react";
import { allProjects } from "contentlayer/generated";
import { ShineBorder } from "@/components/ShineBorderCard";
import { useTheme } from "next-themes";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      <div className="relative pb-16">
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-4 gap-3">
        {allProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <ShineBorder
              className="relative flex h-auto w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
            >
              <div className="flex flex-col pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black/10 to-gray-300/80 bg-clip-text text-left font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                <span className="text-sm">{project.date}</span>
                <span className="text-3xl">{project.title}</span>
                <span className="text-md">{project.description}</span>
              </div>
            </ShineBorder>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
