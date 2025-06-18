'use client'


import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import BentoSection, { BentoGrid } from "@/components/BentoSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-zinc-900 z-50">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <BentoSection/>
          <Projects />
          <Work />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
