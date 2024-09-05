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
  const project = allProjects.find((project) => project.slug === slug);
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
      <div className="mx-auto">
        <div className="relative pb-16 mx-auto">
          <Header project={project} />
          <article className="px-4 mx-auto prose prose-zinc prose-quoteless bg-zinc-50 text-slate-800">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsId;
