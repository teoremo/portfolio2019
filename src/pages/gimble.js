import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback"

export default props => (
  <>
    <SEO
      title="Matteo Remondini | Portfolio | Gimble"
      keywords={[
        `service design`,
        `design thinking`,
        `portfolio`,
        "design",
        "product-service system",
        "politecnico di Milano",
      ]}
    />
    <Layout>
      <div className="background">
        <svg
          className="background-svg"
          width="2000"
          height="14000"
          viewBox="0 0 2000 14000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="url(#paint0_linear)">
            <animate
              repeatCount="indefinite"
              fill="remove"
              attributeName="d"
              dur="29s"
              values="M 2042.7 14307.4 C 1633.21 13697.6 1465.55 13138.2 1429.08 12612.1 C 1410.835 12348.95 1425.4 12094.025 1459.045 11845.1 C 1492.69 11596.175 1545.415 11353.25 1603.49 11114.1 C 1719.505 10636.35 1857.168 10173.34 1905.259 9708.825 C 1953.35 9244.31 1911.87 8778.29 1669.6 8294.52 L 1651.72 8303.48 C 1891.97 8783.21 1933.25 9245.065 1885.369 9706.8 C 1837.487 10168.535 1700.445 10630.15 1584.05 11109.4 C 1525.92 11348.75 1473.013 11592.4 1439.226 11842.4 C 1405.44 12092.4 1390.775 12348.75 1409.13 12613.5 C 1445.85 13143.2 1614.71 13705.9 2026.09 14318.6 L 2042.7 14307.4 Z M 1669.6 8294.52 L 1669.6 8294.52 L 1651.72 8303.48 C 1169.55 7340.67 524.277 6232.97 201.636 4882.38 C -121.135 3531.26 -121.114 1937.09 685.974 0.154 L 704.436 7.846 C -100.967 1940.74 -100.735 3530.57 221.088 4877.74 C 543.04 6225.44 1186.74 7330.33 1669.6 8294.52;
              
              M 2014.55 14303.1 C 1059.46 13815.6 594.036 13323 415.44 12829.6 C 236.863 12336.2 344.138 11839.6 540.464 11341.5 C 638.619 11092.6 758.816 10843.7 876.331 10595 C 993.773 10346.5 1108.51 10098.2 1195.32 9850.75 C 1368.96 9355.86 1431.4 8863.17 1179.59 8377.89 L 1161.84 8387.11 C 1409.99 8865.33 1349.27 9351.58 1176.45 9844.13 C 1090.02 10090.4 975.707 10337.9 858.249 10586.5 C 740.864 10834.9 620.315 11084.4 521.858 11334.2 C 324.959 11833.7 215.541 12336.1 396.634 12836.4 C 577.708 13336.7 1048.31 13832.4 2005.45 14320.9 L 2014.55 14303.1 Z M 1179.59 8377.89 L 1179.59 8377.89 L 1161.84 8387.11 C 661.514 7422.91 226.987 6327.86 66.244 4972.8 C -94.498 3617.76 18.601 2003.26 612.806 0.156 L 631.98 5.844 C 38.431 2006.74 -74.272 3618.49 86.104 4970.45 C 246.479 6322.39 679.989 7415.09 1179.59 8377.89;

              M 2042.7 14307.4 C 1633.21 13697.6 1465.55 13138.2 1429.08 12612.1 C 1410.835 12348.95 1425.4 12094.025 1459.045 11845.1 C 1492.69 11596.175 1545.415 11353.25 1603.49 11114.1 C 1719.505 10636.35 1857.168 10173.34 1905.259 9708.825 C 1953.35 9244.31 1911.87 8778.29 1669.6 8294.52 L 1651.72 8303.48 C 1891.97 8783.21 1933.25 9245.065 1885.369 9706.8 C 1837.487 10168.535 1700.445 10630.15 1584.05 11109.4 C 1525.92 11348.75 1473.013 11592.4 1439.226 11842.4 C 1405.44 12092.4 1390.775 12348.75 1409.13 12613.5 C 1445.85 13143.2 1614.71 13705.9 2026.09 14318.6 L 2042.7 14307.4 Z M 1669.6 8294.52 L 1669.6 8294.52 L 1651.72 8303.48 C 1169.55 7340.67 524.277 6232.97 201.636 4882.38 C -121.135 3531.26 -121.114 1937.09 685.974 0.154 L 704.436 7.846 C -100.967 1940.74 -100.735 3530.57 221.088 4877.74 C 543.04 6225.44 1186.74 7330.33 1669.6 8294.52"
              keyTimes="0; 0.6; 1"
              keySplines="1 0 0 1;
                1 0 0 1;
                1 0 0 1;"
            />
          </path>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="234.655"
              y1="14684"
              x2="2998.17"
              y2="1677.68"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.456353" stop-color="#C0C23D" />
              <stop offset="0.970166" stop-color="#17C792" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Img
        className="project__hero__img"
        fluid={props.data.imageCover.childImageSharp.fluid}
      />

      <Projectintro
        h1="Gimble: introducing kids to team sports"
        p={
          <p>
            How do we help shy kids enjoy team sports? <br />
            Gimble{" "}
            <strong>
              introduces kids to sport using motion sensors and music
            </strong>{" "}
            as means to support the physical activities and facilitate the
            interaction among them.
            <br />
            <br />
            My team and I carried out this project at Politecnico di Milano, in
            partnership with IDEO and Stanford University as part of my MSc in
            Product-Service System Design
          </p>
        }
        yearlocation="2015 - Milano, Italy"
        category="Service Design, Business Design, Industrial Design"
        team="Service Designers x5"
        logo={require("../images/gimble-logo.png")}
      />

      <Img
        className="image-m"
        fluid={props.data.imageOne.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h2 className="project__article__h2">What's Gimble</h2>
          <p className="project__article__p">
            We were tasked with finding an unmet need in the sports industry and
            decided to investigate why many kids don&rsquo;t enjoy practicing
            sports.
            <br />
            We began by carrying out out desk research and consulted with
            experts to understand the problem and find a product opportunity.
            <br />
            <br />
            <strong>
              Our research showed that shyness is a common factor among kids who
              are deemed to be&ldquo;lazy&rdquo;.
            </strong>
            <br />
            The period of most rapid development of motor behaviors and
            relational skills is between 2 and 6 years of age so we decided to
            target this group with a product that would break down shyness
            barriers and encourage physical activity during this important
            development phase. <br />
            <br />
            By conducting additional research we found out that music is used by
            many disciplines as a great tool of cohesion, to form ties and
            improve the quality of interactions between people. <br />
            Looking at how might we use music to help young kids get into team
            sports, we came up with a range of concepts and we focused on one:
            Gimble.
          </p>
        </div>
      </div>

      <Img
        className="image-l"
        fluid={props.data.imageTwo.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p">
            Gimble is an educational course that introduces kids to sports using
            motion sensors and music as playful ways to support physical
            activities and encourage the interaction within others.
            <br />
            <br />
            For each themed lesson, kids gestures are highlighted by sounds,
            helping them to perform designed activities. For example,{" "}
            <strong>
              when they&rsquo;d jump at the same time, the movement would be
              indicated by a cheering &ldquo;boooing&rdquo;.
            </strong>
            <br />
            <br />
            We designed a prototype and tested it with kids and their family in
            a group activity. The concept received the interests of Italian
            Psychomotricity Association teachers for exploring potential further
            developments.
          </p>
          <Buttonback />
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageThree.childImageSharp.fluid}
      />

      <div className="gimble__quote__div">
        <p className="gimble__quote">
          <i>
            &ldquo;The feedback may be very useful for the development of
            regular motor activities - walking, running or jumping.
            <br />
            One of the problems of children is the difficulty in maintaining a
            rhythm. <br />
            Sound feebacks will make it easier for the child.&rdquo;
          </i>
        </p>
        <p className="gimble__quote__caption">
          <i>Anne Marie Aline Wille, Psychomotrician and musician</i>
        </p>
      </div>

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h2 className="project__article__h2">The full story</h2>
          <h3>Exploratory research</h3>
          <p className="project__article__p--small">
            The final course of the MSc in Product Service System Design aimed
            at guiding students through the entire process of developing a
            commercially viable innovative idea to solve an existing problem in
            a defined sector.
            <br />
            Our team was tasked to focus on young people in the sport industry
            and, after getting inspired by successfull examples, we started to
            conduct design research.{" "}
            <strong>
              By carrying out extensive desk research and asking to parents with
              young kids what problems they were experiencing, we found out that
              for many children, engaging in team sports is very challenging.
            </strong>
            <br />
            <br />
            Between the two and four years of age, children go through a phase
            of strangers&rsquo; anxiety as they become afraid of people they
            don&rsquo;t know. They experience an abrupt jump from being alone to
            be in big groups.{" "}
            <strong>
              It&rsquo;s estimated that between 20% and 48% of children have shy
              personalities.
            </strong>
            <br />
            <br />
            We also found that the reason why some kids face difficulties when
            interacting for the first time in big group sports is that they were
            not introduced early enough to sport. This might lead to problems
            later in their life, like difficulties in relationships with others
            or in participating in physical activities.
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageFour.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p--small">
            While some argue that it&rsquo;s never too early to get kids active
            and involved in team sports, most experts believe that the focus
            should be on general movement and play, not learning specific sports
            skills.
            <strong>
              {" "}
              What&rsquo;s important is that kids develop self-body awareness
              and learn to interact smart.
            </strong>
          </p>
          <h3>Concept development</h3>
          <p className="project__article__p--small">
            As we realised how beneficial can be the use of music to facilitate
            interaction between people, we came up with a range of ideas that
            would rely on melodies and sounds to help children internalize basic
            motor skills while playing with others. <br />
            <br />
            Initially,{" "}
            <strong>
              we wondered &lsquo;what if a kid could make music by jumping
              around?&rsquo;
            </strong>{" "}
            and we started to play with the idea to develope it so that
            it&rsquo;d meet our objectives.
            <br />
            We discovered psychomotricity and &lsquo;giocodanza&rsquo;, two
            disciplines that help children develop self-awareness and we got in
            touch with some instructors to learn more about their activities and
            explore some ideas together.
            <br />
            <br />
            Over the following few weeks, with their help and through a series
            of research and ideation activities, we refined the concept and got
            ready to prototype it.
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageFive.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h4>The concept</h4>
          <p className="project__article__p--small">
            Gimble is a course dedicated to children between 2 and 6 years of
            age. <br />
            During each lesson, the child is brought to do a range of activities
            within an imaginary context. S/He is the characer of an engaging
            story and the teacher becomes the guide and helper.
            <br />
            <br />
            <strong>
              Kids are eased into each fictional environment with the help of
              background sounds. For example, might the theme be &lsquo;a pirate
              adventure&rsquo;, speakers would play adventurous melodies,
              parrots chirps, sounds of the sea, and so on.
            </strong>
            <br />
            <br />
            During the lesson, every child has sensors anchored to wrists and
            ankles to track their body in the three axes. Datas are then
            interpreted by a software and translated into sounds associated to
            specific movements. Onomatopeic sounds are closest to the child, and
            easier to distinguish. Let&rsquo;s take the pirates environment: a
            jump over an obstacle is underlined by an adventurous explosion
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageSix.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p--small">
            Following the theories of psychomotricity, objects in use during
            lessons are choosen for their non strong meaning. <br />
            With the help of sounds and music, kids can transform them in their
            imagination and give them a different meaning according to each
            lesson&rsquo;s theme. <br />
            <br />
            <strong>
              In a &ldquo;pirates&rdquo; themed lesson, every time a child jumps
              inside a rope displayed as a circle, Gimble produces a sound of
              water, transforming the rope into a puddler; a ground line becomes
              the bridge of the boat, a sheets tunnel becomes the undergrowth of
              a forest.
            </strong>
            <br />
            <br />
            From a technological perspective, we ensured what we were proposing
            would&rsquo;ve been feasible. <br />
            We discovered some relatively inexpensive Arduino prototypes that
            used sensors like gyroscopes to detect positioning and movement in
            the space. To start with, we estimated the costs of producing those
            devices by oursleves, but as we looked for any already existing
            solution, we found <em>Notch</em> - a company producing{" "}
            <strong>exactly the kind of devices we were after.</strong>
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageSeven.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h3>The business logic</h3>
          <p className="project__article__p--small">
            As we moved into designing a business logic, we explored a range of
            options but we eventually focused on training and licensing
            childhood professionals instead of providing the course ourselves or
            selling individual products.
            <br />
            Inspired by business models like the one Zumba relies on, we
            considered the areas in which the course could scale to and
            envisioned a system of additional services, upgrades and even
            activities for entirely different audiences.
            <br />
            <br />
            <strong>
              Mapping the key elements of our ideas on a business model canvas
              helped understanding the full business logic
            </strong>{" "}
            and estimating logistic costs associated to providing training
            courses. Looking at the average price asked by potential
            competitors, we established a starting licensing price.
            <br />
            <br />
            For the supply and development of the product we thought
            estabilishing a partnership with Notch would&rsquo;ve been the most
            cost-effective way forward. Notch is a company that produces
            wearable sensors designed to be attached to the extremities of the
            body to track and capture specific body movements. We assumed the
            partnership would be of their interest as, at the time, the company
            was about to release an API to open it&rsquo;s products up to third
            party developers&rsquo; ideas. <br />
            <br />
            When it came to designing activities and exercises,{" "}
            <strong>
              we thought we&rsquo;d rely on the expertise of those
              psychomotriciants who helped us defining the idea
            </strong>{" "}
            in the first place and that showed interest in extending the
            partnership further.
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageEight.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h3>Prototyping phase</h3>
          <p className="project__article__p--small">
            To bring the idea to life and learn what would people actually think
            about it, we involved psychomotricy teachers, gyms instructor, kids
            and their parents to prototype Gimble.
            <br />
            <br />
            Some of the questions we wanted to explore included:
            <br />
            <em>
              &gt; &ldquo;How would kids actually react to our idea? Would they
              get actually excited about producing sounds by moving
              around?&rdquo;
            </em>
            <br />
            <em>
              &gt; &ldquo;Would parents think Gimble&rsquo;s value proposition
              differs from the options already on the market? How much would
              they be willing to pay for the course?&rdquo;
            </em>
            <br />
            <em>
              &gt; &ldquo;Looking at the theories of Psychomotricity, would the
              concept be valid? Would the product find any further application
              in the discipline?
            </em>
            <br />
            <em>
              &gt; &ldquo;Would any gym be interested in partnering up to offer
              a course like Gimble? &rdquo;
            </em>
            <br />
            <br />
            The activity took place in a nonprofit association for mums based in
            Milan. As the coordinators showed interest in testing Gimble, we
            organised an event and promoted it on the association&rsquo;s social
            channels and collected a number of subscriptions.
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageNine.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p--small">
            The evening of the event, we welcomed a small number of kids and
            their mums and introduced them to the activities.
            <br />
            <br />
            We prototyped a fictional lesson from Gimble course: we performed an
            adventure story, which suggested a path of exercises for the kids -
            developed with the help of psychomotricity instructors.
            <br />
            <br />
            To simulate our main device&rsquo;s features, we initially thought
            we&rsquo;d rely on smartphone&rsquo;s gyroscope sensors to produce
            music,{" "}
            <strong>
              but as that could distract kids and be heavy to carry around, we
              decided to opt for a simpler option instead.
            </strong>{" "}
            We used a sound sampler to imitate Gimble sensors behaviour, and
            every time a kid performed a correct movement, we played a specific
            sound. <br />
            <br />
            At the end of the story - and activities, we sat down with the
            participants, had a snack together and asked them a few simple
            questions to hear about their experience. We eventually interviewed
            their parents to gather feedback and understand{" "}
            <strong>
              whether they&rsquo;d consider a full-lenght course for their
              children.
            </strong>
          </p>
        </div>
      </div>

      <Img
        className="image-s"
        fluid={props.data.imageTen.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p--small">
            Overall, the prototype proved to work well. The kids who took part
            in the lesson loved it, and their parents were really keen to
            receiving updates on any further development.{" "}
            <strong>
              We learned a lot about how different kids behave and would respond
              to activities like the one we proposed and got to understand more
              about what and where would mums be keen to invest for their
              children.
            </strong>
            <br />
            As towards the end of the course our team validated the concept idea
            with success, we had fun exploring other themed activities: how
            about using sounds to transform an inflatable ballon into an
            adventurous &ldquo;Star Wars&rdquo; lightsaber? Or, perhaps, into a
            gracious fairy&rsquo;s magic wand?
          </p>
          <Buttonback />
        </div>
      </div>
    </Layout>
  </>
)

export const query = graphql`
  query {
    imageCover: file(relativePath: { eq: "gimble-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "gimble-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "gimble-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "gimble-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "gimble-4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "gimble-5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "gimble-6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "gimble-7.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "gimble-8.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "gimble-9.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTen: file(relativePath: { eq: "gimble-10.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
