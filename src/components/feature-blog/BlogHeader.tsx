"use client";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/ui/buttons/BackButton";
import { FormatedDate } from "@/components/utils/format";
import { motion } from "framer-motion";

// Content
const backButtonLabel = `Back to blog`;
const backButtonLink = `/blog`;

interface Link {
  label: JSX.Element;
  href: string;
}

interface LinksProps {
  links: Link[];
}
interface BlogHeaderProps {
  title: string;
  category: string;
  coverPhoto: string;
  createdAt: string;
}

export default function BlogHeader({
  title,
  category,
  coverPhoto,
  createdAt,
}: BlogHeaderProps) {
  return (
    <div className="flex flex-col w-full">
      <BackButton label={backButtonLabel} link={backButtonLink} />
      <motion.div
        className="flex flex-col w-full gap-8"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
      >
        <div className="flex items-center justify-center w-full h-80 aspect-square relative">
          <Image src={coverPhoto} alt={`${title} logo`} fill />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl">{title}</h1>
          <div className="flex gap-4">
            <div className="text-green font-bold">{category}</div>
            <span>•</span>
            <div>{FormatedDate(createdAt)}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
