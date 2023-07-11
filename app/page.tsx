"use client";
// import { Suspense } from 'react';
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import ContactMe from "@/components/home/contactme/ContactMe";

export default async function ComponentTestPage2() {
  return (
    <>
      <Hero />
      <Projects />
      <ContactMe />
    </>
  );
}
