import "./globals.css";
import { cx } from "classix";
import Header from "@/components/layout/Header2";
import Footer from "@/components/layout/Footer2";
import { sfPro, inter } from "./fonts";

export const metadata = {
  title: "Web Developer | Alex Howez",
  description:
    "I create apps, websites and custom solutions in a multitude of tech stacks.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
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
        <Footer />
      </body>
    </html>
  );
}
