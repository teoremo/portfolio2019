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
      <img  src={require('../images/arrow-down.svg')} alt="arrow pointing down"></img>
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

      <Link to="/">
      <Cardhomepage
      year="2016"
      location="London, UK"
      cardlogo={require('../images/sdt-logo.png')}
      title="Service Design Today"
      categories="Research"
      description={<p>A snapshot of how Service Design & Design Thinking are becoming to be. Includes interviews with Livework, IDEO, Facebook, and more</p>}
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/flair/">
      <Cardhomepage
      year="2015"
      location="London, UK"
      cardlogo={require('../images/flair-logo.png')}
      title="Flair"
      categories="User research + Service Design"
      description="Would a “Uber for hairdressers” work in London? An innovative proposition for a funded venture active in the beauty sector."
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/gimble/">
      <Cardhomepage
      year="2014"
      location="Milano, Italy"
      cardlogo={require('../images/logo-polimi.png')}
      title="Gimble: introducing kids to sports"
      categories="Product-Service System + Business Design"
      description={<p>How to help shy kids get into team sports?<br/>Final project, part of Politecnico’s two-year MSc programme in Product-Service System Design</p>}
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/commdesign/">
      <Cardhomepage
      year="2012-2014"
      location="Milano, Italy"
      cardlogo={require('../images/logo-appstore.png')}
      title="Other stuff"
      categories="Communication design projects"
      description="Including an award-winning app, editorial work, and a co-founded screenprint & graphic design studio in Milan, Italy."
      arrow={require('../images/arrow-down.svg') }/>
      </Link>
      </div>
     
      <div className="homepage__page">
        <p className="bio">I’m a hybrid designer – which means my profile is adaptable to the needs of the team.</p>
        <img className="avatar" src={require('../images/avatar.jpg')} alt="Matteo Remondini" ></img>
        <a href="www.teoremo.com">
          <p className="downloadtext">Download the resume</p>
          <img className="downloadicon" src={require('../images/downloadicon.svg')} alt="download icon"></img> 
        </a>
      </div>

  </Layout>
)

export default IndexPage

