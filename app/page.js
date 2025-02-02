'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";



export default function Home() {


  


  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      
        setIsDarkMode(true)

    }else{

        setIsDarkMode(false)

    }



  },[])

  useEffect(()=>{

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }


  },[isDarkMode])


  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup

  }, []);

  return (



    <>




      {/* Show Loader while loading */}
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-zinc-900 z-50">
          <Loader />
        </div>
      ) : (
        // Render the rest of the components after loading
        <>
    
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

      <Header isDarkMode={isDarkMode}/>

      <About isDarkMode={isDarkMode} />

      <Services isDarkMode={isDarkMode}/>

      <Work isDarkMode={isDarkMode}/>

      <Contact isDarkMode={isDarkMode}/>

      <Footer isDarkMode={isDarkMode}/>

      </>

      
      )}
    
    </>
    
  );
}
