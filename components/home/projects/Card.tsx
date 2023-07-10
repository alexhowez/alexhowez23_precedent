"use client";
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaTwitter, FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

// import Modal from './SocialsModal'
import styles from './Projects.module.css'


export default function Component() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="h-[400px] w-full bg-zinc-200">
      <div className="flex overflow-hidden">
        <Card name="Openly" href="/" project_url="https://github.com/Openly" />
        <div className="w-16 h-[400px] bg-green-400" />
        <div className="w-16 h-[400px] bg-green-800" />
        <div className="w-16 h-[400px] bg-green-400" />
      </div>
    </div>
  );
}

type InfoProps = {
  href: string;
  name: string;
  project_url: string;
};

const CardInfo = ({ href, name, project_url }: InfoProps) => {
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

const Card = (cardInfo: InfoProps) => (
  <article className="h-[400px] rounded-2xl relative overflow-clip flex-1 hover:scale-105 duration-300">
    <div className="relative h-[400px] w-full">
      <Image
        src="/hero_bg2.jpg"
        alt="Hero background"
        fill
        className="object-cover"
      />
    </div>
    <CardInfo {...cardInfo} />
  </article>
);