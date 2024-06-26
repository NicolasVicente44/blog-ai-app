import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block ">
            <SocialLinks/>
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            The number one blog covering AI and automation.
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
            IMAGE RIGHT HERE
        </div>
      </div>
      <hr  className="border-2 mx-10"/>
    </header>
  );
};

export default Navbar;
