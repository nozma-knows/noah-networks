"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { FaCheck } from "react-icons/fa";

// Copyright copy
const message = `Made with 🤍 in Salem, MA`;
const crYear = `© ${new Date().getFullYear()}`;

function CheckPassword(password: string) {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  if (!signedIn && password === process.env.NEXT_PUBLIC_PASSWORD) {
    setSignedIn(true);
  }
}

const Copyright = ({
  showInput,
  setShowInput,
}: {
  showInput: boolean;
  setShowInput: (si: boolean) => void;
}) => {
  return (
    <div className="flex flex-col text-center sm:flex-row gap-0 sm:gap-2">
      <div className="text-sm">{message}</div>
      <div className="text-sm" onClick={() => setShowInput(!showInput)}>
        {crYear}
      </div>
    </div>
  );
};

export default function Footer() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex w-full justify-center items-center font-bold px-6 pb-4 self-end relative">
      {showInput && (
        <motion.div
          className="flex items-center bg-blue text-white absolute -top-16 rounded-lg py-2 px-4 border-2 border-transparent hover:border-white focus:border-green"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
        >
          <input
            className="bg-blue outline-none"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaCheck
            className={`w-5 h-5 ${password ? "cursor-pointer" : "opacity-40"}`}
            // onClick={(e) => CheckPassword(e.target.value)}
          />
        </motion.div>
      )}

      <Copyright showInput={showInput} setShowInput={setShowInput} />
    </div>
  );
}
