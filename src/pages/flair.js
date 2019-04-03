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
          <div className="project__hero__img">
            <Img fluid={props.data.imageCover.childImageSharp.fluid} />
          </div> 
            <Projectintro 
            image={require('../images/flair-cover.jpg')}
            h1="Flair. Hairstyling on-demand"
            p={<p>When I joined Flair, a newly funded venture, I was asked to validate the product idea &ndash; an on-demand service for people who need an hairdresser.<br />Learning from the feedback I gathered, the team reframed the opportunity and <strong>collaborated with a diverse pool of professionals, hairdressers and potential clients</strong> to understand the context better before moving forward. <br /><br />With expert input and a range of research and ideation methods, our team proposed and validated a revised product vision.</p>}
            yearlocation="2015 - London, UK"
            category="Service Design, Strategic Design, UX Design"
            team="Service Designer x2, Product Owner, Developer"
            logo={require('../images/flair-logo.png')}
            />

        <Img className="image-s" fluid={props.data.imageOne.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2">Tailoring a service around people</h2>
                <p className="project__article__p">In London, thousands of people rely on mobile hairstylists, who conveniently provide hairdressing services in the comfort of their clients&rsquo; domestic environment.<br /><br />Just as Uber revolutionized the landscape of transportation with the aid of modern technology, Flair wanted to explore the opportunity of developing a digital product to extend on-demand mobile hairstyling to anybody.<br />The preliminary validation tests confirmed the assumption that <strong>potential customers would&rsquo;ve been reluctant to trust a stranger to invade the privacy of their home</strong>.&nbsp;<br />In order to fully understand the context we decided to undergo further research; teaming up with a second Service Designer, I devised and facilitated three ideation workshops. Considering market and desk research insights&rsquo; and tapping from the precious expertise of domain specialists who attended our sessions, we spotted a range of opportunities in the hairstyling industry.</p>
            </div>
        </div>

        <Img className="image-l" fluid={props.data.imageTwo.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">We learned that hairstyling is deeply linked to many aspects of the human nature &ndash; for example, people tend to have a haircut when approaching a big change in life. <strong>The relational component of this interaction</strong> is even more important in the domestic environment in which mobile hairstylists operate.<br /><br />After considering a wide range of visions, our team decided to focus on &lsquo;Providing a tailored on-demand service that matches users&rsquo; needs with mobile-hairdressers&rsquo; skills and personality&rsquo;."></p>
            </div>
        </div>

        <Img className="image-l" fluid={props.data.imageThree.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">Considering our two distinct audiences - mobile hairdressers and their clients &ndash; had very different needs, we used a range of techniques to define the idea in detail.<br /><br />I conducted several in-person interviews and shadowed a mobile hairdresser while she was at clients&rsquo; home to style their hair. <strong>By investing time in qualitative research, I learned that for each audience there were clear subsets of people</strong> with very different needs: for instance, full time mobile hairdressers are happy to travel across the city to get to their clients, while part timers would rather not to.<br /><br />Designing a <em>features sorting</em> excercise allowed the team to understand what was important to our users, and prioritise the service components accordingly - whether this meant developing an appointment scheduler for stylist or assessing what hair-care products Flair should provide.</p>
            </div>
        </div>

        <div className="flair__grid">
        <Img  className="flair__grid__image" fluid={props.data.imageFour.childImageSharp.fluid} />
        <Img  className="flair__grid__image" fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>

        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">We then went on exploring different business models &ndash; as an example, we considered a &lsquo;monthly subscription&rsquo; for haircare services &ndash; we tested multiple pricing options and <strong>prototyped the service using low fidelity prototypes</strong> &ndash; ensuring that the revised business idea was fully validated.</p>
                <Buttonback></Buttonback>
            </div>
        </div>

        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2"></h2>
                <p className="project__article__p"></p>
            </div>
        </div>




    </Layout>
)

export const query = graphql`
query {
    imageCover: file(relativePath: {eq: "flair-cover.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      } 
    } 
    imageOne: file(relativePath: {eq: "flair-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      }  
    }
    imageTwo: file(relativePath: {eq: "flair-2.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
        }      
      }
    }
    imageThree: file(relativePath: {eq: "flair-3.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFour: file(relativePath: {eq: "flair-4.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFive: file(relativePath: {eq: "flair-5.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
  }
  `