import React from "react";
import Link from "next/link";
import { ShineBorder } from "@/components/ShineBorderCard";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div key={project.slug}>
    <Link href={`/projects/${project.slug}`} className="group">
      <ShineBorder
        className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg border bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-300 hover:scale-105 md:shadow-xl"
        color={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
      >
        <div className="flex flex-col h-full justify-between pointer-events-none ">
          <h3 className="text-2xl font-bold h-16 flex items-center text-zinc-200">
            {project.title}
          </h3>
          <p className="text-base font-normal text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            Learn more →
          </div>
        </div>
      </ShineBorder>
    </Link>
  </div>
); 