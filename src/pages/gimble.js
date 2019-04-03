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
            image={require('../images/gimble-cover.jpg')}
            h1="Gimble: introducing kids to team sports"
            p={<p>How do we help shy kids enjoy team sports? <br />Gimble <strong>introduces kids to sport using motion sensors and music</strong> as means to support the physical activities and facilitate the interaction among them.<br /><br />The project has been tutored and prototyped at Politecnico di Milano, in partnership with IDEO and Stanford University as part of my MSc in Product-Service System Design</p>}
            yearlocation="2015 - Milan, Italy"
            category="Service Design, Business Design, Industrial Design"
            team="Service Designers x5"
            logo={require('../images/gimble-logo.png')}
            />

        <Img className="image-m" fluid={props.data.imageOne.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2">What's Gimble</h2>
                <p className="project__article__p">We were tasked with finding an unmet need in the sports industry and decided to investigate why many kids don&rsquo;t enjoy practicing sports.<br />We began by carrying out out desk research and consulted with experts to understand the problem and find a product opportunity.<br /><br /><strong>We found that shyness is a pretty common factor among &ldquo;lazy&rdquo; kids.</strong><br />The period of most rapid development of motor behaviors and relational skills is between 2 and 6 years of age so we decided to target this group with a product that would break down shyness barriers and encourage physical activity during this important development phase. <br /><br />By conducting research we found out that music is used by many disciplines as a great tool of cohesion, to form ties and improve the quality of interactions between people. <br />Looking at how might we use music to help young kids get into team sports, we came up with a range of concepts and we focused on one: Gimble.</p>
            </div>
        </div>

        <Img className="image-l" fluid={props.data.imageTwo.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p">Gimble is an educational course that introduces kids to sports using motion sensors and music as playful ways to support physical activities and encourage the interaction within others.<br /><br />For each themed lesson, kids gestures are highlighted by sounds, helping them to perform designed activities. For example, <strong>when they&rsquo;d jump at the same time, the movement would be indicated by a cheering &ldquo;boooing&rdquo;.</strong><br /><br />The concept got prototyped and received the interests of Italian Psychomotricity Association teachers for exploring potential further developments.</p>
                <Buttonback></Buttonback>
            </div>
        </div>

        <Img className="image-s" fluid={props.data.imageThree.childImageSharp.fluid} />
        
<div></div>


        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h2 className="project__article__h2">The full story</h2>
                <h3>Exploratory research</h3>
                <p className="project__article__p--small">The final course of the MSc in Product Service System Design aimed at guiding students through the entire process of developing a commercially viable innovative idea to solve an existing problem in a defined sector.<br />Our team was tasked to focus on young people in the sport industry and, after getting inspired by successfull examples, we started to conduct design research. <strong>By carrying out extensive desk research and asking to parents with young kids what problems they were experiencing, we found out that for many children, engaging in team sports is very challenging.</strong><br /><br />Between the two and four years of age, children go through a phase of strangers&rsquo; anxiety as they become afraid of people they don&rsquo;t know. They experience an abrupt jump from being alone to be in big groups. <strong>It&rsquo;s estimated that between 20% and 48% of children have shy personalities.</strong><br /><br />We also found that the reason why some kids face difficulties when interacting for the first time in big group sports is that they were not introduced early enough to sport. This might lead to problems later in their life, like difficulties in relationships with others or in participating in physical activities.</p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageFour.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p--small">While some argue that it&rsquo;s never too early to get kids active and involved in team sports, most experts believe that the focus should be on general movement and play, not learning specific sports skills.<strong> What&rsquo;s important is that kids develop self-body awareness and learn to interact smart.</strong></p>
                <h3>Concept development</h3>
                <p className="project__article__p--small">As we realised how beneficial can be the use of music to facilitate interaction between people, we came up with a range of ideas that would rely on melodies and sounds to help children internalize basic motor skills while playing with others. <br /><br />Initially, <strong>we wondered &lsquo;what if a kid could make music by jumping around?&rsquo;</strong> and we started to play with the idea to develope it so that it&rsquo;d meet our objectives.<br />We discovered psychomotricity and &lsquo;giocodanza&rsquo;, two disciplines that help children develop self-awareness and we got in touch with some instructors to learn more about their activities and explore some ideas together.<br /><br />Over the following few weeks, with their help and through a series of research and ideation activities, we refined the concept and got ready to prototype it.</p>
            </div>
        </div>
        
        <Img  className="image-s" fluid={props.data.imageFive.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h4>The concept</h4>
                <p className="project__article__p--small">Gimble is a course dedicated to children between 2 and 6 years of age. <br />During each lesson, the child is brought to do a range of activities within an imaginary context. S/He is the characer of an engaging story and the teacher becomes the guide and helper.<br /><br /><strong>Kids are eased into each fictional environment with the help of background sounds. For example, might the theme be &lsquo;a pirate adventure&rsquo;, speakers would play adventurous melodies, parrots chirps, sounds of the sea, and so on.</strong><br /><br />During the lesson, every child has sensors anchored to wrists and ankles to track their body in the three axes. Datas are then interpreted by a software and translated into sounds associated to specific movements. Onomatopeic sounds are closest to the child, and easier to distinguish. Let&rsquo;s take the pirates environment: a jump over an obstacle is underlined by an adventurous explosion</p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageSix.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p--small">Following the theories of psychomotricity, objects in use during lessons are choosen for their non strong meaning. <br />With the help of sounds and music, kids can transform them in their imagination and give them a different meaning according to each lesson&rsquo;s theme. <br /><br /><strong>In a &ldquo;pirates&rdquo; themed lesson, every time a child jumps inside a rope displayed as a circle, Gimble produces a sound of water, transforming the rope into a puddler; a ground line becomes the bridge of the boat, a sheets tunnel becomes the undergrowth of a forest.</strong><br /><br />From a technological perspective, we ensured what we were proposing would&rsquo;ve been feasible. <br />We discovered some relatively inexpensive Arduino prototypes that used sensors like gyroscopes to detect positioning and movement in the space. To start with, we estimated the costs of producing those devices by oursleves, but as we looked for any already existing solution, we found <em>Notch</em> - a company producing <strong>exactly the kind of devices we were after.</strong></p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageSeven.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h3>The business logic</h3>
                <p className="project__article__p--small">As we moved into designing a business logic, we explored a range of options but we eventually focused on training and licensing childhood professionals instead of providing the course ourselves or selling individual products.<br />Inspired by business models like the one Zumba relies on, we considered the areas in which the course could scale to and envisioned a system of additional services, upgrades and even activities for entirely different audiences.<br /><br /><strong>Mapping the key elements of our ideas on a business model canvas helped understanding the full business logic</strong> and estimating logistic costs associated to providing training courses. Looking at the average price asked by potential competitors, we established a starting licensing price.<br /><br />For the supply and development of the product we thought estabilishing a partnership with Notch would&rsquo;ve been the most cost-effective way forward. Notch is a company that produces wearable sensors designed to be attached to the extremities of the body to track and capture specific body movements. We assumed the partnership would be of their interest as, at the time, the company was about to release an API to open it&rsquo;s products up to third party developers&rsquo; ideas. <br /><br />When it came to designing activities and exercises, <strong>we thought we&rsquo;d rely on the expertise of those psychomotriciants who helped us defining the idea</strong> in the first place and that showed interest in extending the partnership further.</p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageEight.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <h3>Prototyping phase</h3>
                <p className="project__article__p--small">To bring the idea to life and learn what would people actually think about it, we involved psychomotricy teachers, gyms instructor, kids and their parents to prototype Gimble.<br /><br />Some of the questions we wanted to explore included:<br /><em>&gt; &ldquo;How would kids actually react to our idea? Would they get actually excited about producing sounds by moving around?&rdquo;</em><br /><em>&gt; &ldquo;Would parents think Gimble&rsquo;s value proposition differs from the options already on the market? How much would they be willing to pay for the course?&rdquo;</em><br /><em>&gt; &ldquo;Looking at the theories of Psychomotricity, would the concept be valid? Would the product find any further application in the discipline?</em><br /><em>&gt; &ldquo;Would any gym be interested in partnering up to offer a course like Gimble? &rdquo;</em><br /><br />The activity took place in a nonprofit association for mums based in Milan. As the coordinators showed interest in testing Gimble, we organised an event and promoted it on the association&rsquo;s social channels and collected a number of subscriptions.</p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageNine.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p--small">The evening of the event, we welcomed a small number of kids and their mums and introduced them to the activities.<br /><br />We prototyped a fictional lesson from Gimble course: we performed an adventure story, which suggested a path of exercises for the kids - developed with the help of psychomotricity instructors.<br /><br />To simulate our main device&rsquo;s features, we initially thought we&rsquo;d rely on smartphone&rsquo;s gyroscope sensors to produce music, <strong>but as that could distract kids and be heavy to carry around, we decided to opt for a simpler option instead.</strong> We used a sound sampler to imitate Gimble sensors behaviour, and every time a kid performed a correct movement, we played a specific sound. <br /><br />At the end of the story - and activities, we sat down with the participants, had a snack together and asked them a few simple questions to hear about their experience. We eventually interviewed their parents to gather feedback and understand <strong>whether they&rsquo;d consider a full-lenght course for their children.</strong></p>
            </div>
        </div>

        <Img  className="image-s" fluid={props.data.imageTen.childImageSharp.fluid} />
        
        <div className="project__article__page">
            <div className="project__article__wrapper">
                <p className="project__article__p--small">Overall, the prototype proved to work well. The kids who took part in the lesson loved it, and their parents were really keen to receiving updates on any further development. <strong>We learned a lot about how different kids behave and would respond to activities like the one we proposed and got to understand more about what and where would mums be keen to invest for their children.</strong><br />As towards the end of the course our team validated the concept idea with success, we had fun exploring other themed activities: how about using sounds to transform an inflatable ballon into an adventurous &ldquo;Star Wars&rdquo; lightsaber? Or, perhaps, into a gracious fairy&rsquo;s magic wand?</p>
                <Buttonback></Buttonback>
            </div>
        </div>
        

    </Layout>
)

export const query = graphql`
query {
    imageCover: file(relativePath: {eq: "gimble-cover.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      } 
    } 
    imageOne: file(relativePath: {eq: "gimble-1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }    
      }  
    }
    imageTwo: file(relativePath: {eq: "gimble-2.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
        }      
      }
    }
    imageThree: file(relativePath: {eq: "gimble-3.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFour: file(relativePath: {eq: "gimble-4.png"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageFive: file(relativePath: {eq: "gimble-5.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
    imageSix: file(relativePath: {eq: "gimble-6.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
    }      
  }
}
imageSeven: file(relativePath: {eq: "gimble-7.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
    }      
  }
}
imageEight: file(relativePath: {eq: "gimble-8.png"}) {
    childImageSharp {
    fluid {
        ...GatsbyImageSharpFluid
    }      
  }
}
imageNine: file(relativePath: {eq: "gimble-9.png"}) {
  childImageSharp {
  fluid {
      ...GatsbyImageSharpFluid
  }      
}
}
imageTen: file(relativePath: {eq: "gimble-10.jpg"}) {
  childImageSharp {
  fluid {
      ...GatsbyImageSharpFluid
  }      
}
}
  }
  `