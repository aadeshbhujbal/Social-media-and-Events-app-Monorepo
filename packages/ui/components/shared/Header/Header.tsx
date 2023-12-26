import Link from "next/link";
import React from "react";
import { FadeIn } from "../FadeIn";
import { HeaderLogo } from "./HeaderLogo";
import { Container } from "../Container";
import { usePathname } from "next/navigation";
import HeaderMenu2 from "./HeaderMenu2backup";
import { Example } from "./rightmenu2/Example";
import { AllCourse } from "./AllCourse";

type Props = {};

const NavigationHome = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="justify-end flex flex-row gap-6 py-6 align-middle self-center">
      <Link
        href="/"
        className={
          pathname === "/"
            ? "text-[#006CE8] align-middle self-center"
            : "text-black relative align-middle self-center w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#006CE8] after:w-full after:rounded-md	hover:text-[] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Home{" "}
      </Link>
      <Link
        href="/events"
        className={
          pathname === "/events"
            ? "text-[#006CE8] align-middle self-center"
            : "text-black relative align-middle self-center w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#006CE8] after:w-full after:rounded-md	hover:text-[] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Events
      </Link>
      <Link
        href="/job"
        className={
          pathname === "/job"
            ? "text-[#006CE8] align-middle self-center"
            : "text-black relative align-middle self-center  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#006CE8] after:w-full after:rounded-md	hover:text-[] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Job{" "}
      </Link>
      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "text-[#006CE8] align-middle self-center"
            : "text-black relative align-middle self-center w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#006CE8] after:w-full after:rounded-md	hover:text-[] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        }
      >
        Blog
      </Link>
      <div className=" align-middle self-center">
        {/* <HeaderMenu2 /> */}
        <Example />
      </div>
    </div>
  );
};

function Header1({ className }: { className?: string }) {
  return (
    <>
      <Container className=" bg-[#ffff] mt-3 rounded-t-3xl ">
        <div className=" mx-auto">
          <FadeIn>
            <div className="space-y-8 px-4  sm:px-6 lg:space-y-16">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
                <div className="py-6">
                  <Link href="/" aria-label="Home">
                    <HeaderLogo className="!h-8 !w-8" fillOnHover />
                  </Link>
                </div>
                <div className="justift-between text-center ">
                  <AllCourse />
                </div>
                <div className="justify-end self-center align-middle	  ">
                  <NavigationHome />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  );
}

export default Header1;
