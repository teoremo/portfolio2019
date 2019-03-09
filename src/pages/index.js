import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Cardhomepage from "../components/Cardhomepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Tile of this page" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="Hero-h1">Matteo Remondini <br/> Service designer</h1>
        <div className="Hero-p">
        <p>Passionate about complex problems, interested in human behaviour and intrigued by anything that is about change for the better.</p>
        </div>
        <div  className="Hero-h2">
        <h2>This is a selection of work I’ve done over the years</h2>
        </div>
        <img className="arrow-down" src={require('../images/arrow-down.svg')} alt="arrow pointing down" ></img>
      </div>
     </div>

     <div className="page">
     
     <Cardhomepage
      year="2017"
      location="London, UK"
      title="Shelter"
      categories="Service strategy + projects"
      description="Helping Shelter become a Human Centred organisation, focusing on the housing advice services given to millions of people."
      cardlogo={require('../images/shelterlogo.png')}/>

     <Cardhomepage
      year="2016"
      location="London, UK"
      title="Service Design Today"
      categories="Research"
      description="A snapshot of how Service Design & Design Thinking are becoming to be. Includes interviews with Livework, IDEO, Facebook, and more"
      cardlogo={require('../images/shelterlogo.png')}/>
     </div>
  </Layout>
)

export default IndexPage
