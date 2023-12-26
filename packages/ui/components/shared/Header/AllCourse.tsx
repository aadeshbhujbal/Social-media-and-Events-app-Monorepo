import React from "react";
import ReactDOMServer from "react-dom/server";

import { AllCourse_Background } from "./HeaderLogo";

export function Arrow({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      width={15}
      height={15}
      {...props}
    >
      <path
        fill="#fff"
        d="M14.85.143a.5.5 0 0 0-.583-.085L8.4 3.155a2.388 2.388 0 0 1-.985.319 1.892 1.892 0 0 1-.924-.268L.74.064a.5.5 0 0 0-.687.662l7 14a.5.5 0 0 0 .894 0l7-14a.5.5 0 0 0-.097-.583Z"
        data-name="down-arrow (2)"
      />
    </svg>
  );
}

type Props = {};
const svgString = encodeURIComponent(
  ReactDOMServer.renderToStaticMarkup(<AllCourse_Background />),
);

export function AllCourse({}: Props) {
  return (
    <div className="text-gray-600 flex-col mx-auto max-w-20 w-44">
      <div
        className=""
        style={{
          background: `url("data:image/svg+xml,${svgString}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   width: "100%",
          height: "auto",
          //   backgroundPosition: "center",
        }}
      >
        AllCourse
        <div className="mx-auto my-1 py-1 flex-auto text-center align-middle self-center content-center justify-center">
          <Arrow />
        </div>
      </div>
    </div>
  );
}
