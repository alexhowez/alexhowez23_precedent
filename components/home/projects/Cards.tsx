"use client";
import { useState, useEffect, Suspense } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

import type { CardType } from './Card'
import type { Tab } from './Filters'
import Card from './Card'
import Modal from './Modal'


const initial_cards: CardType[] = [
  { name: "Openly", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Web'] },
  { name: "Openly2", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Web'] },
  { name: "Openly4", href: "/", project_url: "https://github.com/Openly", tech: ["React"], platform: ['Mobile'] },
]


export default function Component({ platform, tech }: { platform: Tab, tech: Tab, cards?: CardType[] }) {
  const [cards, setCards] = useState<CardType[]>([])
  const [selected, setSelected] = useState(cards[0])

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(prevStatte => !prevStatte);
  };

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
    <>
      <div className=" md:col-span-7 w-full">
        <Suspense fallback="<p></p>">
          <Modal isToggled={modalVisible} setToggled={openModal} data={{ title: "HIII", techs: ["react", "svelte", "react", "svelte", "react", "svelte", "react", "svelte"], description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }} />
        </Suspense>
        <div className="p-5 grid grid-cols-12 gap-y-2 overflow-hidden bg-zinc-600 bg-opacity-60 backdrop-blur-lg rounded-lg">
          {/* <AnimatePresence> */}
          {
            cards.map((card) => <Card key={card.name} selected={selected} setSelected={setSelected} card={card} openModal={openModal} />)
          }
          {/* </AnimatePresence> */}
        </div>
      </div>
    </>
  );
}
