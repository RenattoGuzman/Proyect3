import React from 'react'
import './Proyecto.css'
import MedKit1 from '../static/MedKit1.png'
import MedKit2 from '../static/MedKit2.png'

function Proyecto2() {
  return (
    <>
    <h1 className='title'>Proyecto2</h1>

    <div className='projectContainer'>
        <img className="leftPic" src={MedKit1} alt="leftPic" />
        <div className='textyContainer'> 
            <h2>Sistema de Hospitales</h2> 
            <p className='rightText'>MedKit es un sistema de hospitales creado orientado para el uso de los médicos y trabajadores pertenecientes al sistema de salud del país. Esto con la intención de poder optimizar procesos y mantener un orden en la base de datos de pacientes, medicamentos, doctores, etc.</p>
        </div>
        <div className='textyContainer'>
            <h2>Desafío</h2>
            <p className='leftText'>El reto más grande de este proyecto fue el implementar Angular, ya que era un lenguaje completamente desconocido para mí y varias partes de su funcionamiento son confusos, a pesar de esto fue una buena experiencia para aprender ya que siempre es bueno experimentar con diferentes lenguajes de programación.</p>
        </div>
        <img className="rightPic" src={MedKit2} alt="rightPic" />
        
        
    </div>

    </>
    
  )
}

export default Proyecto2