import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  term?: string;
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export const Container: React.FC<Props> = ({
  as: Component = "div",
  className,
  children,
}) => {
  return (
    <Component className={clsx("mx-auto max-w-full px-6 lg:px-14", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
};
