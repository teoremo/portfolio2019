import React from 'react'
import './project__intro.css'

const Projectintro = props => (
    <div>
            
            <div className="project__description-page">
            <div className="project__description__wrapper">
                <h1 className="project__description__h1">{props.h1}</h1>
                <div className="project__description__intro-para">{props.p}</div>
                 <div className="project__description__details">
                    <h4 className="project__description__year-location-text">Year & location</h4>
                    <h4 className="project__description__year-location">{props.yearlocation}</h4>
                    <h4 className="project__description__category-text">Category of work</h4>
                    <h4 className="project__description__category">{props.category}</h4>
                    <h4 className="project__description__year-team-text">Team composition</h4>
                    <h4 className="project__description__team">{props.team}</h4>
                    </div>
                    <div className="project__hero__logo-container">
                <img className="project__hero__logo" src={props.logo} alt=""></img>
                </div>
            </div>  
            </div>
    </div>
)

export default Projectintro
