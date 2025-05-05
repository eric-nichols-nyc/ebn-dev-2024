"use client"
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { Mdx } from "@/components/mdx";
import { motion } from "framer-motion";
import { useSidebarStore } from "../../../store/sidebarStore";

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
  const { open } = useSidebarStore();
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug) as Project | undefined;
  if (!project) {
    notFound();
  }
  return (
    <motion.div 
      className={`flex flex-col flex-grow h-full bg-white transition-transform duration-300 md:ml-72 ${open ? "translate-x-72" : "translate-x-0"} md:translate-x-0`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header project={project} />

        <div className="relative flex flex-col pb-16 mx-auto h-full">
          <div className="max-w-2xl px-4 mx-auto">
            <article className="prose prose-zinc prose-quoteless text-slate-800">
              <Mdx code={project.body.code} />
            </article>
          </div>
        </div>
    </motion.div>
  );
};

export default ProjectsId;
