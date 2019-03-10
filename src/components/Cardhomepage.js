import React from 'react'
import './Cardhomepage.css'

const Cardhomepage = props => (
    <a className="cardlink" href="">
    <div className="Cardhomepage">
       
        <h4 className="year">{props.year}</h4>
        <h4 className="location">{props.location}</h4>
        <img className="cardlogo" src={props.cardlogo}></img>
        <h2>{props.title}</h2>
        <h3>{props.categories}</h3>
        <p>{props.description}</p>
        <img className="arrow" src={props.arrow}></img>
        
    </div>
    </a>
)

export default Cardhomepage