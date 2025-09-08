'use client';

import { useState, useEffect } from 'react';
import Start from "./components/Start";
import Career from "./components/Career";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import Loading from "./components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      <div className={`grid grid-cols-1 transition-opacity duration-500 ${isLoading ? 'opacity-90' : 'opacity-100'}`}>
        <Start isLoadingComplete={!isLoading}/>
        <Career/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
