import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { Mdx } from "@/components/mdx";

type Props = {
  params: {
    slug: string;
  };
};
const ProjectsId = ({ params }: Props) => {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }
  return (
    <div>
      <div className="bg-zinc-50 min-h-screen">
        <div className="relative pb-16">
          <Header project={project} />
          <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProjectsId;
