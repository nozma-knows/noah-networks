"use client";

import Image from "next/image";
import {
  RabbitHoleLogo,
  FrankenotesLogo,
  AnonymessLogo,
  RenewedMoodLogo,
} from "@/assets/project-logos";

// Interfaces
interface ProjectPreviewProps {
  title: string;
  category: string;
  logo: string;
  description: string;
}

// Content
const projects = [
  {
    title: "Rabbit Hole",
    category: "Web Application",
    logo: RabbitHoleLogo,
    description:
      "A cutting-edge AI-powered web app capable of generating tailored interacitve learning resources.",
  },
  {
    title: "Frankenotes",
    category: "Web Application",
    logo: FrankenotesLogo,
    description:
      "AI-powered notebook - Revolutionize the way you capture, access, and manage your thoughts.",
  },
  {
    title: "Renewed Mood",
    category: "Mobile Application",
    logo: RenewedMoodLogo,
    description: "Multimodal journaling mobile app for mood tracking.",
  },
  {
    title: "Anonymess",
    category: "Web Application",
    logo: AnonymessLogo,
    description: "Real-time anonymous message board.",
  },
];

function ProjectPreview({
  title,
  category,
  logo,
  description,
}: ProjectPreviewProps) {
  return (
    <div className="flex flex-col w-full h-full min-h-max bg-white/20 rounded-lg border-2 border-transparent hover:border-white cursor-pointer">
      <div className="flex items-center justify-center p-8 bg-blue w-full h-48 rounded-lg">
        <div className="w-full h-full relative">
          <Image src={logo} alt={`${title} logo`} fill />
        </div>
      </div>
      <div className="p-4">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
      {projects.map(({ title, category, logo, description }, index) => (
        <div key={index}>
          <ProjectPreview
            title={title}
            category={category}
            logo={logo}
            description={description}
          />
        </div>
      ))}
    </div>
  );
}
