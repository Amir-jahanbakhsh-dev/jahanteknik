import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header/header";
import { useEffect } from 'react';
import { useAos } from '../hooks/useAos';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useAos()
  return (
    <body dir="rtl" className="relative">
      <Navbar   />
      <Header  />

    </body>
  );
}
