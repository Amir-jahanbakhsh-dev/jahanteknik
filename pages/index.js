import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import HomePage from "./homePage";
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
    <>
      <header>
        <nav>
          <a href="#" className="nav-link active icons poshtiban text-light text-icon" aria-label="گفتگو">
            <i className="larg fas fa-comment-dots"></i>
          </a>

          <Navbar />

        </nav>
      </header>
      <HomePage />
      <Footer />
    </>
  );
}
