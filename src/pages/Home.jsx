import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from '../components/Navbar.jsx';
import Renatto from '../components/Renatto.jsx';
import Quote from '../components/Quote.jsx';
import Contacto from '../components/Contacto.jsx';

function Home() {

  
  return (
    <>
      
      <Parallax pages={2}>
        <ParallaxLayer speed={0.5}>
        <Navbar></Navbar>
        <Renatto></Renatto>
          
        </ParallaxLayer>

        <ParallaxLayer offset={0.999999} speed={0.8}>
          <Quote></Quote>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={5}>
          <Contacto></Contacto>
        </ParallaxLayer>

      </Parallax>


    </>
  )
}

export default Home
