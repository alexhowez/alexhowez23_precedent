"use client";
import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

import type { CardType } from './Card'
import type { Tab } from './Filters'
import Card from './Card'


const cards: CardType[] = [
  { name: "Openly", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly2", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly3", href: "/", project_url: "https://github.com/Openly", tech: ["Svelte"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"] },
]


export default function Component({ platform, tech }: { platform: Tab, tech: Tab, cards?: CardType[] }) {
  const [selected, setSelected] = useState(cards[0])

  useEffect(() => {
    setSelected(cards[0])
  }, [])

  return (
    <div className="md:col-span-7 w-full">
      {/* <div className="grid grid-cols-5 overflow-hidden"> */}
      <div className="p-5 flex flex-wrap overflow-hidden bg-zinc-600 bg-opacity-60 backdrop-blur-lg rounded-lg">
        {/* <AnimatePresence> */}
        {
          cards.map((card, i) => <Card key={card.name} selected={selected} setSelected={setSelected} card={card} />)
        }
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
