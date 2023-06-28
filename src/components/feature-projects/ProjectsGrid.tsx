"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/__generated__/graphql";
import { KebabCase } from "@/components/utils/format";
import { motion } from "framer-motion";

interface ProjectPreviewProps {
  id: string;
  name: string;
  category: string;
  title: string;
  logo: string;
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

function ProjectPreview({ id, name, title, logo }: ProjectPreviewProps) {
  return (
    <motion.div
      className="flex h-full rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link
        href={`/projects/${id}`}
        className="flex w-full h-full min-h-max cursor-pointer bg-gradient-to-r from-blue/60 to-blue/40 rounded-lg"
      >
        <div className="flex items-center justify-center p-8 w-48  bg-gradient-to-r from-blue/80 to-blue/60 rounded-l-lg">
          <div className="w-full h-full relative">
            <Image src={logo} alt={`${title} logo`} fill />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h2 className="text-green font-bold">{name}</h2>
          <div className="text-base">{title}</div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const sortedProjects = projects.sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt)
  );

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const projectAnimation = {
    hidden: { opacity: 0, x: 0, y: 20 },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 grid-flow-row auto-rows-fr gap-4"
      variants={containerAnimation}
      initial="hidden"
      animate="show"
    >
      {sortedProjects.map(({ id, name, category, title, logo }, index) => (
        <motion.div key={index} variants={projectAnimation}>
          <ProjectPreview
            id={id}
            name={name}
            category={category || ""}
            title={title}
            logo={logo}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
