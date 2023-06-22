import LinkButton from "@/components/ui/buttons/LinkButton";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// About Me Content
const title = "About me.";
const aboutBlurbs = [
  `I'm a builder who specializes in software and hardware engineering. I have work experience building full-stack web applications, designing and  testing PCBs along with hardware design support and sales.`,
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
    <div className="flex flex-col gap-4 text-xl">
      {aboutBlurbs.map((blurb, index) => (
        <div key={index}>{blurb}</div>
      ))}
    </div>
  );
}

function Links() {
  return (
    <div className="flex gap-12 pt-8 text-4xl sm:text-5xl justify-center">
      {links.map(({ label, href }, index) => (
        <LinkButton key={index} href={href} label={label} newTab className="" />
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
