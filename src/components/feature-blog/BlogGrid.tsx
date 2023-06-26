"use client";

import Image from "next/image";
import {
  ArePasswordsOutdated,
  ArduinoGettingStarted,
} from "@/assets/blog-cover-images";
import Link from "next/link";
import { Blog as BlogType } from "@/__generated__/graphql";
import { FormatedDate } from "../utils/format";
import { motion } from "framer-motion";

// Interfaces
interface ProjectPreviewProps {
  id: string;
  title?: string;
  category?: string;
  coverPhoto?: string;
  createdAt: string;
  subtitle?: string;
}

// Content
const projects = [
  {
    title: "Are passwords outdated?",
    category: "Technology",
    coverImg: ArePasswordsOutdated,
    published: "April 24, 2023",
    description:
      "Using magic links and social logins to make securely accessing web apps as easy as possible.",
    link: "/blog/are-passwords-outdated",
  },
  {
    title: "Arduino - Getting Started",
    category: "Technology",
    coverImg: ArduinoGettingStarted,
    published: "February 28, 2023",
    description: "Your first step to building anything!",
    link: "/blog/arduino-getting-started",
  },
];

function BlogPreview({
  id,
  title,
  category,
  coverPhoto,
  createdAt,
  subtitle,
}: ProjectPreviewProps) {
  return (
    // <Link
    //   href={`/blog/${id}`}
    //   className="flex flex-col w-full h-full min-h-max bg-white/20 rounded-lg border-2 border-transparent hover:border-white cursor-pointer"
    // >
    //   <div className="flex items-center justify-center p-8 bg-blue w-48 h-48 rounded-lg">
    //     <div className="w-full h-full aspect-auto relative">
    //       <Image src={coverPhoto!} alt={`${title} logo`} fill />
    //     </div>
    //   </div>
    //   <div className="flex flex-col p-4 gap-2">
    //     <div className="flex items-center justify-between">
    //       <div className="text-lg text-green font-bold">{category}</div>
    //       <div className="text-sm">{published}</div>
    //     </div>
    //     <div className="text-2xl font-bold">{title}</div>
    //     <div>{subtitle}</div>
    //   </div>
    // </Link>
    <motion.div
      className="flex p-4 rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link href={`/blog/${id}`} className="flex w-full">
        <div className="flex items-center justify-center w-48 h-48 rounded-lg">
          <div className="flex w-full h-full aspect-auto relative">
            <Image
              src={coverPhoto!}
              alt={`${title} logo`}
              fill
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4 gap-2">
          <div className="flex items-center justify-between">
            <div className="text-lg text-green font-bold">{category}</div>
            <div className="text-sm">{FormatedDate(createdAt)}</div>
          </div>
          <div className="text-2xl font-bold">{title}</div>
          <div>{subtitle}</div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogGrid({ blogs }: { blogs: BlogType[] }) {
  const sortedBlogs = blogs.sort(
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

  const blogAnimation = {
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
      {sortedBlogs.map(
        ({ title, category, coverPhoto, createdAt, subtitle, id }, index) => (
          <motion.div key={index} variants={blogAnimation}>
            <BlogPreview
              id={id}
              title={title || undefined}
              category={category || undefined}
              coverPhoto={coverPhoto || undefined}
              createdAt={createdAt}
              subtitle={subtitle || undefined}
            />
          </motion.div>
        )
      )}
    </motion.div>
  );
}
