import React from 'react'
import RenattoImg from "../static/RenattoImg.jpg"
import "./Renatto.css"

function Renatto() {
    return (
        <div className='nombreContainer'>
            
            <h1 className='web'>⁜ web developer</h1>
            <img className='tatto' src={RenattoImg} draggable="false" alt="RenattoImg" />

            <div className='text-wrapper'>
                <h1>Renatto Guzmán</h1>
                <h1>Renatto Guzmán</h1>
            </div>

        </div>
    )
}

export default Renatto





