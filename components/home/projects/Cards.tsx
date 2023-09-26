"use client";
import { useState, useEffect, Suspense } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import { projects } from './projects_data'

import type { CardType } from './projects_data'
import type { Tab } from './Filters'
import Card from './Card'
import Modal from './Modal'

const initial_cards: CardType[] = projects

export default function Component({ platform, tech }: { platform: Tab, tech: Tab, cards?: CardType[] }) {
  const [cards, setCards] = useState<CardType[]>([])
  const [selected, setSelected] = useState(cards[0])
  const [modalData, setModalData] = useState<null | CardType>(null)
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (id: number) => {
    setModalVisible(true);
    const card = cards.find(card => card.id === id)
    const newModalState = card !== undefined ? card : null
    setModalData(newModalState)
  };

  const closeModal = (id: number) => {
    setModalVisible(false);
    setModalData(null)
  };

  useEffect(() => {
    setSelected(cards[0])
    setCards(initial_cards)
  }, [])

  // filter cards with tech and platform
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
          <Modal isToggled={modalVisible} setToggled={openModal} closeModal={closeModal} data={modalData} />
        </Suspense>
        <div className="p-2 grid grid-cols-12 gap-y-2 overflow-hidden bg-zinc-600 bg-opacity-60 backdrop-blur-lg rounded-lg">
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
