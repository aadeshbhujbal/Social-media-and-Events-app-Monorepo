"use client";

import * as React from "react";
import * as AccordionPrimitive from "../core/react-accordion";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
("use client;");
import { useId, SVGProps } from "react";
import clsx from "clsx";

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          "h-8 transition-all duration-300",
          invert ? "fill-white" : "fill-neutral-950",
          filled ? "w-8" : "w-0 group-hover/logo:w-8",
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? "stroke-white" : "stroke-neutral-950"}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  );
}
// export function Logo({
//   className,
//   invert = false,
//   filled = false,
//   fillOnHover = false,
//   ...props
// }: {
//   className?: string;
//   invert?: boolean;
//   filled?: boolean;
//   fillOnHover?: boolean;
// })

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: {
  className?: string;
  invert?: boolean;
  filled?: boolean;
  fillOnHover?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={280}
      height={43.48}
      viewBox="0 0 361 43.48"
      {...props}
    >
      <g fill="#fff" data-name="Group 422">
        <g data-name="Group 421">
          <path
            d="M0 22.912V.533h9.5a9.427 9.427 0 0 1 7.125 2.758q2.869 2.915 2.869 8.306a12.367 12.367 0 0 1-2.468 8.087A9.19 9.19 0 0 1 9.5 22.912ZM4.843 4.67v14.1h4.318a5.031 5.031 0 0 0 3.794-1.5 7.209 7.209 0 0 0 1.7-5.2 8.864 8.864 0 0 0-1.357-5.391q-1.543-2.006-5-2.006Z"
            data-name="Path 41"
          />
          <path
            d="M26.588 11.691h-4.38a5.024 5.024 0 0 1 2.5-4.263 9.543 9.543 0 0 1 5-1.16q7 0 7 4.607v8.431a7.786 7.786 0 0 0 .555 3.6h-4.442a6.172 6.172 0 0 1-.308-1.567 7 7 0 0 1-5.367 2.006 5.885 5.885 0 0 1-3.855-1.191 4.464 4.464 0 0 1-1.573-3.667 4.257 4.257 0 0 1 1.7-3.7 9.117 9.117 0 0 1 3.732-1.222q3.547-.5 3.609-.533 1.573-.407 1.573-1.6a1.923 1.923 0 0 0-.864-1.818 3.941 3.941 0 0 0-1.974-.376q-2.69.009-2.906 2.453Zm5.737 4.952v-1.661a4.751 4.751 0 0 1-2.283.721 13.093 13.093 0 0 0-2.653.6 2.055 2.055 0 0 0-1.3 2.006q0 2.069 2.684 2.069 3.552-.005 3.553-3.734Z"
            data-name="Path 42"
          />
          <path
            d="M45.65 1.849v4.858h3.208v2.977H45.65v8.024a2.205 2.205 0 0 0 .37 1.5 2.12 2.12 0 0 0 1.48.376 6.8 6.8 0 0 0 1.357-.126v3.479a16.212 16.212 0 0 1-2.56.157q-5.028 0-5.028-3.855v-9.56h-2.652V6.702h2.653V1.844Z"
            data-name="Path 43"
          />
          <path
            d="M55.15 11.691h-4.38a5.024 5.024 0 0 1 2.5-4.263 9.545 9.545 0 0 1 5-1.16q7 0 7 4.607v8.431a7.784 7.784 0 0 0 .555 3.6h-4.439a6.168 6.168 0 0 1-.308-1.567 7 7 0 0 1-5.367 2.006 5.887 5.887 0 0 1-3.856-1.191 4.465 4.465 0 0 1-1.573-3.667 4.257 4.257 0 0 1 1.7-3.7 9.117 9.117 0 0 1 3.732-1.222q3.546-.5 3.609-.533 1.573-.407 1.573-1.6a1.923 1.923 0 0 0-.864-1.818 3.939 3.939 0 0 0-1.974-.376q-2.692.009-2.908 2.453Zm5.737 4.952v-1.661a4.751 4.751 0 0 1-2.283.721 13.094 13.094 0 0 0-2.653.6 2.055 2.055 0 0 0-1.3 2.006q0 2.069 2.684 2.069 3.551-.005 3.551-3.734Z"
            data-name="Path 44"
          />
          <path
            d="M67.73 15.484h4.688a3.732 3.732 0 0 0 1.481 3.2 5.559 5.559 0 0 0 3.393.94 6.4 6.4 0 0 0 2.776-.533 2.37 2.37 0 0 0 1.511-2.257q0-1.911-3.393-2.884-5.861-1.692-6.323-1.943a5.488 5.488 0 0 1-3.393-5.234 5.961 5.961 0 0 1 2.622-5.109A9.457 9.457 0 0 1 76.706.003a10.394 10.394 0 0 1 6.138 1.661 6.389 6.389 0 0 1 2.684 5.548h-4.689q-.185-3.385-4.349-3.385a4.248 4.248 0 0 0-2.252.564 2.208 2.208 0 0 0-1.08 1.975 1.868 1.868 0 0 0 1.2 1.787 44.956 44.956 0 0 0 5.367 1.6 12.858 12.858 0 0 1 3.856 1.5 5.644 5.644 0 0 1 2.683 5.015 6.345 6.345 0 0 1-2.344 5.14 10.4 10.4 0 0 1-6.817 2.038 10.634 10.634 0 0 1-6.539-1.912 7.065 7.065 0 0 1-2.834-6.05Z"
            data-name="Path 45"
          />
          <path
            d="M88.678 28.617V6.708h4.164v2.068h.062a5.144 5.144 0 0 1 4.75-2.507 6.424 6.424 0 0 1 5.49 2.633 9.888 9.888 0 0 1 1.758 6.081 9.323 9.323 0 0 1-1.758 5.8 6.181 6.181 0 0 1-5.244 2.57 5.342 5.342 0 0 1-4.781-2.445h-.062v7.71Zm8.05-8.62q3.794 0 3.794-5.141a6.645 6.645 0 0 0-.864-3.573 3.269 3.269 0 0 0-2.961-1.661 3.2 3.2 0 0 0-2.961 1.63 6.908 6.908 0 0 0-.833 3.6 6.476 6.476 0 0 0 .864 3.542 3.252 3.252 0 0 0 2.961 1.603Z"
            data-name="Path 46"
          />
          <path
            d="M111.719 11.691h-4.38a5.024 5.024 0 0 1 2.5-4.263 9.545 9.545 0 0 1 5-1.16q7 0 7 4.607v8.431a7.788 7.788 0 0 0 .555 3.6h-4.441a6.16 6.16 0 0 1-.308-1.567 7 7 0 0 1-5.367 2.006 5.886 5.886 0 0 1-3.856-1.191 4.465 4.465 0 0 1-1.573-3.667 4.257 4.257 0 0 1 1.7-3.7 9.117 9.117 0 0 1 3.732-1.222q3.547-.5 3.609-.533 1.573-.407 1.573-1.6a1.923 1.923 0 0 0-.864-1.818 3.94 3.94 0 0 0-1.974-.376q-2.69.009-2.906 2.453Zm5.737 4.952v-1.661a4.75 4.75 0 0 1-2.283.721 13.1 13.1 0 0 0-2.653.6 2.055 2.055 0 0 0-1.3 2.006q0 2.069 2.684 2.069 3.551-.005 3.552-3.734Z"
            data-name="Path 47"
          />
          <path
            d="M140.373 12.412h-4.287a2.952 2.952 0 0 0-3.239-2.79 3.222 3.222 0 0 0-2.93 1.724 7.194 7.194 0 0 0-.8 3.542 6.7 6.7 0 0 0 .8 3.416 3.072 3.072 0 0 0 2.838 1.693q3.023 0 3.486-3.291h4.227a7.331 7.331 0 0 1-2.452 4.921 7.846 7.846 0 0 1-5.228 1.724 7.712 7.712 0 0 1-5.814-2.319 8.265 8.265 0 0 1-2.236-5.987 9.057 9.057 0 0 1 2.128-6.269 7.628 7.628 0 0 1 6.015-2.507 8.278 8.278 0 0 1 5.059 1.5 5.993 5.993 0 0 1 2.433 4.643Z"
            data-name="Path 48"
          />
          <path
            d="M158.047 15.891h-11.505q.185 4.106 3.917 4.106a3.977 3.977 0 0 0 2.283-.69 2.443 2.443 0 0 0 1.172-1.411h3.855a7.188 7.188 0 0 1-7.464 5.454 7.723 7.723 0 0 1-5.938-2.367 9.556 9.556 0 0 1 .062-12.286 7.673 7.673 0 0 1 5.876-2.429 6.985 6.985 0 0 1 6.015 2.946 9.909 9.909 0 0 1 1.727 6.677Zm-11.505-2.821h7.125q-.618-3.447-3.486-3.448a3.4 3.4 0 0 0-2.838 1.254 3.754 3.754 0 0 0-.801 2.194Z"
            data-name="Path 49"
          />
          <path
            d="m167.417 22.912 8.169-18.447h3.319l8.2 18.447h-3.527L176.55 6.283h1.348l-7 16.629Zm3.76-4.269.908-2.688h9.8l.907 2.688Z"
            data-name="Path 50"
          />
          <path
            d="M206.625 23.175a10.436 10.436 0 0 1-3.851-.7 9.149 9.149 0 0 1-3.086-1.976 9.021 9.021 0 0 1-2.036-3.018 10.278 10.278 0 0 1 0-7.589 8.933 8.933 0 0 1 2.049-3.017 9.343 9.343 0 0 1 3.086-1.977 11.044 11.044 0 0 1 7.936.079 8.076 8.076 0 0 1 3.112 2.306l-2.178 2.082a6.6 6.6 0 0 0-2.2-1.62 6.46 6.46 0 0 0-2.645-.54 6.93 6.93 0 0 0-2.606.474 6.057 6.057 0 0 0-2.049 1.344 6.118 6.118 0 0 0-1.348 2.056 7.327 7.327 0 0 0 0 5.218 6.115 6.115 0 0 0 1.348 2.056 6.052 6.052 0 0 0 2.049 1.344 6.93 6.93 0 0 0 2.606.475 6.244 6.244 0 0 0 4.85-2.187l2.178 2.108a8.317 8.317 0 0 1-3.112 2.293 10.281 10.281 0 0 1-4.103.789Z"
            data-name="Path 51"
          />
          <path
            d="m223.201 22.912 8.169-18.447h3.32l8.195 18.447h-3.527L232.33 6.283h1.348l-7 16.629Zm3.76-4.269.908-2.688h9.8l.908 2.688Z"
            data-name="Path 52"
          />
          <path
            d="M254.269 22.912V4.464h7.936a11.092 11.092 0 0 1 5.187 1.159 8.613 8.613 0 0 1 3.475 3.215 10.043 10.043 0 0 1 0 9.685 8.581 8.581 0 0 1-3.475 3.228 11.089 11.089 0 0 1-5.187 1.159Zm3.371-2.9h4.409a7.463 7.463 0 0 0 3.54-.79 5.66 5.66 0 0 0 2.308-2.214 7.182 7.182 0 0 0 0-6.654 5.683 5.683 0 0 0-2.308-2.2 7.46 7.46 0 0 0-3.54-.79h-4.409Z"
            data-name="Path 53"
          />
          <path
            d="M288.137 20.039h10.244v2.873h-13.615V4.464h13.252v2.872h-9.881Zm-.259-7.906h9.025v2.82h-9.025Z"
            data-name="Path 54"
          />
          <path
            d="M311.219 22.912V4.464h2.775l7.935 13.466h-1.452l7.806-13.466h2.775l.026 18.447h-3.19l-.026-13.361h.674l-6.639 11.252h-1.5L313.66 9.55h.778v13.361Z"
            data-name="Path 55"
          />
          <path
            d="M349.523 22.912v-7.3l.752 2.108-7.884-13.255h3.6l6.327 10.673h-2.022l6.38-10.673h3.32l-7.884 13.255.778-2.108v7.3Z"
            data-name="Path 56"
          />
        </g>
        <path d="M7.564 8.5v6.726l4.177-3.134Z" data-name="Path 57" />
      </g>
      <text
        fill="#0d6efd"
        data-name="Powered by Satts Cyber Tech"
        fontFamily="Helvetica-Oblique, Helvetica"
        fontSize={11}
        fontStyle="oblique"
        transform="translate(200 40.481)"
      >
        <tspan x={0} y={0}>
          {"\r\n            Powered by\r\n          "}
        </tspan>
        <tspan y={0} fontFamily="Helvetica" fontSize={13} fontStyle="normal">
          {"\r\n"}
        </tspan>
        <tspan
          y={0}
          fill="#fff"
          fontFamily="Helvetica"
          fontSize={13}
          fontStyle="normal"
        >
          {"\r\n            Satts Cyber Tech\r\n          "}
        </tspan>
      </text>
    </svg>
  );
}
