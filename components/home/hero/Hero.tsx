"use client";
// import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from './Hero.module.css'

export default function Section() {
  return (
    <div
      className="relative -z-10 mx-auto h-[28rem] w-full max-w-6xl overflow-clip"
      id="hero"
    >
      <Image
        src="/hero_bg2.jpg"
        alt="Hero background"
        // fill
        height={560}
        width={1800}
        className="absolute -z-20 h-[28rem] w-[1440px] overflow-clip object-cover"
      />
      <FloatingSquares />
    </div>
  );
}

const FloatingSquares = () => (
  <>
    {/* lower left squares */}
    <motion.div
      variants={containers_green_lower_l}
      initial="hidden"
      animate="visible"
      className="absolute bottom-20  hidden h-[98px] w-[108px] rounded-md bg-[#3CFF72] mix-blend-multiply md:left-10 md:block lg:left-40 xl:left-72 "
    />
    <motion.div
      variants={containers_blue_lower_l}
      initial="hidden"
      animate="visible"
      className="absolute bottom-16 hidden h-[96px] w-[209px] rounded-md bg-[#3CB9FF] mix-blend-color-dodge md:left-14 md:block lg:left-48 xl:left-80 "
    />

    {/* upper left squares */}
    <motion.div
      className="absolute top-16 w-full rounded-md md:left-20 md:h-[180px] md:w-[374px] xl:left-56 "
      variants={containers_left}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute h-full w-full bg-[#CD1616] opacity-60 mix-blend-color-burn" />
      <div className="absolute h-full w-full bg-[#CD1616] opacity-60 mix-blend-color-burn" />
      <motion.div
        className="z-20 pb-2 pl-10 pt-4 text-left leading-none text-white md:absolute"
        variants={containers_left_items}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="pl-1 text-lg"
          variants={containers_left_item}
          initial="hidden"
          animate="visible"
        >
          portfolio
        </motion.p>
        <motion.p
          className="text-6xl"
          variants={containers_left_item}
          initial="hidden"
          animate="visible"
        >
          2023
        </motion.p>
      </motion.div>
    </motion.div>

    {/* right squares */}
    <motion.div
      className="absolute bottom-1 left-0 right-0 mx-auto w-11/12 min-w-fit max-w-xs rounded-md md:bottom-8 md:left-auto md:right-10 lg:bottom-auto lg:left-auto lg:right-20 lg:top-16 lg:h-[248px] lg:w-[454px] "
      variants={containers_right}
      initial="hidden"
      animate="visible"
    >
      <div className=" absolute h-full w-full rounded-md bg-[#CD1616] opacity-50 mix-blend-color-burn" />
      <div className=" absolute h-full w-full rounded-md bg-[#CD1616] opacity-50 mix-blend-color-burn" />
      <motion.div
        className="flex h-full w-full flex-col justify-center px-2 py-3 text-center text-white"
        variants={containers_right_items}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          variants={containers_right_item}
          initial="hidden"
          animate="visible"
        >
          Alex Howez
        </motion.p>
        <motion.p
          className="text-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          variants={containers_right_item}
          initial="hidden"
          animate="visible"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          className="text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          variants={containers_right_item}
          initial="hidden"
          animate="visible"
        >
          Web & Mobile Apps
        </motion.p>
      </motion.div>
    </motion.div>
    <div className="absolute right-24 top-10 hidden h-[583px] w-[32px] rounded-md bg-[#3CF3FF] mix-blend-color-dodge md:block" />
  </>
);

// container left
const containers_left = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const containers_left_items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const containers_left_item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// container right
const containers_right = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const containers_right_items = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.25,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const containers_right_item = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// container left
const containers_green_lower_l = {
  hidden: { x: -45, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

// container left
const containers_blue_lower_l = {
  hidden: { y: -35, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.25 } },
};
