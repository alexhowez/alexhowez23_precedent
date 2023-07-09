// "use client";
import { Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from './Hero.module.css'
import { InlineWidget } from "react-calendly";

// import ContactMeLoading from './ContactMeLoading'
import FreelancePlatforms from './FreelancePlatforms'
import Socials from './Socials'

// export default function Section() {
//   return (
//     <Suspense fallback={<ContactMeLoading />}>
//       <ContactMeSection />
//     </Suspense>
//   );
// }


export default function ContactMeSection() {
  return (
    <div className="w-full bg-white" id="contactme" >
      {/* <div className="relative h-[200px] w-full mx-auto" >
        <img
          src="/home/contactme-layered-waves-haikei.svg"
          alt="ContactMe top decoration"
          // fill
          // height={200}
          // width={1440}
          className="mx-auto"
        />
      </div> */}
      <div className="relative w-full overflow-clip" >
        <Image
          src="/home/contactme-layered-waves-haikei.svg"
          alt="ContactMe bottom decoration"
          height={200}
          width={1440}
          // fill
          className="mx-auto bg-black"
        />
      </div>
      <div className="w-full text-white bg-[#270208]">
        <section className="mx-auto w-full max-w-4xl text-white overflow-hidden">
          <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-1 place-items-center">
            <LeftSide />
            <div className="" >
              jhifhd
            </div>
            {/* <RightSide /> */}
          </div>
        </section>
      </div>
      <div className="relative w-full overflow-clip" >
        <Image
          src="/home/contactme-layered-waves-haikei2.svg"
          alt="ContactMe bottom decoration"
          height={200}
          width={1440}
          // fill
          className="mx-auto"
        />
      </div>
    </div>
  );
}

const LeftSide = () => (
  <article className="space-y-6 p-3">
    <Title />
    <Socials />
    <FreelancePlatforms />
  </article>
)

const Title = () => (
  <div className="space-y-1">
    <p className='text-center text-xl underline'>Contact Me</p>
    <div className="mx-auto max-w-md text-sm text-zinc-300">
      <div className="flex">
        <p className='pr-2'>📈 </p>
        <p className=''>Get accurate estimates, adaptable to all budgets</p>
      </div>
      <div className="flex">
        <p className='pr-2'>✨ </p>
        <p className=''>Unsure if I can help you? Just message me!</p>
      </div>
      <p className=''> </p>
    </div>
  </div>
)

const RightSide = () => (
  <div className="rounded-sm overflow-hidden bg-zinc-800 h-[500px] ">
    {/* <p className="text-center">Schedule a Call</p> */}
    <InlineWidget url="https://calendly.com/aech12/30min" styles={{ height: '500px' }} />
  </div>
)
