import Image from "next/image";

export default function Section() {
  return (
    <div className="w-full text-white bg-[#270208]" id="root">
      <Image
        src="/home/contactme-layered-waves-haikei.svg"
        alt="Hero background"
        // fill
        height={200}
        width={1440}
      // className="h-[28rem] w-[1440px] object-cover -z-20 absolute overflow-clip"
      />
      <div className="h-[500px]">
      </div>
      <Image
        src="/home/contactme-layered-waves-haikei2.svg"
        alt="Hero background"
        // fill
        height={200}
        width={1440}
      // className="h-[28rem] w-[1440px] object-cover -z-20 absolute overflow-clip"
      />
    </div>
  );
}
