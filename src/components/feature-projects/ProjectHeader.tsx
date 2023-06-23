import LinkButton from "@/components/ui/buttons/LinkButton";
import BackButton from "@/components/ui/buttons/BackButton";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Content
const backButtonLabel = `Back to Projects`;
const backButtonLink = `/projects`;

interface Link {
  label: JSX.Element;
  href: string;
}
interface LinksProps {
  links: Link[];
}
interface ProjectHeaderProps {
  title: string;
  links: Link[];
  description: string;
}

function Links({ links }: LinksProps) {
  return (
    <div className="flex gap-12 pt-8 justify-center">
      {links.map(({ label, href }, index) => (
        <LinkButton
          key={index}
          href={href}
          label={label}
          newTab
          className="text-5xl"
        />
      ))}
    </div>
  );
}

export default function ProjectHeader({
  title,
  links,
  description,
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col w-full">
      <BackButton label={backButtonLabel} link={backButtonLink} />
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">{title}</h1>
        <Links links={links} />
      </div>
      <ReactMarkdown
        className="markdown pt-8"
        linkTarget="_blank"
        remarkPlugins={[remarkGfm]}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
}
