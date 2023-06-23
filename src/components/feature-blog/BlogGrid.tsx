"use client";

import Image from "next/image";
import {
  ArePasswordsOutdated,
  ArduinoGettingStarted,
} from "@/assets/blog-cover-images";

// Interfaces
interface ProjectPreviewProps {
  title: string;
  category: string;
  coverImg: string;
  published: string;
  description: string;
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
  },
  {
    title: "Arduino - Getting Started",
    category: "Technology",
    coverImg: ArduinoGettingStarted,
    published: "February 28, 2023",
    description: "Your first step to building anything!",
  },
];

function BlogPreview({
  title,
  category,
  coverImg,
  published,
  description,
}: ProjectPreviewProps) {
  return (
    <div className="flex flex-col w-full h-full min-h-max bg-white/20 rounded-lg border-2 border-transparent hover:border-white cursor-pointer">
      <div className="flex items-center justify-center p-8 bg-blue w-full h-48 rounded-lg">
        <div className="w-full h-full relative">
          <Image src={coverImg} alt={`${title} logo`} fill />
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex items-center justify-between">
          <div className="text-lg text-green font-bold">{category}</div>
          <div className="text-sm">{published}</div>
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row auto-rows-fr gap-4">
      {projects.map(
        ({ title, category, coverImg, published, description }, index) => (
          <div key={index}>
            <BlogPreview
              title={title}
              category={category}
              coverImg={coverImg}
              published={published}
              description={description}
            />
          </div>
        )
      )}
    </div>
  );
}
