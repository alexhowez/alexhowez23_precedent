"use client";
import { useState, useEffect } from 'react'
import { cx } from "classix";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

// import Modal from './SocialsModal'
import styles from './Filters.module.css'

// export type Platform = "All" | "Web" | "Mobile"
// export type Tech = "ReactJS" | "NodeJS" | "Svelte"
export type Tab = { label: string }

const tabs: Tab[] = [{ label: "Web" }, { label: "Mobile/Gaming" }];

const techs: Tab[] = [
  { label: "ReactJS" },
  { label: "Typescript" },
  { label: "NodeJS/Express" },
  { label: "Svelte" },
];

{/* <div class="relative h-32 bg-gray-400 p-4">
  <div class="inset-x-0 bottom-0 relative sm:absolute md:fixed lg:absolute xl:relative"></div>
</div> */}
const selectedStyle = "bg-rose-300"
const liButton = "w-20 h-20 rounded-md relative flex justify-center items-center text-black ml-10 cursor-pointer flex-shrink-0"
const underlineStyle = "nset-x-0 absolute bottom-[1px] left-0 right-0 h-[2px] rounded-lg bg-yellow-400"

interface Props {
  platforms: Tab[];
  techs: Tab[];
  setPlatform: React.Dispatch<React.SetStateAction<Tab>>;
  setTech: React.Dispatch<React.SetStateAction<Tab>>;
  platform: Tab
  tech: Tab
}

export default function Component({platforms, techs, setPlatform, setTech, platform, tech }: Props) {
  return (
    <article className="py-10 w-full bg-zinc-00 opacity-400 backdrop-blur-lg rounded-lg">
      <UpperTabs tabs={platforms} selectedTab={platform} setSelectedTab={setPlatform} />
      <LowerTabs tabs={techs} selectedTab={tech} setSelectedTab={setTech} />
      <div className="flex rounded-lg bg-zinc-800">
        <div className="w-16 h-[40px] bg-green-400" />
        <div className="w-16 h-[40px] bg-green-800" />
        <div className="w-16 h-[40px] bg-green-400" />
      </div>
    </article>
  );
}

const UpperTabs = ({ tabs, selectedTab, setSelectedTab }: { tabs: Tab[], selectedTab: Tab, setSelectedTab: (tab: Tab) => void }) => (
  <div className="">
    <nav>
      <ul className="flex p-4 h-[130px] bg-cyan-600">
        {tabs.map((item: Tab) => (
          <li
            key={item.label}
            className={cx(liButton, item === selectedTab ? selectedStyle : "bg-white")}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.label}`}
            {item === selectedTab ? (
              <motion.div className={underlineStyle} layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
    <main>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          TEXT
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
);

const LowerTabs = ({ tabs, selectedTab, setSelectedTab }: { tabs: Tab[], selectedTab: Tab, setSelectedTab: (tab: Tab) => void }) => (
  <div className="">
    <nav>
      <ul className="flex flex-col p-4 h-[130px] bg-cyan-600">
        {tabs.map((item: Tab) => (
          <li
            key={item.label}
            className={cx(liButton, item === selectedTab ? selectedStyle : "bg-white")}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.label}`}
          </li>
        ))}
      </ul>
    </nav>
    <main>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          TEXT
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
);