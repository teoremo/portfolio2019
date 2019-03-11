import React from 'react'
import './project.css'

const project = props => (
    <div className="project-wrapper">
        <img className="project__hero__img" src={props.image}></img>
        <div className="project__description-wrapper"></div>
        <h1 className="project__description__h1" {props.h1}></h1>
        <h2 className="project__description__h2" {props.h1}></h2>
        <p className="project__description__intro-para" {props.h1}></p>
        <h4 className="project__description__year-location-text">Year & location</h4>
        <h4 className="project__description__year-location" {props.yearlocation}></h4>
        <h4 className="project__description__category-text">Category of work</h4>
        <h4 className="project__description__category" {props.category}></h4>
        <h4 className="project__description__year-team-text">Team composition</h4>
        <h4 className="project__description__team" {props.team}></h4>
        <img className="project__hero__logo" src={props.logo}></img>
    </div>
    </a>
)

export default project