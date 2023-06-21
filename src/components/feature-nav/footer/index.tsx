"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const title = `Milbo LLC`;

const tabs = [
  {
    label: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

// Copyright copy
const message = `Made with 🤍 in Salem, MA`;
const company = `Milbo LLC`;
const crYear = `© ${new Date().getFullYear()}`;

const Logo = () => {
  return (
    <Link className="flex items-center gap-2 justify" href={"/"}>
      <div className="relative flex w-10 h-10">
        <Image src={logo} alt="rabbit hole Logo" fill />
      </div>
      <div className="hidden sm:block font-lilita text-lg">{title}</div>
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
      {tabs.map(({ label, link }) => (
        <Link className={`flex items-center `} key={label} href={link}>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {label}
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="flex gap-2">
      <div className="hidden md:flex">{message}</div>
      <div>{crYear}</div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex w-full justify-center items-center text-xs sm:text-sm md:text-md font-bold px-6 pb-4">
      <Copyright />
    </div>
  );
}
