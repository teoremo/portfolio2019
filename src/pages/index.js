import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import "./global-styles.css"
import Cardhomepage from "../components/homepage__card"



const IndexPage = (props) => (
  <Layout>
    <SEO title="Tile of this page" keywords={[`gatsby`, `application`, `react`]} />

    <div className="homepage__hero-wrapper">
        
     <div className="homepage__hero__group">
        <h1 className="homepage__hero__h1">Matteo Remondini <br/> Service designer</h1>
        <div className="homepage__hero__p">
        <p>Passionate about complex problems, interested in human behaviour and intrigued by anything that is about change for the better.</p>
        </div>
        <div  className="homepage__hero__h2">
        <h2>This is a selection of work I’ve done over the years</h2>
        </div>
        

      </div>
     
      
     </div>
     <div className="arrow-down">
        <img  src={require('../images/arrow-down.svg')} alt="arrow pointing down" ></img>
        </div>
     <div className="homepage__page">
     
     <Link to="/shelter/">
     <Cardhomepage
      year="2017"
      location="London, UK"
      cardlogo={require('../images/shelterlogo.png')}
      title="Shelter"
      categories="Service strategy + projects"
      description="Helping Shelter become a Human Centred organisation, focusing on the housing advice services given to millions of people."
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Cardhomepage
      year="2017"
      location="London, UK"
      cardlogo={require('../images/shelterlogo.png')}
      title="Shelter"
      categories="Service strategy + projects"
      description="Helping Shelter become a Human Centred organisation, focusing on the housing advice services given to millions of people."
      arrow={require('../images/arrow-down.svg')}/>

{/*<Cardhomepage
      year="2016"
      location="London, UK"
      title="Service Design Today"
      categories="Research"
      description="A snapshot of how Service Design & Design Thinking are becoming to be. Includes interviews with Livework, IDEO, Facebook, and more"
      cardlogo={require('../images/shelterlogo.png')}/>
*/}

     </div>

     <div className="homepage__page">
      <p className="bio">I’m a hybrid designer – which means my profile is adaptable to the needs of the team.</p>
      <img className="avatar" src={require('../images/shelterlogo.png')} alt="Matteo Remondini" ></img>
      <a href="www.teoremo.com">
        <p className="downloadtext">Download the resume</p>
        <img className="downloadicon" src={require('../images/downloadicon.svg')} alt="download icon"></img> 
      </a>
     </div>



  </Layout>
)

export default IndexPage

