import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import "../components/project__intro.css"

const shelter = () => (
    <Layout>
        <SEO title="Tile of this page" keywords={[`gatsby`, `application`, `react`]} />
        
        
        
        <Projectintro 
            image={require('')}
            h1=""
            h2=""
            p=""

        />
            

        <img src=""/>
        <div className="project__article__page">
            <h1 className="project__article__h1"></h1>
            <p className="project__article__p"></p>
        </div>


  </Layout>
)

export default shelter
