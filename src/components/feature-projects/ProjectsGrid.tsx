"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RabbitHoleLogo,
  FrankenotesLogo,
  AnonymessLogo,
  RenewedMoodLogo,
  NoahNetworksLogo,
} from "@/assets/project-logos";

// Interfaces
interface ProjectPreviewProps {
  title: string;
  category: string;
  logo: string;
  description: string;
  link: string;
}

// Content
const projects = [
  {
    title: "Rabbit Hole",
    category: "Web Application",
    logo: RabbitHoleLogo,
    description:
      "A cutting-edge AI-powered web app capable of generating tailored interacitve learning resources.",
    link: "/projects/rabbit-hole",
  },
  {
    title: "Frankenotes",
    category: "Web Application",
    logo: FrankenotesLogo,
    description:
      "AI-powered notebook - Revolutionize the way you capture, access, and manage your thoughts.",
    link: "/projects/frankenotes",
  },
  {
    title: "Noah Networks",
    category: "Web Application",
    logo: NoahNetworksLogo,
    description: "Personal website and blog.",
    link: "/projects/noah-networks",
  },
  {
    title: "Renewed Mood",
    category: "Mobile Application",
    logo: RenewedMoodLogo,
    description: "Multimodal journaling mobile app for mood tracking.",
    link: "/projects/renewed-mood",
  },
  {
    title: "Anonymess",
    category: "Web Application",
    logo: AnonymessLogo,
    description: "Real-time anonymous message board.",
    link: "/projects/anonymess",
  },
];

function ProjectPreview({
  title,
  category,
  logo,
  description,
  link,
}: ProjectPreviewProps) {
  return (
    <Link
      href={link}
      className="flex flex-col w-full h-full min-h-max bg-white/20 rounded-lg border-2 border-transparent hover:border-white cursor-pointer"
    >
      <div className="flex items-center justify-center p-8 bg-blue w-full h-48 rounded-lg">
        <div className="w-full h-full relative">
          <Image src={logo} alt={`${title} logo`} fill />
        </div>
      </div>
      <div className="p-4">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </Link>
  );
}

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
      {projects.map(({ title, category, logo, description, link }, index) => (
        <div key={index}>
          <ProjectPreview
            title={title}
            category={category}
            logo={logo}
            description={description}
            link={link}
          />
        </div>
      ))}
    </div>
  );
}
