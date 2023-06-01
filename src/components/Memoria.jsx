import React from 'react'
import './Proyecto.css'
import AncientMemory from '../static/AncientMemory.png'
import AncientMemory1 from '../static/AncientMemory1.png'

function Memoria() {
  return (
    <>
    <h1 className='title'>Memoria</h1>

    <div className='projectContainer'>
        <img className="leftPic" src={AncientMemory} alt="leftPic" />
        <div className='textyContainer'> 
            <h2>Juego de Memoria</h2> 
            <p className='rightText'>El juego de memoria es un desafío en el que se presentan una serie de tarjetas boca abajo. El objetivo es encontrar las parejas de tarjetas idénticas mediante la memoria y la concentración. Al comenzar el juego, las tarjetas se colocan boca abajo en un tablero o superficie de juego. El jugador tiene permitido voltear dos tarjetas en cada turno.</p>
        </div>
        <div className='textyContainer'>
            <h2>Ancient Memory</h2>
            <p className='leftText'>Ancient Memory es el nombre que he dado al emocionante juego de memoria que he creado. La idea de este nombre surgió de mi fascinación por la historia y los misterios del pasado. Siempre me ha cautivado el enigma de las civilizaciones antiguas y su legado. Inspirado por la conexión entre la memoria y la historia, decidí fusionar ambos conceptos en un juego desafiante y entretenido.</p>
        </div>
        <img className="rightPic" src={AncientMemory1} alt="rightPic" />
        
        
    </div>

    </>
    
  )
}

export default Memoria