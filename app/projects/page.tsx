import React from "react";
import { allProjects } from "contentlayer/generated";
import { ShineBorder } from "@/components/ShineBorderCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedCard = ({ children, color, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <ShineBorder color={color}>
        {children}
      </ShineBorder>
    </motion.div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900"
    >
      <div className="relative pb-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 text-zinc-400"
            >
              Some of the projects are from work and some are on my own time.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="container px-4 py-8 mx-auto"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {allProjects.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <Link href={`/projects/${project.slug}`} className="group">
                <AnimatedCard
                  color={["#A07CFE", "#FFFFFF", "#FFBE7B"]}
                  className="h-full"
                >
                  <div className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 md:shadow-xl">
                    <div className="flex flex-col space-y-2 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black/10 to-gray-300/80 bg-clip-text text-left font-semibold text-transparent dark:from-white dark:to-slate-900/10">
                      <span className="text-sm">{project.date}</span>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-base font-normal">{project.description}</p>
                    </div>
                    <div className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      Learn more →
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
