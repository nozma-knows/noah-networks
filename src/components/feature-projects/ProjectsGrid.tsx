"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/__generated__/graphql";
import { KebabCase } from "@/components/utils/format";

interface ProjectPreviewProps {
  name: string;
  category: string;
  title: string;
}

// Content
// const projects = [
//   {
//     title: "Rabbit Hole",
//     category: "Web Application",
//     logo: RabbitHoleLogo,
//     description:
//       "A cutting-edge AI-powered web app capable of generating tailored interacitve learning resources.",
//     link: "/projects/rabbit-hole",
//   },
//   {
//     title: "Frankenotes",
//     category: "Web Application",
//     logo: FrankenotesLogo,
//     description:
//       "AI-powered notebook - Revolutionize the way you capture, access, and manage your thoughts.",
//     link: "/projects/frankenotes",
//   },
//   {
//     title: "Noah Networks",
//     category: "Web Application",
//     logo: NoahNetworksLogo,
//     description: "Personal website and blog.",
//     link: "/projects/noah-networks",
//   },
//   {
//     title: "Renewed Mood",
//     category: "Mobile Application",
//     logo: RenewedMoodLogo,
//     description: "Multimodal journaling mobile app for mood tracking.",
//     link: "/projects/renewed-mood",
//   },
//   {
//     title: "Anonymess",
//     category: "Web Application",
//     logo: AnonymessLogo,
//     description: "Real-time anonymous message board.",
//     link: "/projects/anonymess",
//   },
// ];

function ProjectPreview({ name, title }: ProjectPreviewProps) {
  const logoLocation = `${KebabCase(name)}-logo.svg`;
  return (
    <Link
      href={`/projects/${KebabCase(name)}`}
      className="flex flex-col w-full h-full min-h-max bg-white/20 rounded-lg border-2 border-transparent hover:border-white cursor-pointer"
    >
      <div className="flex items-center justify-center p-8 bg-blue w-full h-48 rounded-lg">
        <div className="w-full h-full relative">
          <Image
            src={`./project-logos/${logoLocation}`}
            alt={`${title} logo`}
            fill
          />
        </div>
      </div>
      <div className="p-4">
        <h3>{name}</h3>
        <div>{title}</div>
      </div>
    </Link>
  );
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
      {projects.map(({ name, category, title }, index) => (
        <div key={index}>
          <ProjectPreview
            name={name}
            category={category || ""}
            title={title || ""}
          />
        </div>
      ))}
    </div>
  );
}
