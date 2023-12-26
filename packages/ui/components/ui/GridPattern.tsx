"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Custom hook for generating unique IDs
function useUniqueId() {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    setId(`id-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  return id;
}

interface BlockProps {
  x: number;
  y: number;
  [key: string]: any;
}

function Block({ x, y, ...props }: BlockProps) {
  return (
    <motion.path
      transform={`translate(${-76 * y + 76 * x} ${76 * y})`}
      d="M0,0H76V76H0Z"
      {...props}
    />
  );
}

interface GridPatternProps {
  yOffset?: number;
  interactive?: boolean;
  [key: string]: any;
}

export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: GridPatternProps) {
  const id = useUniqueId(); // Use the custom unique ID hook

  const ref = useRef<SVGSVGElement | null>(null);

  const rect = ref?.current?.getBoundingClientRect();
  const currentBlock = useRef<number[] | null>(null);
  const counter = useRef<number>(0);
  const [hoveredBlocks, setHoveredBlocks] = useState<number[][]>([]);
  const staticBlocks: number[][] = [
    [1, 0],
    [-3, 3],
    [13, 5],
    [6, 2],
    [6, 4],
    [15, 10],
    [12, 6],
    [3, 8],
    [4, 11],
    [10, 13],
    [14, 12],
  ];

  useEffect(() => {
    if (!interactive) {
      return;
    }

    function onMouseMove(event: MouseEvent) {
      if (!ref.current) {
        return;
      }

      let rect = ref.current.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        return;
      }

      x = x - rect.width / 2 - 0;
      y = y - yOffset;
      x += Math.tan(32 / 44) * y;
      x = Math.floor(x / 76);
      y = Math.floor(y / 76);

      if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
        return;
      }

      currentBlock.current = [x, y];

      setHoveredBlocks((blocks) => {
        let key = counter.current++;
        return [...blocks, [x, y, key]].filter(
          (block) => !(block[0] === x && block[1] === y && block[2] !== key)
        );
      });
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [yOffset, interactive]);

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0 " />
      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {staticBlocks.map((block, index) => (
          <Block key={`${block}-${index}`} x={block[0]} y={block[1]} />
        ))}
        {hoveredBlocks.map((block) => (
          <Block
            key={block[2]}
            x={block[0]}
            y={block[1]}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, times: [0, 0, 1] }}
            onAnimationComplete={() => {
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2])
              );
            }}
          />
        ))}
      </svg>
      <defs>
        <pattern
          id={id}
          width="76"
          height="76"
          x="50%"
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(-0 ${yOffset})`}
          fill="none"
        >
          <path d="M0,0H76V76H0Z" />
        </pattern>
      </defs>
    </svg>
  );
}
