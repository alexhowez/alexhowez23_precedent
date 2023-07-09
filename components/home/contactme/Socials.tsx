"use client";
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import Modal from './SocialsModal'

export default function Socials() {
  const [modalOpened, setModalOpened] = useState(true)

  return (
    <div className="p-4 bg-red-500 rounded-md space-y-2">
      <p className="text-center text-sm font-semibold">my socials</p>
      <div className="w-full flex justify-center space-x-3 transition-all  cursor-pointer">
        <IconComponent Icon={FaTwitter} setModalOpened={setModalOpened} modalOpened={modalOpened} />
        <IconComponent Icon={FaDiscord} setModalOpened={setModalOpened} modalOpened={modalOpened} />
        <IconComponent Icon={MdMail} setModalOpened={setModalOpened} modalOpened={modalOpened} />
      </div>
      <AnimatePresence>
        {modalOpened ? (
          <Modal />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const IconComponent = ({ Icon, setModalOpened, modalOpened }: { Icon: any, setModalOpened: (boolean: boolean) => void, modalOpened: boolean }) => (
  <div onClick={() => setModalOpened(!modalOpened)}>
    {/* <motion.div onClick={() => setModalOpened(true)}> */}
    <Icon size={60} className={`hover:text-[#270208] hover:scale-110 duration-300`} />
  </div>
);