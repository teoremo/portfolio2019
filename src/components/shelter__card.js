import React from 'react'
import './shelter__card.css'

const Cardshelter = props => (
    <a className="shelter__card__link" href="">
    <div className="shelter__card">
        <img className="shelter__card__image" src={props.cardimage}></img>
        <h4 className="shelter__card__year">{props.year}</h4>
        <h4 className="shelter__card__location">{props.location}</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img className="arrow-right" src={props.arrow}></img>
    </div>
    </a>
)

export default Cardshelter