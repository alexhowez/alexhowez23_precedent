"use client";
import { Suspense } from 'react';
// import Header from "@/components/layout/Header2";
// import Hero from "@/components/home/hero/Hero";
// import ContactMe from "@/components/home/contactme/ContactMe";
// import Footer from "@/components/layout/Footer2";
import Comp from "@/components/layout/Footer2";
// import Comp2 from "@/components/layout/Header2";

export default async function ComponentTestPage2() {
  return (
    <body>
      <Comp />
      {/* <Comp2 /> */}
    </body>
  );
}
