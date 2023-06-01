import React from 'react'
import './Proyecto.css'
import oklama from '../static/oklama.png'
import oklama2 from '../static/oklama2.png'

function Proyecto1() {
  return (
    <>
    <h1 className='title'>Proyecto1</h1>

    <div className='projectContainer'>
        <img className="leftPic" src={oklama} alt="leftPic" />
        <div className='textyContainer'> 
            <h2>Recreación página web: oklama.com</h2> 
            <p className='rightText'>Se recreó la página oficial del artista internacional Kendrick Lamar, rapero y compositor estadounidense ampliamente reconocido por su talento y su contribución a la cultura musical. Nacido el 17 de junio de 1987 en Compton, California, Kendrick Lamar Duckworth, conocido artísticamente como Kendrick Lamar, ha dejado una huella indeleble en el mundo del hip-hop y la música en general.</p>
        </div>
        <div className='textyContainer'>
            <h2>Desafío</h2>
            <p className='leftText'>El reto más grande de este proyecto fue la lógica detrás del movimiento de los cuadros, lo solucioné al obtener las coordenadas del mouse client en x e y para luego trasladarle esta información a la posición de cada cursor (imagen) diferente.</p>
        </div>
        <img className="rightPic" src={oklama2} alt="rightPic" />
        
        
    </div>
    </>
    
  )
}

export default Proyecto1