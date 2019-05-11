import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback"

export default props => (
  <>
    <SEO title="Tile of this page" />
    <Layout>
      <div className="background">
        <svg
          className="background-svg"
          width="3428"
          height="16157"
          viewBox="0 0 3428 16157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f)">
            <path
              d="M521.231 9803.12L511.649 9800.25L511.649 9800.25L521.231 9803.12ZM1499.21 9435.21L1509.17 9434.31L1499.21 9435.21ZM884.765 10249.9L876.085 10254.9L876.085 10254.9L884.765 10249.9ZM115.998 6877L125.988 6876.54L125.988 6876.54L115.998 6877ZM3044.5 4036L3050.49 4027.99L3050.49 4027.99L3044.5 4036ZM676.5 6788.99L667.182 6785.37L667.182 6785.37L676.5 6788.99ZM2326 7930.5L2320.82 7921.94L2320.82 7921.94L2326 7930.5ZM309 2351L299.156 2349.24L299.156 2349.24L309 2351ZM618.738 16056.2C631.765 16040.8 644.068 16015.7 655.883 15983C667.79 15950 679.525 15908.4 691.029 15859.1C714.042 15760.6 736.297 15630.8 757.139 15477.7C798.828 15171.5 834.959 14771 860.139 14337.9C910.489 13471.7 917.11 12474 836.526 11837.4L816.684 11839.9C897.031 12474.7 890.503 13470.9 840.173 14336.7C815.012 14769.5 778.92 15169.5 737.321 15475C716.519 15627.9 694.364 15756.9 671.553 15854.6C660.146 15903.4 648.616 15944.3 637.072 15976.2C625.438 16008.4 614.107 16030.7 603.484 16043.2L618.738 16056.2ZM836.526 11837.4C755.91 11200.5 620.946 10885.6 535.673 10633.4C493.102 10507.5 463.095 10397.6 458.017 10271C452.939 10144.4 472.775 10000.3 530.813 9805.98L511.649 9800.25C453.196 9995.93 432.841 10142.3 438.033 10271.8C443.225 10401.3 473.949 10513.3 516.727 10639.8C602.153 10892.5 736.368 11205.4 816.684 11839.9L836.526 11837.4ZM530.813 9805.98C551.949 9735.22 576.59 9666.21 603.986 9599.95L585.503 9592.31C557.853 9659.18 532.984 9728.84 511.649 9800.25L530.813 9805.98ZM603.986 9599.95C672.298 9434.73 757.67 9286.81 848.4 9171.79C939.296 9056.56 1034.87 8975.22 1123.3 8941.8C1167.36 8925.15 1209.28 8920.53 1247.92 8929.1C1286.48 8937.66 1322.64 8959.55 1354.98 8997.41C1420.04 9073.56 1469.22 9213.84 1489.25 9436.11L1509.17 9434.31C1489.03 9210.83 1439.37 9065.39 1370.19 8984.42C1335.42 8943.72 1295.61 8919.2 1252.25 8909.58C1208.98 8899.98 1163.05 8905.4 1116.23 8923.1C1022.89 8958.37 924.563 9042.94 832.697 9159.4C740.665 9276.08 654.412 9425.65 585.503 9592.31L603.986 9599.95ZM1489.25 9436.11C1511.29 9680.59 1499.92 9881.04 1466.71 10037.2C1433.47 10193.4 1378.5 10304.5 1313.93 10371.2C1249.65 10437.6 1176.19 10459.7 1103.85 10439.6C1030.85 10419.4 956.719 10355.5 893.445 10244.9L876.085 10254.9C940.775 10367.9 1018.49 10436.7 1098.5 10458.9C1179.17 10481.3 1259.91 10455.7 1328.3 10385.1C1396.4 10314.8 1452.58 10199.7 1486.27 10041.3C1519.99 9882.81 1531.34 9680.29 1509.17 9434.31L1489.25 9436.11ZM893.445 10244.9C832.874 10139.1 722.89 9925.69 604.163 9592.77L585.325 9599.49C704.458 9933.55 814.942 10148 876.085 10254.9L893.445 10244.9ZM604.163 9592.77C406.309 9037.97 184.148 8151.12 125.988 6876.54L106.009 6877.45C164.257 8153.96 386.786 9042.77 585.325 9599.49L604.163 9592.77ZM125.988 6876.54C89.4745 6076.36 232.254 5251.53 533.416 4627.63L515.404 4618.93C212.516 5246.42 69.3768 6074.67 106.009 6877.45L125.988 6876.54ZM533.416 4627.63C769.912 4137.68 1103.38 3772.97 1523.05 3639.81C1942.29 3506.78 2450.42 3603.97 3038.51 4044L3050.49 4027.99C2459.18 3585.54 1944.39 3485.13 1517 3620.74C1090.03 3756.22 753.156 4126.39 515.404 4618.93L533.416 4627.63ZM3038.51 4044C3264.03 4212.75 3333.03 4371.74 3299.48 4526.01C3265.54 4682.03 3126.2 4837.13 2924.39 4995.83C2723.02 5154.2 2461.69 5314.51 2187.02 5481.61C1912.58 5648.56 1624.99 5822.21 1372.01 6006.9L1383.8 6023.05C1635.96 5838.96 1922.77 5665.78 2197.41 5498.69C2471.83 5331.75 2734.26 5170.81 2936.76 5011.55C3138.82 4852.64 3283.46 4693.75 3319.02 4530.26C3354.97 4365.02 3279 4198.97 3050.49 4027.99L3038.51 4044ZM1372.01 6006.9C1047.57 6243.77 778.347 6499.97 667.182 6785.37L685.818 6792.62C794.767 6512.92 1059.83 6259.57 1383.8 6023.05L1372.01 6006.9ZM667.182 6785.37C609.59 6933.22 607.806 7125.92 656.149 7319.58C704.525 7513.38 803.326 7709.12 948.148 7863.28C1093.04 8017.51 1284.14 8130.23 1516.77 8157.3C1749.39 8184.37 2022.47 8125.68 2331.17 7939.06L2320.82 7921.94C2015.03 8106.82 1746.36 8163.88 1519.08 8137.43C1291.83 8110.99 1104.89 8000.92 962.725 7849.59C820.484 7698.18 723.193 7505.58 675.553 7314.74C627.881 7123.76 630.16 6935.52 685.818 6792.62L667.182 6785.37ZM2331.17 7939.06C2497.5 7838.5 2573.39 7727.14 2577.72 7600.2C2582.01 7474.37 2515.75 7336.17 2405.58 7182.07C2295.21 7027.69 2139.36 6855.51 1961.8 6661.59C1784.09 6467.51 1584.38 6251.4 1385.65 6008.64L1370.17 6021.31C1569.33 6264.58 1769.44 6481.12 1947.05 6675.1C2124.81 6869.23 2279.78 7040.49 2389.31 7193.7C2499.04 7347.19 2561.78 7480.71 2557.73 7599.51C2553.71 7717.19 2483.92 7823.34 2320.82 7921.94L2331.17 7939.06ZM1385.65 6008.64C1067.21 5619.69 751.552 5162.67 533.691 4619.56L515.129 4627C734.021 5172.69 1051.02 5631.47 1370.17 6021.31L1385.65 6008.64ZM533.691 4619.56C280.982 3989.56 159.733 3243.41 318.844 2352.76L299.156 2349.24C139.344 3243.81 261.117 3993.76 515.129 4627L533.691 4619.56ZM318.844 2352.76C478.615 1458.42 776.462 879.119 1098.25 535.482C1420.13 191.754 1765.4 84.2098 2021.19 131.146C2149.09 154.613 2254.72 216.648 2324.67 307.184C2394.58 397.671 2429.36 517.273 2414.48 656.881C2384.67 936.437 2155.4 1296.87 1608.97 1659.16L1620.02 1675.83C2168.59 1312.12 2403.64 947.179 2434.36 659.001C2449.75 514.742 2413.84 389.888 2340.5 294.956C2267.19 200.072 2156.97 135.725 2024.8 111.474C1760.48 62.9733 1408.75 174.649 1083.65 521.812C758.476 869.066 459.385 1452.33 299.156 2349.24L318.844 2352.76Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0.388672"
              y="0.708008"
              width="3427.13"
              height="16155.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="321.296"
              y1="15355.7"
              x2="1642.74"
              y2="1891.91"
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
