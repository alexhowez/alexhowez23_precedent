"use client";
import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

import type { CardType } from './Card'
import type { Tab } from './Filters'
import Card from './Card'


const initial_cards: CardType[] = [
  { name: "Openly", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Web'] },
  { name: "Openly2", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Web'] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Mobile'] },
]


export default function Component({ platform, tech }: { platform: Tab, tech: Tab, cards?: CardType[] }) {
  const [cards, setCards] = useState<CardType[]>([])
  const [selected, setSelected] = useState(cards[0])

  useEffect(() => {
    setSelected(cards[0])
    setCards(initial_cards)
  }, [])

  useEffect(() => {
    setCards([])

    const filteredCards = initial_cards.filter((card) => {
      const check_1 = platform.label === 'All' || card.platform.includes(platform.label)
      const check_2 = tech.label === 'All' || card.tech.includes(tech.label)

      if (check_1 && check_2) return card
      else return false
    })

    setCards(filteredCards)
  }, [platform, tech])


  return (
    <div className=" md:col-span-7 w-full">
      {/* <div className="grid grid-cols-5 overflow-hidden"> */}
      <div className="p-5 grid grid-cols-12 gap-y-2 overflow-hidden bg-zinc-600 bg-opacity-60 backdrop-blur-lg rounded-lg">
        {/* <AnimatePresence> */}
        {
          cards.map((card) => <Card key={card.name} selected={selected} setSelected={setSelected} card={card} />)
        }
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
