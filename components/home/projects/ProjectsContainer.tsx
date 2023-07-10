"use client";
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaTwitter, FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import Image from 'next/image';

// import Modal from './SocialsModal'
import styles from './Projects.module.css'

export default function Socials() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.flexbox}>
        <svg className="line">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" />
        </svg>
      </div>
      <div className={styles.flexbox}>
        <svg className="line">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" />
        </svg>
      </div>
      <div className={styles.flexbox}>
        <svg className="line">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" />
        </svg>
      </div>
    </div>
  );
}

// const AnIcon = () => ()

const IconComponent = ({ Icon, setModalOpened, modalOpened }: { Icon: any, setModalOpened: (boolean: boolean) => void, modalOpened: boolean }) => (
  <div onClick={() => setModalOpened(!modalOpened)}>
    {/* <motion.div onClick={() => setModalOpened(true)}> */}
    <Icon size={50} className={`hover:text-[#270208] hover:scale-110 duration-300`} />
  </div>
);