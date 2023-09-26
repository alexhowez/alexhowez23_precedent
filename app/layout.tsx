// "use client";
import "./globals.css";
// import { cx } from "classix";
// import { sfPro, inter } from "./fonts";

import Header from "@/components/layout/Header2";
import Footer from "@/components/layout/Footer2";
import Chatbot from "@/components/home/chatbot";

export const metadata = {
  title: "Web Developer | Alex Howez",
  description:
    "I create apps, websites, AI bots and custom solutions in a multitude of tech stacks.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Precedent - Building blocks for your Next.js project",
  //   description:
  //     "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  //   creator: "@alexhowez",
  // },
  metadataBase: new URL("https://alexhowez.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body> 
      {/* <body className={cx(sfPro.variable, inter.variable)}> */}
        <Header />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
