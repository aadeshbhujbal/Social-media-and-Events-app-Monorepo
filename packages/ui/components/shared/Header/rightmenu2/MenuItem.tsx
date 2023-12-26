import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-4 absolute top-24  right-6   drop-shadow-2xl w-40  rounded-xl"
    >
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }} // Change y value to 20
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }} // Change y value to 20
        transition={{ duration: 0.3 }}
        
      > */}
      {/* Accordion content */}
      <div className="flex flex-col gap-6 py-2">
        <Link href="/live-schedule">Live Schedule</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
      {/* </motion.div> */}
    </motion.li>
  );
};
