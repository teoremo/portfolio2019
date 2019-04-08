import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback";
import Cardshelter from "../components/shelter__card";

export default (props) => (
    <Layout>        <SEO title="Tile of this page"/>
          <div className="project__hero__img">
            <Img fluid={props.data.imageCover.childImageSharp.fluid} />
          </div> 
            <Projectintro 
            h1="Shelter service strategy + projects"
            p={<p>As the first Service Designer for the leading housing &amp; homelessness British charity, I&rsquo;m advocating for Design Thinking within the organization, with a focus on improving the services <strong>we provide to people in urgent need of help with housing</strong>. <br /><br />By acting as a &lsquo;hands-on&rsquo; Service &amp; UX Designer and actively engaging with senior management stakeholders, I&rsquo;ve successfully contributed to Human Centred Design becoming a key element of Services&rsquo; division long term strategy.</p>}
            yearlocation="2018, London"
            category="Service Design"
            team="service designers"
            logo={require('../images/shelterlogo.png')}
            />
        <Img className="image-s" fluid={props.data.imageOne.childImageSharp.fluid} />
        

        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2">Some things I’ve learned at Shelter (so far)</h2>
                <p className="project__article__p">When I joined Shelter, there were few people around me who really had a clear idea of what a Service Designer is. <br />To familiarise myself with Shelter services and identify opportunities, I began conducting contextual user research. <strong>I learned how complex it is to engage with vulnerable people, from &lsquo;recruiting&rsquo; to actually carring out research activities with somebody who is or will soon be homeless.</strong> Reading existing bibliography and reviewing in-depth analysis produced by our researchers proved useful.<br/>That&rsquo;s when I started mapping things. <br /><br />By developing a system map at Shelter, I was able to &lsquo;connect the dots&rsquo; and find areas for improvement accross different areas of the organisation.<br />Designing a user journey map helped to visualise what an ideal experience could look like for a person seeking advice from Shelter and communicate that idea quickly to get feedback.</p>
            </div>
        </div>

        <Img className="image-l" fluid={props.data.imageTwo.childImageSharp.fluid} />
          

         <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">As I was asked to implement digital products, I realized that influencing longer term strategy would’ve taken longer.<br /><strong>I figured out that &lsquo;starting small&rsquo; would’ve been the best approach.</strong><br />This allowed our team to build trust among stakeholders while guiding them along the design process and addressing things they cared about.<br /><br />That’s when Service Design started to gain genuine interest. <br />By leading a number of research and ideation workshops, I helped our team devising a service strategy and roadmap of products-services and interventions that would’ve get Shelter closer to the ideal advice journey envisioned earlier.<br /><br />As a team we then went on exploring these opportunities. <br /><strong>Some of the successful results we achieved include:</strong></p>
            </div>   
                <Cardshelter
                  cardimage={require('../images/cardimgdraft1.png')}
                  year="2017"
                  location="London, UK"
                  title="Streamlining advice journeys"
                  description="A unified point of access made it easier for people to contact Shelter, and allowed us to run and evaluate experiments aimed at decreasing pressure of our helpline. "
                  arrow={require('../images/arrow-down.svg')}/>
                <Cardshelter
                  cardimage={require('../images/cardimgdraft2.png')}
                  year="2018"
                  location="London, UK"
                  title="Improving our helpline to reach more people in urgent need"
                  description="How we improved Shelter’s helpline to reach thousands more people in urgent need of housing & homelessness expertise."
                  arrow={require('../images/arrow-down.svg')}/>
                <Cardshelter
                  cardimage={require('../images/cardimgdraft3.png')}
                  year="2018"
                  location="London, UK"
                  title="Reshaping our Local Advice Services offering"
                  description="How we implemented a new way of looking for face-to-face Shelter advice in a local area."
                  arrow={require('../images/arrow-down.svg')}/>
            
            <div className="project__article__wrapper">

                <p className="project__article__p">These outcomes have been recognized by senior management and they feel we are going in the right direction. Following these successes I was asked to ideate and facilitate a strategic session with senior stakeholders which contributed to Human Centred Design becoming a key element of the Services’ directorate long term plan <br /><br />As the team expands, <strong>I’m still working towards helping the rest of the organization to adopt a genuinely Human Centred approach</strong> for any new service that needs to be designed.</p>

                <Buttonback></Buttonback>
            </div>
        </div> 

    </Layout>
)

export const query = graphql`
query {
  imageCover: file(relativePath: {eq: "shelter-cover.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }    
    } 
  } 
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