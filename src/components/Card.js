import React from 'react'
import './Card.css'

export default function Card({img}) {
    return (
        <div className="wrap">
            <img  className="imgBlock" src={img} alt="Img"></img>
        </div>
    
    )
}
