import React from 'react'
import Navbar from '../components/Navbar.jsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Proyecto from '../components/Proyecto.jsx';
import Proyecto2 from '../components/Proyecto2.jsx';
import Memoria from '../components/Memoria.jsx';
import Calculadora from '../components/Calculadora.jsx';

function Proyectos() {
  return (
    <>
        <Parallax pages={5}>
            <ParallaxLayer speed={0.7}>
                <Navbar/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.05} speed={3}>
                <br/><br/><br/><br/>
                <Proyecto></Proyecto>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed = {3}>
                <Proyecto2></Proyecto2>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={3}>
                <Calculadora></Calculadora>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={3}>
                <Memoria></Memoria>
                </ParallaxLayer>
        </Parallax>

    </>
  )
}

export default Proyectos
