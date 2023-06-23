import Page from "@/components/ui/pages/Page";
import { ContactForm } from "@/components/feature-contact";

export const metadata = {
  title: "Noah Networks | Contact",
  description: "Noah Networks contact page.",
};

// Content
const title = `Contact me.`;

export default function Contact() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full gap-8">
        <h1>{title}</h1>
        <ContactForm />
      </div>
    </Page>
  );
}
