import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Buttonback from "../components/buttonback";
import Commsprj from "../components/comms__prj";

export default (props) => (
    <Layout>        <SEO title="Tile of this page"/>
          <div className="project__hero__img">
            <Img fluid={props.data.imageCover.childImageSharp.fluid} />
          </div> 
            
          <div className="project__description-page">
            <div className="project__description__wrapper">
                <h1 className="project__description__h1">Communication design stuff</h1>
                <p className="project__description__intro-para">Before moving into Service Design, I’ve been involved in a number of projects ranging from branding to editorial design, from screenprinting to illustration, from UI design to animation.</p>
            </div>  
          </div>
   

        <div className="harika__grid">
          <Img  className="harika__grid__image-1" fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img  className="harika__grid__image-2" fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img  className="harika__grid__image-3" fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>

        <Commsprj 
            yearlocation="2014 - Milano, Italy"
            category="Art direction, Branding, UI Design, 3D animation"
            team="Service Designer, Product Owner, Lead UX Designer, Developer"
            h2="Harika"
            p={<p>Harika is a mobile app which guides customers to find everything about hairdressing &ndash; stylists, saloons, haircuts and offered services &ndash; in their local area. I've been responsible for the brand&rsquo;s identity and the product&rsquo;s user experience + user interface. <br /><br />Harika featured as one of the "Best new apps" in the App Store.</p>}
        />

        <div className="saporita__grid">
          <Img  className="saporita__grid__image-1" fluid={props.data.imageFour.childImageSharp.fluid} />
          <Img  className="saporita__grid__image-2" fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img  className="saporita__grid__image-3" fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>

        <Commsprj 
            yearlocation="2014 - Milano, Italy"
            category="Branding, Strategic Design"
            team="Communication Designer,  Chef, Quality & Food safety technician, Catering consultant"
            h2="Saporita’"
            p={<p>In 2014, as part of a collaboration with the Michelin starred Milanese restaurant Innocenti Evasioni, I helped creating Saporit&agrave;.<br /><br />The project aimed at exploring business opportunities for Italian&rsquo;s food excellence in Asian markets. As part of the team, composed by fine-dining professionals, I devised the branding identity.</p>}
        />

        <div className="sacrem__grid">
          <Img  className="sacrem__grid__image-1" fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img  className="sacrem__grid__image-2" fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>

        <Commsprj 
            h2="Sacremstudio: screenprinting & graphic design."
            yearlocation="2012 - 2015 - Milano, Italy"
            category="Interaction design, visual design, screenprinting"
            team="Communication designers x 4"
            p={<p>Back in 2012 a good friend of mine built a screenprinter and started experimenting with prints on old t-shirts. Months later myself and a few other friends joined the project and founded Sacr&egrave;m, a graphic design and screenprinting studio.<br /><br/>Now Sacr&egrave;m is fully operative. Services range from branding to videomaking, from screenprinting to interaction design.</p>}
        />
        

        <div className="sintesi__grid">
          <Img  className="sintesi__grid__image-1" fluid={props.data.imageNine.childImageSharp.fluid} />
          <Img  className="sintesi__grid__image-2" fluid={props.data.imageTen.childImageSharp.fluid} />
        </div>

        <Commsprj
            h2="A visual book: Il salto dell'acciuga"
            yearlocation="2014 - Milano, Italy"
            category="Editorial Design"
            team="Communication designer"
            p={<><p>&ldquo;Il salto dell&rsquo;acciuga&rdquo; is a novel written by the Italian author Nico Orengo, based on the story of a traditional italian dish, the &ldquo;bagna cauda&rdquo; - a soup made of garlic and anchovies.<br/>The dissertation focused on reinterpretating the book with a deeper sense of what the author wanted to communicate.<br/>I made a postcard folder book, which underlines every self-ending paragraph of the novel and the romantic feeling of the book with experimentally illustrated postcards.</p>
<Buttonback></Buttonback></> } >
        
        </Commsprj> 
       


    </Layout>
)

export const query = graphql`
query {
    imageCover: file(relativePath: {eq: "comm-cover.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      } 
    } 
    imageOne: file(relativePath: {eq: "harika-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      }  
    }
    imageTwo: file(relativePath: {eq: "harika-2.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
        }      
      }
    }
    imageThree: file(relativePath: {eq: "harika-3.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFour: file(relativePath: {eq: "saporita-1.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFive: file(relativePath: {eq: "saporita-2.png"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageSix: file(relativePath: {eq: "saporita-3.png"}) {
      childImageSharp {
      fluid {
          ...GatsbyImageSharpFluid
        }      
      }
    }
    imageSeven: file(relativePath: {eq: "sacrem-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
      }      
    }
  }
    imageEight: file(relativePath: {eq: "sacrem-2.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageNine: file(relativePath: {eq: "sintesi-1.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageTen: file(relativePath: {eq: "sintesi-2.jpg"}) {
      childImageSharp {
      fluid {
          ...GatsbyImageSharpFluid
        }      
      }
    }
  }
  `