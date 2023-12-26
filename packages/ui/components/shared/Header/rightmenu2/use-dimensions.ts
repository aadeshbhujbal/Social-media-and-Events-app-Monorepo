import { useEffect, useRef, useState } from "react";

// Define a type for dimensions
type Dimensions = {
  width: number;
  height: number;
};

export const useDimensions = <T extends HTMLElement>(
  ref: React.RefObject<T>
): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const resizeObserver = new ResizeObserver((entries) => {
        // Assuming only one target is being observed
        const entry = entries[0];
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      });

      resizeObserver.observe(element);

      // Initial measurement
      const { offsetWidth, offsetHeight } = element;
      setDimensions({ width: offsetWidth, height: offsetHeight });

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref]);

  return dimensions;
};
