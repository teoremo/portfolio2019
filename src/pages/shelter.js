import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback";

export default (props) => (
    <Layout>        <SEO title="Tile of this page"/>
            <Projectintro 
            image={require('../images/shelter-cover.jpg')}
            h1="Shelter Service strategy + projects"
            p={<p>As the first Service Designer for the leading housing &amp; homelessness British charity, I&rsquo;m advocating for Design Thinking within the organization, with a focus on improving the services <strong>we provide to people in urgent need of help with housing</strong>. <br /><br />By acting as a &lsquo;hands-on&rsquo; Service &amp; UX Designer and actively engaging with senior management stakeholders, I&rsquo;ve successfully contributed to Human Centred Design becoming a key element of Services&rsquo; division long term strategy.</p>}
            yearlocation="2018, London"
            category="Service Design"
            team="service designers"
            logo={require('../images/shelterlogo.png')}
            />
            <div className="image-s">
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>

        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2">Some things I’ve learned at Shelter (so far)</h2>
                <p className="project__article__p">When I joined Shelter, there were few people around me who really had a clear idea of what a Service Designer is. <br />To familiarise myself with Shelter services and identify opportunities, I began conducting contextual user research. <strong>I learned how complex it is to engage with vulnerable people, from &lsquo;recruiting&rsquo; to actually carring out research activities with somebody who is or will soon be homeless.</strong> Reading existing bibliography and reviewing in-depth analysis produced by our researchers proved useful. That&rsquo;s when I started mapping things. <br /><br />By developing a system map at Shelter, I was able to &lsquo;connect the dots&rsquo; and find areas for improvement accross different areas of the organisation.<br />Designing a user journey map helped to visualise what an ideal experience could look like for a person seeking advice from Shelter and communicate that idea quickly to get feedback.</p>
            </div>
        </div>

        <div className="image-l">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>    

         <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">loads of lorem ipsum here</p>
                <Buttonback></Buttonback>
            </div>
        </div> 

    </Layout>
)

export const query = graphql`
query {
  imageOne: file(relativePath: {eq: "shelter-1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }    
    }  
  }
  imageTwo: file(relativePath: {eq: "shelter-2.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
      }      
    }
  }
}
`