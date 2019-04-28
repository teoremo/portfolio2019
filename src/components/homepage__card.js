import React from 'react'
import './homepage__card.css'

const ARROW_RIGHT = require("../images/arrow-down.svg");
const ARROW_EXT = require("../images/arrow-ext-link.svg");

class Cardhomepage extends React.Component {
    getArrow() {
        if (this.props.arrow_type == "ext") {
            return (
                <img className="homepage__card__arrow_ext" src={ARROW_EXT}></img>
            )
        } else {
            return (
                <img className="homepage__card__arrow_right" src={ARROW_RIGHT}></img>
            )
        }
    }
    render() {
        return (
            <a className="homepage__card__link" href="">
            <div className="homepage__card">
            
                <h4 className="homepage__card__year">{this.props.year}</h4>
                <h4 className="homepage__card__location">{this.props.location}</h4>
                <img className="homepage__card__logo" src={this.props.cardlogo}></img>
                <h2>{this.props.title}</h2>
                <h3>{this.props.categories}</h3>
                <p>{this.props.description}</p>
                {this.getArrow()}
            </div>
            </a>
        )
    }
}

export default Cardhomepage