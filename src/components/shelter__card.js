import React from "react"
import "./shelter__card.css"

const Cardshelter = props => (
  <div className="shelter__card">
    <img className="shelter__card__image" src={props.cardimage} alt="" />
    <h4 className="shelter__card__year">{props.year}</h4>
    <h4 className="shelter__card__location">{props.location}</h4>
    <h2>{props.title}</h2>
    <p className="shelter__article__p">{props.description}</p>
    <img className="shelter__card__arrow" src={props.arrow} alt="" />
  </div>
)

export default Cardshelter
