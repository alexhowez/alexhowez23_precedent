"use client";
import { useState } from 'react';
// import { useState, useEffect, Suspense } from 'react';
// import { motion } from "framer-motion";

import ProjectsContainer from './ProjectsContainer'
import Cards from './Cards'
import Filters from './Filters'

import type { Tab } from './Filters'

const platforms: Tab[] = [
  { label: "All" },
  { label: "Web" },
  { label: "Mobile" },
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

  return (
    <section className="bg-white  w-full" id="projects">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-10 space-y-2 md:space-x-3 md:space-y-0">
        <Filters platforms={platforms} techs={techs} setPlatform={setPlatform} setTech={setTech} platform={platform} tech={tech} />
        <Cards platform={platform} tech={tech} />
      </div>
    </section>
  );
}

const FloatingSquares = () => (
  <>
  
  </>
)
