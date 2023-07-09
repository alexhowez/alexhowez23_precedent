"use client";
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs';

export default function SocialsModal() {
  return (
    <motion.div className="p-3 rounded-md border-2 bg-white text-zinc-700 text-center space-y-1"
      initial={inner_modal.initial}
      animate={inner_modal.animate}
      exit={inner_modal.exit}
    >
      <ModalContactInfo label="Twitter" value="twitter.com/AlexHowez" href={"https://twitter.com/AlexHowez"} />
      <ModalContactInfo label="LinkedIn" value="linkedin.com/alexhowez/" href={"https://www.linkedin.com/in/alexhowez/"} />
      <ModalContactInfo label="Github" value="github.com/aech12/" href={"https://github.com/aech12/"} />
      <div className='pt-1' />
      <div className='mx-auto w-8/12 rounded-lg border-2 border-rose-00' />
      <ModalContactInfo label="Discord" value="alex3397" />
      <ModalContactInfo label="Email" value="aech-12@hotmail.com" />
      {/* <motion.button onClick={() => setModalOpened(false)} /> */}
    </motion.div>
  );
}

const ModalContactInfo = ({ label, value, href }: { label: string, value: string, href?: string }) => (
  // {
  //   href ? 
  // }
  <motion.div className="text-sm space-x-1"
    initial={inner_modal_item.initial}
    animate={inner_modal_item.animate}
    exit={inner_modal_item.exit} >
    <p className="">{label}</p>
    {
      href ?
        <a href={href} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-rose-600 text-xs transition-all duration-300 space-x-1">
          <p className="inline">{value}</p>
          <BsArrowUpRight size={10} className="inline" />
        </a> :
      <p className="text-zinc-500 text-xs">{value}</p>
    }
  </motion.div>
);

// modal that displays contact information
const inner_modal = {
  initial: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: 'spring',
      staggerChildren: 0.3, delayChildren: 0.3 // staggering children not working for whatever reason
    },
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: 'spring',
      staggerChildren: 0.3, delayChildren: 0.3
    },
  },
  exit: { clipPath: "inset(10% 50% 90% 50% round 10px)" }
}

const inner_modal_item = {
  initial: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
  animate: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: {
      duration: 0.4,
    }
  },
  exit: {
    opacity: 1, scale: 1, filter: "blur(20px)",
    transition: {
      duration: 0.2,
    }
  },
}