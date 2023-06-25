import Page from "@/components/ui/pages/Page";
import { BlogGrid } from "@/components/feature-blog";
import { getClient } from "@/lib/client";
import { BlogsQuery } from "@/components/graph";
import { Blog as BlogType } from "@/__generated__/graphql";

export const metadata = {
  title: "Noah Networks | Blog",
  description: "Noah Networks blog page.",
};

// Content
const title = "Noah's Narrative.";

export default async function Blog() {
  // Grab blogs
  const { data }: { data: { blogs: BlogType[] } } = await getClient().query({
    query: BlogsQuery,
  });
  console.log("blog - data: ", data);
  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <h1>{title}</h1>
        <BlogGrid blogs={data.blogs} />
      </div>
    </Page>
  );
}
