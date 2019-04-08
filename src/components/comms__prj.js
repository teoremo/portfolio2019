import React from 'react'
import './comms__prj.css'

const Commsprj = props => (
    <div>
            
            <div className="comms__project__description-page">
            <div className="comms__project__description__wrapper">
                <h1 >{props.h1}</h1>
                <div >
                        <h4 className="comms__project__description__year-location-text">Year & location</h4>
                        <h4 className="comms__project__description__year-location">{props.yearlocation}</h4>
                        <h4 className="comms__project__description__category-text">Category of work</h4>
                        <h4 className="comms__project__description__category">{props.category}</h4>
                        <h4 className="comms__project__description__year-team-text">Team composition</h4>
                        <h4 className="comms__project__description__team">{props.team}</h4>
                </div>

                <div>{props.p}</div>
            </div>  
            </div>
    </div>
)

export default Commsprj
