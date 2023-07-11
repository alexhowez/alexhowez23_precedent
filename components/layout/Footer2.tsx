"use client";
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useRef } from "react"
import { motion, useInView, animate } from "framer-motion"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="py-5 md:py-10 w-full border-t border-gray-200 bg-white text-center">
      <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center justify-center md:space-x-14">
        {/* <div className="container mx-auto px-4"> */}
        <p className="mt-3 text-black">© 2023 all rights reserved | alex howez</p>
        {/* </div> */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-500">
            find me on
          </p>
          <div className="flex space-x-2" ref={ref}>
            <IconComponent Icon={FaLinkedinIn} href={'https://www.linkedin.com/in/alexhowez/'} delay={0.1} isInView={isInView} />
            <IconComponent Icon={FaGithub} href={'https://github.com/aech12/'} delay={0.3} isInView={isInView} />
            <IconComponent Icon={FaTwitter} href={'https://twitter.com/AlexHowez'} delay={0.5} isInView={isInView} />
          </div>
        </div>
      </div>
    </div>
  );
}

const IconComponent = ({ Icon, href, delay, isInView }: { Icon: any, href: string, delay: number, isInView: any }) => (
  <motion.a
    initial={{ opacity: 0 }} // Start from scale 0 
    animate={{ opacity: isInView ? 1 : 0 }} // Animate to scale 1
    transition={{ delay, duration: 0.5 }} // Set delay and duration for the transition
    className="text-gray-800 underline transition-colors"
    href={href}
    target="_blank"
    rel="noopener noreferrer">
    <Icon size={40} className="p-2 rounded-lg border border-gray-300 ext-rose-600 text-black hover:scale-110 hover:text-rose-600 hover:border-rose-400" />
  </motion.a>
);
