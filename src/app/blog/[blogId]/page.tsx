import Page from "@/components/ui/pages/Page";
import { Blog as BlogType } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { BlogQuery } from "@/components/graph";
import { Header, Content } from "@/components/feature-blog";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const { data }: { data: { blog: BlogType } } = await getClient().query({
    query: BlogQuery,
    variables: {
      id: params.blogId,
    },
  });

  return {
    title: `Noah Networks | ${data.blog.title}`,
  };
}

export default async function Blog({ params }: { params: { blogId: string } }) {
  const { data }: { data: { blog: BlogType } } = await getClient().query({
    query: BlogQuery,
    variables: {
      id: params.blogId,
    },
  });

  const { title, category, coverPhoto, createdAt, content } = data.blog;

  return (
    <Page>
      <div className="flex flex-col w-full h-full items-center gap-8">
        <Header
          title={title}
          category={category}
          coverPhoto={coverPhoto}
          createdAt={createdAt}
        />
        <Content content={content} />
      </div>
    </Page>
  );
}
