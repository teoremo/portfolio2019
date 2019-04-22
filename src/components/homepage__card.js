import React from 'react'
import './homepage__card.css'

const Cardhomepage = props => (
    <a className="homepage__card__link" href="">
    <div className="homepage__card">
       
        <h4 className="homepage__card__year">{props.year}</h4>
        <h4 className="homepage__card__location">{props.location}</h4>
        <img className="homepage__card__logo" src={props.cardlogo}></img>
        <h2>{props.title}</h2>
        <h3>{props.categories}</h3>
        <p>{props.description}</p>
        <img className="homepage__card__arrow" src={props.arrow}></img>
        
    </div>
    </a>
)

export default Cardhomepage