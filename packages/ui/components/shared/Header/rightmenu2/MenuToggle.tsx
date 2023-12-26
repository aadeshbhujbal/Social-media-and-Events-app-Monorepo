import * as React from "react";
import { MouseEventHandler } from "react";

import { SVGMotionProps, motion } from "framer-motion";

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: MouseEventHandler }) => (
  <button
    onClick={toggle}
    className=" p-2 bg-[#f9f9f9] rounded-lg align-middle self-center"
  >
    <svg width="20" height="18" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 18 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 18 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 18 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
