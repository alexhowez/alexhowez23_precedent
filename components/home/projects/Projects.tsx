"use client";
import { useState, useEffect, Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from './Hero.module.css'

import ProjectsContainer from './ProjectsContainer'
import Cards from './Cards'
import Filters from './Filters'

import type { CardType } from './Card'
import type { Tab } from './Filters'

const platforms: Tab[] = [
  { label: "All" },
  { label: "Web" },
  { label: "Mobile" },
  { label: "Svelte" },
];

const techs: Tab[] = [
  { label: "All" },
  { label: "React" },
  { label: "Typescript" },
  { label: "NodeJS" },
  { label: "Svelte" },
];

export default function Section() {
  const [platform, setPlatform] = useState(platforms[0]);
  const [tech, setTech] = useState(techs[0]);
  
  useEffect(() => {
    setPlatform(platforms[0])
    setTech(techs[0])
  }, [])

  return (
    <section className="bg-zinc-700  w-full" id="projects">
      <div className="mx-auto max-w-6xl">
        <Cards platform={platform} tech={tech} />
        <Filters platforms={platforms} techs={techs} setPlatform={setPlatform} setTech={setTech} platform={platform} tech={tech} />
      </div>
    </section>
  );
}

const FloatingSquares = () => (
  <>
  
  </>
)
