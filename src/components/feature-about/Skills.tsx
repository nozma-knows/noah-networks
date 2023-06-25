"use client";

import { Grid } from "@mui/material";
import { motion } from "framer-motion";

// Content
const title = "Skills";
const skills = [
  {
    title: "Programming Languages",
    items: ["HTML/CSS", "JavaScript", "TypeScript", "Python", "C/C++"],
  },
  {
    title: "Frameworks and Libraries",
    items: [
      "React",
      "NextJS",
      "NodesJS",
      "ExpressJS",
      "NestJS",
      "Redux",
      "TailwindCSS",
      "LangChain",
      "OpenAI",
      "MUI",
    ],
  },
  {
    title: "Tools and Platforms",
    items: ["Git", "Postgres", "Docker", "AWS", "Vercel", "Heroku", "Apollo"],
  },
  {
    title: "Hardware",
    items: [
      "Digital and Analog Hardware Design",
      "Embedded Systems",
      "PCB Design",
      "Circuit Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <motion.div className="flex flex-col gap-4">
      <h2>{title}</h2>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <Grid container spacing={4}>
          {skills.map(({ title, items }, index) => (
            <Grid key={index} item xs={12} sm={12} md={6}>
              <div>
                <h3>{title}</h3>
                <div className="text-lg">{items.join(", ")}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </motion.div>
  );
}
