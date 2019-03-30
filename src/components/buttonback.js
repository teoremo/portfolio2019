import React from 'react'
import { Link } from "gatsby"

import './buttonback.css'



const Buttonback = props => (
    <Link to="/">
        <div className="button-back">
            <img className="arrow_left" src={require('../images/arrow-down.png')} alt="arrow going back" ></img>
            <h3>back home</h3>
        </div>
    </Link>
)

export default Buttonback