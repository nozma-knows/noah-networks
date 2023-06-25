"use client";

import LinkButton from "@/components/ui/buttons/LinkButton";
import Page from "@/components/ui/pages/Page";
import { motion } from "framer-motion";

// Message Content
const title = "Hi, my name is Noah.";
const subtitle = "You've stumbled upon my personal website.";
const about =
  "I'm a passionate learner, creator and friend. My goal is to make the world happier. I choose to do it through building.";

// Button Content
const buttonLabel = "Check out my blog";

function Message() {
  return (
    <motion.div
      className="flex w-fit h-fit flex-col gap-2 max-w-3xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
    >
      <h1 className="w-fit text-transparent bg-gradient-to-r from-white/80 to-white/40 bg-clip-text ">
        {title}
      </h1>
      <h2>{subtitle}</h2>
      <div className="">{about}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full justify-center items-center gap-8">
        <Message />
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <LinkButton label={buttonLabel} href="/blog" />
        </motion.div>
      </div>
    </Page>
  );
}
