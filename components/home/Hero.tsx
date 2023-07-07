"use client";
import React from "react";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import logo from './logo.png'

type LinkType = {
  text: string;
  href: string;
  animDelay: number;
};

const links: LinkType[] = [
  { text: "MyProjects", href: "#projects", animDelay: 0.25 },
  { text: "ContactMe", href: "#contactme", animDelay: 0.5 },
  { text: "AboutMe", href: "#aboutme", animDelay: 0.75 },
];

export default function Hero() {
  return (
    <header className="navbar bg-base-100">
      {/* <div className="flex-1">
        <Logo />
      </div>
      <ul className="flex flex-none">
        <HeaderLinks />
      </ul> */}
    </header>
  );
}

// const HeaderLinks = () => (
//   <>
//     {links.map((link: LinkType) => (
//       <motion.div
//         key={link.text}
//         className="space-x-2"
//         initial={{ x: 50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{
//           type: "tween",
//           duration: 1,
//           delay: link.animDelay ?? 0,
//         }}
//       >
//         <Link href={link.href}>
//           <li key={link.text} className="">
//             {/* <li key={link.text} className="px-2 hover:text-white hover:bg-black transition-all"> */}
//             {link.text}
//           </li>
//         </Link>
//       </motion.div>
//     ))}
//   </>
// );

// const Logo = () => (
//   <motion.div
//     initial={{ x: -50, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{
//       type: "tween",
//       duration: 0.5,
//       // delay: link.animDelay ?? 0,
//     }}
//   >
//     <Link href={"/"}>
//       <Image
//         className="cursor-pointer"
//         src="/logo.png"
//         alt="logo"
//         width={45}
//         height={45}
//       />
//     </Link>
//   </motion.div>
// );
