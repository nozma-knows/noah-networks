import Page from "@/components/ui/pages/Page";
import { BlogGrid } from "@/components/feature-blog";

export const metadata = {
  title: "Noah Networks | Blog",
  description: "Noah Networks blog page.",
};

// Content
const title = "Noah's Narrative.";

export default function Blog() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <h1>{title}</h1>
        <BlogGrid />
      </div>
    </Page>
  );
}
