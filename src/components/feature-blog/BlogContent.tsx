"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  content: string[];
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      {content.map((item, index) => (
        <ReactMarkdown
          className="markdown"
          linkTarget="_blank"
          remarkPlugins={[remarkGfm]}
          key={index}
        >
          {item}
        </ReactMarkdown>
      ))}
    </motion.div>
  );
}
