import React, { useEffect } from 'react'
import Background from './components/Background/Background.jsx';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

const App = () => {
  let HeroData=[
    {text1:"Dive into",text2:"What you Love"},
    {text1:"Indulge your",text2:"Passions"},
    {text1:"Give in to",text2:"your passions"}
  ]
  
  const [heroCount,setherocount]=useState(0);
  const [play,setplay]=useState(false);

  


  return (
    <div>
      <Background play={play} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setplay={setplay}
        HeroData={HeroData[heroCount]}
        heroCount={heroCount}
        setherocount={setherocount}
        play={play}
      />
      
    </div>
  )
}

export default App
