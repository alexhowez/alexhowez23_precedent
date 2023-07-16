"use client";
// import { useState } from 'react'
import { cx } from "classix";
import { motion } from 'framer-motion'
import { BsArrowRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
// import Link from 'next/link';

import type {CardType} from './projects_data'

// const variants = {
//   visible: {
//     opacity: 1,
//     className: "flex-1",
//     transition: {
//       duration: 0.5,
//     },
//   },
//   hidden: {
//     opacity: 0.5,
//     className: "",
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// type ExtendedCard = Card & { setSelected: () => void };
type ExtendedCard = {
  selected: CardType
  setSelected: (card: CardType) => void
  card: CardType
  openModal: (id: number) => void
};

export default function CardComponent({ selected, setSelected, card, openModal }: ExtendedCard) {
  return (
    <motion.div
      layout
      onClick={() => setSelected(card)}
      // variants={variants}
      // initial="hidden"
      // animate="visible"
      // style={selected === card ? { flex: "1 1 0%" } : { flex: "" }}
      // transition={{ duration: 0.2 }}
      className={cx("h-[200px] md:h-[400px] ounded-2xl group relative overflow-hidde cursor-pointer overflow-hidden col-span-6"
        , selected === card ? "md:col-span-6" : "md:col-span-3"
      )}>
      <div className="relative h-[400px] w-full">
        <Image
          src="/hero_bg2.jpg"
          alt="Project Cover"
          fill
          className="object-cover group-hover:scale-110 duration-300 "
        />
      </div>
      {selected === card ? <CardInfo {...card} openModal={openModal} id={card.id} /> : null}
      {/* <div className={"hidden md:block "}> */}
      {/* <CardInfo {...card} /> */}
      {/* </div> */}
    </motion.div>
  )
};

const CardInfo = ({ href, name, project_url, openModal, id }: CardType & { openModal: any, id: number }) => {
  return (
    <div className="p-2 md:p-5 h-full w-full absolute bottom-0 md:bottom-0 flex flex-col  justify-between  items-between lg:flex-row lg:justify-between lg:items-end">
      {/* <Link href={href} className="p-1 md:px-4 md:py-2 rounded-2xl h-min bg-white text-zinc-700 font-normal flex space-x-2 hover:text-rose-700 hover:scale-105 duration-300">
        <BsArrowRightCircleFill size={25} className="" />
        <p className='text-sm'>Open Popup</p>
      </Link> */}
      <div onClick={() => openModal(id)} className="p-1 md:px-4 md:py-2 rounded-2xl h-min bg-white text-zinc-700 font-normal flex space-x-2 hover:text-rose-700 hover:scale-105 duration-300">
        <BsArrowRightCircleFill size={25} className="" />
        <p className='text-sm'>Open Popup</p>
      </div>
      <div className="text-right">
        <p className='text-lg md:text-4xl text-white font-bold'>{name}</p>
        <p className='text-xs md:text-sm text-red-700 font-semibold'>{project_url}</p>
      </div>
    </div>
  );
};
