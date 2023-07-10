"use client";
import { useState, useEffect } from 'react'
import { cx } from "classix";
import { motion, AnimatePresence } from 'framer-motion'
import { FaTwitter, FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

import Card from './Card'
import styles from './Projects.module.css'
import type { CardType } from './Card'
import type { Tab } from './Filters'


const cards: CardType[] = [
  { name: "Openly", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly2", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly3", href: "/", project_url: "https://github.com/Openly", tech: ["Svelte"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
]


export default function Component({ platform, tech }: { platform: Tab, tech: Tab, cards?: CardType[] }) {
  const [selected, setSelected] = useState(cards[0])

  useEffect(() => {
    setSelected(cards[0])
  }, [])

  return (
    <div className="w-full bg-zinc-00">
      <div className="flex flex-wrap overflow-hidden">
        <AnimatePresence>
          {/* <div className="grid grid-cols-5 overflow-hidden"> */}
          {
            cards.map((card, i) => <Card key={card.name} selected={selected} setSelected={setSelected} card={card} />)
          }
          {/* <Card name="Openly" href="/" project_url="https://github.com/Openly" />
        <div className="w-16 h-[400px] bg-green-400" />
        <div className="w-16 h-[400px] bg-green-800" />
        <div className="w-16 h-[400px] bg-green-400" /> */}
        </AnimatePresence>
      </div>
    </div>
  );
}
