"use client";
import { Suspense } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import HeaderLoading from "./Header2Loading";

type LinkType = {
  text: string;
  href: string;
  animDelay: number;
  class: string;
};

const links: LinkType[] = [
  { text: "MyProjects", href: "#projects", animDelay: 0, class: " text-transparent bg-clip-text bg-gradient-to-r from-[#4E31FF] to-[#FF0D81]" },
  { text: "ContactMe", href: "#contactme", animDelay: 0.5, class: " text-transparent bg-clip-text bg-gradient-to-r from-[#FF3162] to-[#FF12AF]" },
  { text: "AboutMe", href: "#aboutme", animDelay: 1, class: " text-transparent bg-clip-text bg-gradient-to-r from-[#FF228C] to-[#00FFF0]" },
];

export default function Component() {
  return (
    <Suspense fallback={<HeaderLoading />}>
      <Header />
    </Suspense>
  )
}

function Header() {
  return (
    <header className="py-1 px-2 mx-auto max-w-5xl fixed top-0 left-0 right-0 bg-transparent flex justify-between items-center transition duration-300 bg-green-30">
      {/* <header className=" fixed top-0 left-0 right-0 bg-gray-300 flex justify-between items-center transition duration-300"> */}
      <div className="hidden md:block md:flex-1">
        <Logo />
      </div>
      <nav className="w-full flex space-x-1 justify-center items-center bg-red-30 h-full md:w-fit">
        <HeaderLinks />
      </nav>
    </header>
  );
}

const HeaderLinks = () => (
  <>
    {links.map((link: LinkType) => (
      <Link key={link.text} href={link.href} className={`text-sm 
      hover:bg-black rounded-sm transition-all hover:duration-500 backdrop-blur-sm bg-gray-100 bg-opacity-70`}
      // style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      // hover:bg-gradient-to-r from-[#4E31FF] to-[#FF0D81]
      >
        <motion.div
          key={link.text}
          className={`px-2 py-1 ${link.class} hover:bg-gradient-to-r hover:from-white hover:to-white hover:font-semibold  drop-shadow-[0_0.25px_0.25px_rgba(0,0,0,0.8)]`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: link.animDelay,
          }}
        >
          {link.text}
        </motion.div>
      </Link>
    ))}
  </>
);

const Logo = () => (
  <Link href={"/"}>
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
      }}
    >
      <Image
        className="cursor-pointer"
        src="/logo.png"
        alt="logo"
        width={45}
        height={45}
      />
    </motion.div>
  </Link>
);
