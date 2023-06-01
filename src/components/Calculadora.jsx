import React from 'react'
import './Proyecto.css'
import Calcu from '../static/Calcu.png'

function Calculadora() {
  return (
    <>
    <h1 className='title'>Calculadora</h1>

    <div className='projectContainer'>
        <img className="leftPic" src={Calcu} alt="leftPic" />
        <div className='textyContainer'> 
            <h2>Calculadora desde Cero</h2> 
            <p className='rightText'>El objetivo principal era implementar la lógica para que al presionar los números en el teclado numérico, se mostraran en el display de la calculadora. Además, cada número presionado después de eso debía concatenarse a la derecha del número previo. Se me pidió que implementara las operaciones básicas, como suma, resta, multiplicación y división. Cada vez que se presionara una tecla de "operación", el siguiente número ingresado debería limpiar el display antes de colocarse. .</p>
        </div>
        
        
    </div>
    </>
    
  )
}

export default Calculadora