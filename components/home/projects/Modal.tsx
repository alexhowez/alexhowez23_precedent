"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import Slider from './Slider';

type Props = {
  isToggled: boolean,
  setToggled: any,
  closeModal: any,
  data: null |{
    name: string,
    description: string,
    tech: string[],
    images: string[],
  }
}

export default function Modal({ isToggled, setToggled, closeModal, data }: Props) {
  return (
    <AnimatePresence>
      {isToggled &&
        <>
          <div className="bg-zinc-800 backdrop-blur-lg bg-opacity-60 w-full h-full block absolute top-0 left-0 z-10" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-9999 flex flex-col justify-center items-center w-9/12 max-w-5xl h-auto p-4 m-3 rounded-md border border-red-500 bg-zinc-800 text-white z-10 space-y-1"
            initial={{ y: -20, x: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <p className="text-xl font-bold">{data?.name}</p>
            <ul className="italic text-center text-rose-500 text-sm"> {
              data?.tech.map((tech: string) => <li key={tech} className="inline">{tech}{" "}</li>)
            }
            </ul>
            <p className="text-zinc-300">{data?.description}</p>
            <Slider images={data?.images} />
            <button className="btn" onClick={closeModal}>Close</button>
          </motion.div>
        </>
      }
    </AnimatePresence >
  )
}