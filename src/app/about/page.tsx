import Page from "@/components/ui/pages/Page";
import {
  Header,
  Skills,
  Experience,
  Education,
} from "@/components/feature-about";

export const metadata = {
  title: "Noah Networks | About",
  description: "Noah Networks about page.",
};

export default function About() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <Header />
        <Skills />
        <Experience />
        <Education />
      </div>
    </Page>
  );
}
