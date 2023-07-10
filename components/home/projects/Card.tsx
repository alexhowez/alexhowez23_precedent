"use client";
// import { useState } from 'react'
import { cx } from "classix";
import { motion, AnimatePresence } from 'framer-motion'
import { BsArrowRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

export type CardType = {
  href: string;
  name: string;
  project_url: string;
  tech: string[]
};

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
};

export default function CardComponent({ selected, setSelected, card }: ExtendedCard) {
  return (
    <motion.div
      layout
      onClick={() => setSelected(card)}
      // variants={variants}
      // initial="hidden"
      // animate="visible"
      // style={selected === card ? { flex: "1 1 0%" } : { flex: "" }}
      // transition={{ duration: 0.2 }}
      className={cx("h-[400px] w-16 rounded-2xl group relative overflow-hidde cursor-pointer lg:w-24 overflow-hidden"
      , selected === card ? "flex-1" : ""
      )}>
      <div className="relative h-[400px] w-full">
        <Image
          src="/hero_bg2.jpg"
          alt="Hero background"
          fill
          className="object-cover group-hover:scale-110 duration-300 "
        />
      </div>
      {selected === card ? <CardInfo {...card} /> : null}
    </motion.div>
  )
};

const CardInfo = ({ href, name, project_url }: CardType) => {
  return (
    <div className="p-5 w-full absolute bottom-0 flex justify-between items-end">
      <Link href={href} className="px-4 py-2 rounded-xl h-min bg-white text-zinc-700 font-normal flex space-x-2 hover:text-rose-700 hover:scale-105 duration-300">
        <BsArrowRightCircleFill size={25} className="" />
        <p className='text-sm'>See Project</p>
      </Link>
      <div className="text-right">
        <p className='text-4xl text-white font-bold'>{name}</p>
        <p className='text-sm text-red-700 font-semibold'>{project_url}</p>
      </div>
    </div>
  );
};
