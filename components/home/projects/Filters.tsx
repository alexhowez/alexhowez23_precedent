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

const selectedStyle = "" // bg-rose-300
const liButton = "py-3 px-6 rounded-md relative ml-0 cursor-pointer flex-shrink-0 font-semibold "
const underlineStyle = "nset-x-0 absolute bottom-[1px] left-0 right-0 h-[2px] rounded-lg bg-red-500"

interface Props {
  platforms: Tab[];
  techs: Tab[];
  setPlatform: React.Dispatch<React.SetStateAction<Tab>>;
  setTech: React.Dispatch<React.SetStateAction<Tab>>;
  platform: Tab
  tech: Tab
}

export default function Component({ platforms, techs, setPlatform, setTech, platform, tech }: Props) {
    
  useEffect(() => {
    setPlatform(platforms[0])
    setTech(techs[0])
  }, [])

  return (
    <article className="md:col-span-3 p-5 w-full bg-zinc-600 bg-opacity-60 backdrop-blur-lg rounded-lg text-white space-y-4">
      <UpperTabs tabs={platforms} selectedTab={platform} setSelectedTab={setPlatform} />
      <LowerTabs tabs={techs} selectedTab={tech} setSelectedTab={setTech} />
    </article>
  );
}

const UpperTabs = ({ tabs, selectedTab, setSelectedTab }: { tabs: Tab[], selectedTab: Tab, setSelectedTab: (tab: Tab) => void }) => (
  <ul className="p-2 flex justify-center space-x-5 bg-black rounded-lg backdrop-blur-lg text-lg">
    {tabs.map((item: Tab) => (
      <li
        key={item.label}
        className={cx(liButton, item === selectedTab ? selectedStyle : "hover:text-zinc-400")}
        onClick={() => setSelectedTab(item)}
      >
        {`${item.label}`}
        {item === selectedTab ? (
          <motion.div className={underlineStyle} layoutId="underline" />
        ) : null}
      </li>
    ))}
  </ul>
);

const LowerTabs = ({ tabs, selectedTab, setSelectedTab }: { tabs: Tab[], selectedTab: Tab, setSelectedTab: (tab: Tab) => void }) => (
  <ul className="flex-col p-4 space-y-2 bg-black rounded-lg hidden md:flex">
    {tabs.map((item: Tab) => (
      <li
        key={item.label}
        className={cx(liButton, item === selectedTab ? "text-red-500" : "hover:text-zinc-400")}
        onClick={() => setSelectedTab(item)}
      >
        {`${item.label}`}
      </li>
    ))}
  </ul>
);