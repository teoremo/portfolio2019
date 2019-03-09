import React from 'react'
import './Cardhomepage.css'

const Cardhomepage = props => (
    <div className="Cardhomepage">
        <h4>{props.year}</h4>
        <h4>{props.location}</h4>
        <h2>{props.title}</h2>
        <h3>{props.categories}</h3>
        <p>{props.description}</p>
        <img src={props.cardlogo}></img>
        <img src={props.arrow}></img>
    </div>
)

export default Cardhomepage