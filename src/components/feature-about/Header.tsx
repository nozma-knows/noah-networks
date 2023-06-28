"use client";

import LinkButton from "@/components/ui/buttons/LinkButton";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// About Me Content
const title = "About me.";
const aboutBlurbs = [
  `I’m a passionate software developer who loves discovering new and innovative technologies. I have a strong foundation in Computer and Electrical Engineering with degrees in both from Michigan State University and over 6 years of professional experience across multiple domains in the tech industry.`,
  `I love learnining how things work and getting hands on, so I spend a lot of my free time researching and tinkering. When I remember to give myself a break, I open up Ableton and play with sounds, or get lost on Netflix and Youtube binges.`,
];

// Links Content
const links = [
  {
    label: <FaGithub />,
    href: "https://github.com/nozma-knows",
  },
  {
    label: <FaLinkedin />,
    href: "https://www.linkedin.com/in/noahmilberger/",
  },
  {
    label: <FaTwitter />,
    href: "https://twitter.com/noahmilberger",
  },
];

function AboutMe() {
  return (
    <motion.div
      className="flex flex-col gap-4 text-xl"
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      {aboutBlurbs.map((blurb, index) => (
        <div key={index}>{blurb}</div>
      ))}
    </motion.div>
  );
}

function Links() {
  return (
    <div className="flex gap-12 pt-8 text-4xl sm:text-5xl justify-center">
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

export default function Header() {
  return (
    <div className="flex flex-col gap-8">
      <h1>{title}</h1>
      <AboutMe />
      <Links />
    </div>
  );
}
