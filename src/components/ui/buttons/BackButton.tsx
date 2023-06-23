"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface BackButtonProps {
  label: string;
  link: string;
}

export default function BackButton({
  label,
  link,
}: BackButtonProps): JSX.Element {
  return (
    <Link href={link} className="">
      <motion.div
        className="flex gap-4 items-center mb-8 w-fit"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <FaArrowLeft className="" />
        <div className="">{label}</div>
      </motion.div>
    </Link>
  );
}
