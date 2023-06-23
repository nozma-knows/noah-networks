"use client";

import LinkButton from "@/components/ui/buttons/LinkButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Link {
  label: JSX.Element;
  href: string;
}

interface LinksProps {
  links: Link[];
}
interface BlogHeaderProps {
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

export default function BlogHeader({
  title,
  links,
  description,
}: BlogHeaderProps) {
  return (
    <div className="flex flex-col w-full">
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
