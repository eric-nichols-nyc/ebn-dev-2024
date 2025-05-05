import React from "react";
import Link from "next/link";
import { ShineBorder } from "@/components/ShineBorderCard";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    shortDescription?: string;
    tags?: string[];
    image?: string;
    url?: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div key={project.slug}>
    <Link href={`/projects/${project.slug}`} className="group">
      <ShineBorder
        className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg border bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-300 hover:scale-105 md:shadow-xl"
        color={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
      >
        <h3 className="text-2xl font-bold h-16 flex items-center text-zinc-200 mb-4">
          {project.title}
        </h3>
        {project.image && (
          <div className="w-full mb-4 aspect-[4/3] relative rounded-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title + " project image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
        )}
        <div className="flex flex-col h-full justify-between pointer-events-none w-full">
          {project.shortDescription && (
            <p className="text-sm font-medium text-zinc-300 mb-2">
              {project.shortDescription}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex flex-row items-center justify-between w-full">
            <div className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
              Learn more →
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
              >
                Visit site ↗
              </a>
            )}
          </div>
        </div>
      </ShineBorder>
    </Link>
  </div>
);
