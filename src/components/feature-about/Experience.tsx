"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Content
const title = "Experience";
const experiences = [
  {
    title: "Rabbit Hole",
    subtitle: "Full-stack React Developer",
    start: "Feb. 2023",
    end: "Present",
    link: "https://www.rabbit-hole.dev/",
    points: [
      `Tech Stack / Libraries - TypeScript, NextJS, TailwindCSS, GraphQL, NodeJS, Express, Postgres, Prisma, Docker, Vercel, LangChain, OpenAI, Pinecone, MUI, React-Hook-Form`,
      `Developing a cutting-edge AI-powered web app capable of generating tailored interactive learning resources.`,
      `Design a modern website and manage a Slack channel for supporting and engaging with users.`,
      `Work through validation phases using the SPRINT methodology.`,
    ],
  },
  {
    title: "tbh",
    subtitle: "Full-stack React Developer",
    start: "Jan. 2022",
    end: "Feb. 2023",
    link: "https://www.tbh.us/",
    points: [
      `Tech Stack / Libraries - JavaScript, TypeScript, React, NextJS, REST, Redux, TailwindCSS, NodeJS, Express, NestJS, Docker, AWS, Zoom API, Stripe API, Google APIs, MUI, React-Hook-Form`,
      `Designed, built, and maintained a user-facing web application for connecting 1000+ students to live therapists, interactive content and like-minded students. Lead to a 20% increase in reported well being for users.`,
      `Implemented a web application for administrators, providing real-time insights into user details, participation, and feedback. This tool directly resulted in four new contracts being signed within the next two months.`,
    ],
  },
  {
    title: "Renewed Mood",
    subtitle: "Full Stack React Native Developer",
    start: "Jun. 2021",
    end: "Jan. 2022",
    points: [
      `Tech Stack / Libraries - JavaScript, React Native, REST, Redux, NodeJS, Express, AWS, MUI, Formik`,
      `Created a multimodal journaling mobile app capable of video, audio and text input with built-in features for mood tracking and text-to-speech capability.`,
      `Managed a Discord channel for engaging with users.`,
    ],
  },
  {
    title: "Texas Instruments",
    subtitle: "Field Apps Engineer",
    start: "May 2018",
    end: "May 2021",
    link: "https://www.ti.com/",
    points: [
      `Provided technical support to six tier one automotive supplier with applications including electric and powertrain systems, advanced driver assistance systems (ADAS) and body electronics.`,
      `Leveraged TI's portfolio and collateral to provide customers with solutions that improved their end equipment size, cost, and reliability.`,
      `Reviewed / Debugged schematics, layouts, and prototypes`,
      `Called on and supported 25+ accounts covering a wide range of applications including enterprise computing and storage, wireless infrastructure, factory automation, medical devices and personal electronics.`,
    ],
  },
  {
    title: "Textron",
    subtitle: "Engineering Intern",
    start: "Summer 2017",
    link: "https://www.textron.com/",
    points: [
      `Designed, built and tested a device used to program a utility product released to market`,
      `Designed PCBs using EAGLE and wrote firmware using Python`,
      `Improved circuit design skills and understanding of the design process`,
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <h2>{title}</h2>
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        {experiences.map(
          ({ title, subtitle, start, end, link, points }, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {link ? (
                    <Link href={link} target="_blank">
                      <h3>{title}</h3>
                    </Link>
                  ) : (
                    <h3>{title}</h3>
                  )}
                  <span>•</span>
                  <div className="italic">{subtitle}</div>
                </div>
                <div className="text-base">
                  {`${start} ${end ? `- ${end}` : ""}`}
                </div>
              </div>
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
