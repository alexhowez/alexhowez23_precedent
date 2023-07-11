"use client";
import { useState } from 'react';
// import { useState, useEffect, Suspense } from 'react';
// import { motion } from "framer-motion";

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
    <section className="bg-white  w-full py-5" id="projects">
      <Title />
      <div className="p-6 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-10 gap-y-2 md:gap-x-3 md:gap-y-0">
        <Filters platforms={platforms} techs={techs} setPlatform={setPlatform} setTech={setTech} platform={platform} tech={tech} />
        <Cards platform={platform} tech={tech} />
      </div>
    </section>
  );
}

const Title = () => (
  <div className="pt-3 pb-6 mx-auto text-center max-w-md">
    <h3 className="text-xl text-black">My Projects</h3>
    <p className="text-zinc-500">Here you&apos;ll mostly find projects I fully developed myself. I&apos;ve also included projects I developed features for or helped with.</p>
  </div>
)
