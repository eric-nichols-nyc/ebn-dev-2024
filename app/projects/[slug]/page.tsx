"use client"
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { Mdx } from "@/components/mdx";
import { motion } from "framer-motion";

type Props = {
  params: {
    slug: string;
  };
};

type Project = {
  slug: string;
  title: string;
  description: string;
  repository?: string;
  url?: string;
  tags?: string[];
  body: { code: string };
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectsId = ({ params }: Props) => {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug) as Project | undefined;
  if (!project) {
    notFound();
  }
  return (
    <motion.div 
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="min-h-screen bg-zinc-50">
        <div className="relative  flex flex-col pb-16 mx-auto h-full">
          <Header project={project} />
          <div className="max-w-2xl px-4 mx-auto">
            <article className="prose prose-zinc prose-quoteless text-slate-800">
              <Mdx code={project.body.code} />
            </article>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsId;
