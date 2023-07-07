"use client";
   import { Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl h-[28rem] w-full relative -z-10 overflow-clip">
      <Image
        src="/hero_bg2.jpg"
        alt="Hero background"
        // fill
        height={560}
        width={1800}
        className="h-[28rem] w-[1440px] object-cover -z-20 absolute overflow-clip"
      />
      <FloatingSquares />
    </div>
  );
}

const FloatingSquares = () => (
  <>
    {/* lower left squares */}
    <motion.div variants={containers_green_lower_l} initial="hidden"
      animate="visible" className="bottom-20 hidden  absolute w-[108px] h-[98px] rounded-md bg-[#3CFF72] mix-blend-multiply md:block md:left-10 lg:left-40 xl:left-72 " />
    <motion.div variants={containers_blue_lower_l} initial="hidden"
      animate="visible" className="bottom-16 hidden md:block absolute w-[209px] h-[96px] rounded-md bg-[#3CB9FF] mix-blend-color-dodge md:left-14 lg:left-48 xl:left-80 " />

    {/* upper left squares */}
    <motion.div
      className="w-full absolute top-16 rounded-md md:left-20 xl:left-56 md:w-[374px] md:h-[180px] "
      variants={containers_left}
      initial="hidden"
      animate="visible"
    >
      <div className="h-full w-full absolute bg-[#CD1616] mix-blend-color-burn opacity-60" />
      <div className="h-full w-full absolute bg-[#CD1616] mix-blend-color-burn opacity-60" />
      <motion.div className="z-20 pl-10 pt-4 pb-2 md:absolute text-white text-left leading-none" variants={containers_left_items} initial="hidden" animate="visible">
        <motion.p className="text-lg pl-1" variants={containers_left_item} initial="hidden" animate="visible">portfolio</motion.p>
        <motion.p className="text-6xl" variants={containers_left_item} initial="hidden" animate="visible">2023</motion.p>
      </motion.div>
    </motion.div>


    {/* right squares */}
    <motion.div
      className="w-11/12 min-w-fit right-0 left-0 bottom-1 mx-auto absolute rounded-md max-w-xs md:bottom-8 md:right-10 md:left-auto lg:top-16 lg:right-20 lg:left-auto lg:bottom-auto lg:w-[454px] lg:h-[248px] "
      variants={containers_right}
      initial="hidden"
      animate="visible"
    >
      <div className=" h-full w-full absolute rounded-md bg-[#CD1616] mix-blend-color-burn opacity-50" />
      <div className=" h-full w-full absolute rounded-md bg-[#CD1616] mix-blend-color-burn opacity-50" />
      <motion.div className="px-2 py-3 h-full w-full flex flex-col justify-center text-white text-center" variants={containers_right_items} initial="hidden" animate="visible">
        <motion.p className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" variants={containers_right_item} initial="hidden" animate="visible">Alex Howez</motion.p>
        <motion.p className="text-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" variants={containers_right_item} initial="hidden" animate="visible">Full Stack Developer</motion.p>
        <motion.p className="text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" variants={containers_right_item} initial="hidden" animate="visible">Web & Mobile Apps</motion.p>
      </motion.div>
    </motion.div>
    <div className="top-10 right-24 hidden md:block absolute w-[32px] h-[583px] rounded-md bg-[#3CF3FF] mix-blend-color-dodge" />
  </>
)

// container left
const containers_left = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
const containers_left_items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: {
      delay: 0.250, delayChildren: 0.3, staggerChildren: 0.2
    }
  }
}
const containers_left_item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

// container right
const containers_right = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}
const containers_right_items = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: {
      duration: 2, delay: 0.250, delayChildren: 0.3, staggerChildren: 0.2
    }
  }
}
const containers_right_item = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

// container left
const containers_green_lower_l = {
  hidden: { x: -45, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },

}

// container left
const containers_blue_lower_l = {
  hidden: { y: -35, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.25 } },
}
