import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import buttonback from "../components/buttonback"
import "./global-styles.css"
import Projectintro from "../components/project__intro"

export default () => (
    <Layout>
        <buttonback></buttonback>
        <SEO title="Tile of this page"/>
            <Projectintro 
            image={require('../images/shelter1.jpg')}
            h1="Shelter"
            h2="Service strategy + projects"
            p="Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
            year-location="2018, London"
            category="Service Design"
            team="service designers"
            logo={require('../images/shelterlogo.png')}
            />

        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h1 className="project__article__h1">Helping bla bla helpline</h1>
                <p className="project__article__p">loads of lorem ipsum here</p>
            </div>

        </div>

  </Layout>
)