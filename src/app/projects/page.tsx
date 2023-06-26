import { getClient } from "@/lib/client";
import { ProjectsQuery } from "@/components/graph";

import Page from "@/components/ui/pages/Page";
import { ProjectsGrid } from "@/components/feature-projects";
import { Project } from "@/__generated__/graphql";

export const metadata = {
  title: "Noah Networks | Projects",
  description: "Noah Networks projects page.",
};

// Content
const title = "Projects.";

export default async function Projects() {
  // Grab projects
  const { data }: { data: { projects: Project[] } } = await getClient().query({
    query: ProjectsQuery,
  });

  console.log("data: ", data);

  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <h1>{title}</h1>
        <ProjectsGrid projects={data.projects} />
      </div>
    </Page>
  );
}
