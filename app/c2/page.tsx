// import Comp from "@/components/layout/Header";
// import Comp2 from "@/components/layout/Header2";
"use client";
import { Suspense } from 'react';
import Header from "@/components/layout/Header2";
import HeaderLoading from "@/components/layout/Header2Loading";
import Hero from "@/components/home/hero/Hero";

export default async function ComponentTestPage() {
  return (
    <body>
      {/* <div className="h-10 w-full bg-green-200 pt-24">SEPARATOR</div> */}
      <Suspense fallback={<HeaderLoading />}>
         <Header />
       </Suspense>
      <Hero />
      {/* <Comp2 /> */}
      {/* <Comp /> */}
    </body>
  );
}
