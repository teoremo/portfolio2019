import React from 'react'
import { Link } from "gatsby"

import './buttonback.css'



const Buttonback = props => (
    <Link to="/">
        <div className="button-back">
            <img className="button-back__arrow_left" src={require('../images/arrow-down.svg')} alt="arrow going back" ></img>
            <h3 className="button-back__text">back home</h3>
        </div>
    </Link>
)

export default Buttonback