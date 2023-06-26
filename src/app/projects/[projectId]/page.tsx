import Page from "@/components/ui/pages/Page";
import { Header, Content } from "@/components/feature-projects";
import { Project as ProjectType } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { ProjectQuery } from "@/components/graph";

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const { data }: { data: { project: ProjectType } } = await getClient().query({
    query: ProjectQuery,
    variables: {
      id: params.projectId,
    },
  });

  const { name, github, website, content } = data.project;

  return (
    <Page>
      <div className="flex flex-col w-full h-full items-center gap-8">
        <Header
          name={name}
          github={github || undefined}
          website={website || undefined}
        />
        <Content content={content} />
      </div>
    </Page>
  );
}
