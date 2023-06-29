"use client";

import LinkButton from "@/components/ui/buttons/LinkButton";
import BackButton from "@/components/ui/buttons/BackButton";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Content
const backButtonLabel = `Back to Projects`;
const backButtonLink = `/projects`;

interface LinksProps {
  github: string | undefined;
  website: string | undefined;
}
interface ProjectHeaderProps {
  logo: string;
  name: string;
  github: string | undefined;
  website: string | undefined;
}

function Links({ github, website }: LinksProps) {
  return (
    <div className="flex gap-12 pt-8 justify-center">
      {github && (
        <LinkButton
          href={github}
          label={<FaGithub />}
          newTab
          className="text-5xl"
        />
      )}
      {website && (
        <LinkButton
          href={website}
          label={<FaLink />}
          newTab
          className="text-5xl"
        />
      )}
    </div>
  );
}

export default function ProjectHeader({
  logo,
  name,
  github,
  website,
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col w-full">
      <BackButton label={backButtonLabel} link={backButtonLink} />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
      >
        <div className="flex gap-8 items-center">
          <div className="w-24 h-24 bg-blue p-4 rounded-lg">
            <div className="w-full h-full relative">
              <Image src={logo} alt={`${name} logo`} fill />
            </div>
          </div>
          <h1 className="text-6xl">{name}</h1>
        </div>

        <Links github={github} website={website} />
      </motion.div>
    </div>
  );
}
