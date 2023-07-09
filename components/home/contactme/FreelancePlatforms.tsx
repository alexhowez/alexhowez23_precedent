// "use client";
import { BsArrowUpRight } from 'react-icons/bs';

export default function FreelancePlatforms() {
  return (
    <div className="text-center space-y-1 ">
      <div className="flex justify-center space-x-2">
        <SiteCard name="Upwork" url="https://www.upwork.com/freelancers/~01fd150a096e5d2892" />
        <SiteCard name="Fiverr" url="https://www.fiverr.com/alex_howez" />
        <SiteCard name="Guru" url="https://www.guru.com/freelancers/alexhowez" />
      </div>
      <p className="text-sm font-light animate-pulse">Find me on freelance platforms</p>
    </div>
  );
}

const SiteCard = ({ name, url }: { name: string, url: string }) => (
  <a href={url} target="_blank" rel="noreferrer" className="p-3 flex items-center justify-center space-x-1 rounded-sm w-full border border-red-400 hover:bg-white hover:text-zinc-800 transition-all duration-500">
    <p className="">{name}</p>
    <BsArrowUpRight size={15} className={`hover:text-[#270208] hover:scale-110 duration-300`} />
  </a>
)