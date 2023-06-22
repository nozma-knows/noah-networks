"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface LinkButtonProps {
  label?: string | JSX.Element;
  className?: string;
  bgColor?: string;
  href: string;
  newTab?: boolean;
  disabled?: boolean;
}

export default function LinkButton({
  label,
  className,
  bgColor,
  href,
  newTab,
  disabled = false,
}: LinkButtonProps) {
  return (
    <motion.div
      whileHover={{
        ...(!disabled && { scale: 1.05 }),
      }}
      whileTap={{ ...(!disabled && { scale: 0.95 }) }}
    >
      <Link
        className={
          className !== undefined
            ? `${className}`
            : `flex justify-center p-4 px-6 rounded-lg bg-white/40 drop-shadow-lg ${
                disabled && "cursor-not-allowed opacity-50"
              }`
        }
        style={{
          backgroundColor: bgColor,
        }}
        href={href}
        {...(newTab ? { target: "_blank" } : {})}
      >
        <div className={`${className} button`}>{label || "Link"}</div>
      </Link>
    </motion.div>
  );
}
