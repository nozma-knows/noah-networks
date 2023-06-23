import Page from "@/components/ui/pages/Page";
import { ProjectsGrid } from "@/components/feature-projects";

export const metadata = {
  title: "Noah Networks | Projects",
  description: "Noah Networks projects page.",
};

// Content
const title = "Projects.";

export default function Projects() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <h1>{title}</h1>
        <ProjectsGrid />
      </div>
    </Page>
  );
}
