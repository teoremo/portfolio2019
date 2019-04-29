import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Buttonback from "../components/buttonback"
import Commsprj from "../components/comms__prj"

export default props => (
  <>
    <SEO title="Tile of this page" />
    <Layout>
      <div className="background">
        <svg
          className="background-svg"
          width="1980"
          height="7406"
          viewBox="0 0 1980 7406"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f)">
            <path
              d="M-294.799 4213.5L-296.684 4223.32L-296.684 4223.32L-294.799 4213.5ZM3152.16 4099.08L3142.16 4099.02L3142.16 4099.02L3152.16 4099.08ZM235.499 6175L229.486 6182.99L229.486 6182.99L235.499 6175ZM-759.499 5191.5L-768.413 5196.03L-768.413 5196.03L-759.499 5191.5ZM-441.502 4404L-443.917 4413.7L-443.917 4413.7L-441.502 4404ZM1958.5 5895L1948.56 5893.89L1948.56 5893.89L1958.5 5895ZM141.01 -15.4593C20.5463 21.582 -49.1374 135.292 -74.079 289.675C-99.0474 444.225 -79.7726 641.949 -20.2658 852.382C98.7465 1273.24 379.628 1748.18 796.386 2035L807.724 2018.53C395.626 1734.91 117.022 1264.37 -1.02044 846.94C-60.0412 638.225 -78.6865 443.596 -54.335 292.865C-29.9568 141.969 36.9192 37.4716 146.888 3.65733L141.01 -15.4593ZM796.386 2035C1212.31 2321.24 1683.25 2444.41 1995.98 2547.23C2074.29 2572.98 2142.48 2597.37 2197.57 2622.67C2252.83 2648.05 2293.89 2673.89 2318.78 2702.09C2343.18 2729.72 2351.98 2759.45 2343.28 2794.37C2334.35 2830.21 2306.72 2872.6 2255.11 2923.84L2269.2 2938.03C2321.7 2885.91 2352.44 2840.36 2362.69 2799.2C2373.17 2757.12 2361.97 2720.79 2333.77 2688.85C2306.06 2657.46 2261.9 2630.21 2205.91 2604.49C2149.75 2578.7 2080.66 2554.02 2002.23 2528.23C1688 2424.92 1220.66 2302.71 807.724 2018.53L796.386 2035ZM2255.11 2923.84C2152.43 3025.75 1972.05 3127.33 1749.76 3215.33C1527.73 3303.21 1264.87 3377.16 998.115 3424.3C731.327 3471.43 460.997 3491.68 223.965 3472.38C-13.3281 3453.05 -215.909 3394.2 -348.54 3284.38L-361.296 3299.78C-224.034 3413.44 -16.5951 3472.85 222.342 3492.31C461.539 3511.79 733.648 3491.33 1001.59 3443.99C1269.57 3396.64 1533.74 3322.34 1757.12 3233.92C1980.23 3145.61 2163.63 3042.82 2269.2 2938.03L2255.11 2923.84ZM-348.54 3284.38C-485.504 3170.97 -606.89 3160.38 -697.644 3216.11C-787.235 3271.13 -843.149 3388.66 -855.011 3523.34C-878.8 3793.43 -726.278 4140.9 -296.684 4223.32L-292.915 4203.68C-710.71 4123.52 -858.14 3786.81 -835.088 3525.09C-823.53 3393.87 -769.325 3283.6 -687.178 3233.15C-606.195 3183.42 -494.226 3189.71 -361.296 3299.78L-348.54 3284.38ZM-296.684 4223.32C-227.595 4236.58 -121.679 4228.46 9.44985 4206.92C140.973 4185.32 299.222 4149.96 473.677 4107.83C822.868 4023.51 1237.04 3912.11 1634.54 3828.74C2032.18 3745.33 2411.53 3690.36 2690.74 3718.41C2830.34 3732.43 2943.65 3767.11 3021.69 3828.23C3099.21 3888.93 3142.92 3976.47 3142.16 4099.02L3162.16 4099.14C3162.95 3971.03 3116.89 3877.37 3034.03 3812.48C2951.69 3748.01 2834.02 3712.7 2692.74 3698.51C2410.17 3670.12 2028.14 3725.74 1630.43 3809.16C1232.58 3892.61 817.434 4004.25 468.983 4088.39C294.616 4130.49 136.963 4165.71 6.20819 4187.19C-124.941 4208.73 -227.679 4216.19 -292.915 4203.68L-296.684 4223.32ZM3142.16 4099.02C3140.65 4343.47 2995.18 4617.55 2766.81 4886.56C2538.71 5155.24 2229.15 5417.41 1902.25 5637.85L1913.43 5654.43C2241.41 5433.26 2552.48 5169.92 2782.06 4899.5C3011.36 4629.4 3160.61 4350.76 3162.16 4099.14L3142.16 4099.02ZM1902.25 5637.85C1568.4 5862.98 1216.97 6044.27 916.471 6144.53C766.199 6194.67 629.052 6224.41 513.425 6229.41C397.618 6234.42 304.702 6214.57 241.513 6167.01L229.486 6182.99C297.973 6234.53 396.34 6254.49 514.29 6249.39C632.42 6244.28 771.503 6213.98 922.8 6163.5C1225.44 6062.53 1578.5 5880.3 1913.43 5654.43L1902.25 5637.85ZM241.513 6167.01C-435.419 5657.56 -600.219 5482.74 -750.585 5186.97L-768.413 5196.03C-615.781 5496.26 -447.585 5673.44 229.486 6182.99L241.513 6167.01ZM-750.585 5186.97C-774.817 5139.3 -819.384 5053.59 -859.603 4954.96C-899.881 4856.17 -935.44 4745.25 -942.077 4647.25C-948.72 4549.16 -926.334 4466.71 -854.077 4420.46C-780.939 4373.64 -653.486 4361.56 -443.917 4413.7L-439.088 4394.3C-649.868 4341.85 -784.438 4352.13 -864.86 4403.61C-946.165 4455.66 -968.88 4547.47 -962.031 4648.6C-955.177 4749.83 -918.652 4863.11 -878.123 4962.51C-837.534 5062.05 -792.569 5148.52 -768.413 5196.03L-750.585 5186.97ZM-443.917 4413.7C-161.092 4484.07 350.853 4646.63 829.331 4865.36C1068.56 4974.73 1299.16 5098.01 1488.49 5230.69C1678.01 5363.5 1825.23 5505.06 1898.92 5650.66L1916.76 5641.63C1840.86 5491.65 1690.45 5347.79 1499.97 5214.31C1309.29 5080.69 1077.51 4956.83 837.646 4847.17C357.93 4627.87 -155.198 4464.93 -439.088 4394.3L-443.917 4413.7ZM1898.92 5650.66C1939.55 5730.94 1957.71 5812.19 1948.56 5893.89L1968.44 5896.11C1978.1 5809.82 1958.79 5724.66 1916.76 5641.63L1898.92 5650.66ZM1948.56 5893.89C1942.65 5946.7 1911.35 6020.44 1858.84 6108.83C1806.53 6196.9 1733.84 6298.43 1646.4 6406.56C1471.52 6622.81 1238.14 6864.85 992.095 7077.46C745.946 7290.16 487.696 7472.93 263.107 7571.17C150.793 7620.3 47.5656 7648 -41.1431 7648.17C-129.564 7648.34 -203.198 7621.22 -257.723 7560.89L-272.56 7574.3C-213.459 7639.69 -133.925 7668.35 -41.1042 7668.17C51.4286 7667.99 157.516 7639.19 271.122 7589.5C498.374 7490.09 758.384 7305.85 1005.17 7092.59C1252.07 6879.24 1486.29 6636.36 1661.95 6419.14C1749.78 6310.54 1823.09 6208.19 1876.04 6119.04C1928.8 6030.22 1962.03 5953.4 1968.44 5896.11L1948.56 5893.89Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="-1063.18"
              y="-115.459"
              width="4325.35"
              height="7883.63"
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
              x1="1159.56"
              y1="266.816"
              x2="1500.12"
              y2="6886.81"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF6969" />
              <stop offset="0.453039" stop-color="#C0C23D" />
              <stop offset="0.723757" stop-color="#17C792" />
              <stop offset="1" stop-color="#2E00E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
           
      <Img className="project__hero__img" fluid={props.data.imageCover.childImageSharp.fluid}
           />

      <div className="project__description-page">
        <div className="project__description__wrapper">
          <h1 className="project__description__h1">
            Communication design stuff
          </h1>
          <p className="project__description__intro-para">
            Before moving into Service Design, I was involved in a number of
            projects ranging from branding to editorial design, from
            screenprinting to illustration, from UI design to animation.
          </p>
        </div>
      </div>

      <div className="harika__grid">
        <Img
          className="harika__grid__image-1"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <Img
          className="harika__grid__image-2"
          fluid={props.data.imageTwo.childImageSharp.fluid}
        />
        <Img
          className="harika__grid__image-3"
          fluid={props.data.imageThree.childImageSharp.fluid}
        />
      </div>

      <Commsprj
        yearlocation="2014 - Milano, Italy"
        category="Art direction, Branding, UI Design, 3D animation"
        team="Service Designer, Product Owner, Lead UX Designer, Developer"
        h2="Harika"
        p={
          <p>
            Harika is a mobile app which guides customers to find everything
            about hairdressing &ndash; stylists, salons, haircuts and offered
            services &ndash; in their local area. I was responsible for the
            brand&rsquo;s identity and the product&rsquo;s user experience +
            user interface. <br />
            <br />
            Harika featured as one of the "Best new apps" in the App Store.
          </p>
        }
      />

      <div className="saporita__grid">
        <Img
          className="saporita__grid__image-1"
          fluid={props.data.imageFour.childImageSharp.fluid}
        />
        <Img
          className="saporita__grid__image-2"
          fluid={props.data.imageFive.childImageSharp.fluid}
        />
        <Img
          className="saporita__grid__image-3"
          fluid={props.data.imageSix.childImageSharp.fluid}
        />
      </div>

      <Commsprj
        yearlocation="2014 - Milano, Italy"
        category="Branding, Strategic Design"
        team="Communication Designer,  Chef, Quality & Food safety technician, Fine Dining consultant"
        h2="Saporita’"
        p={
          <p>
            In 2014, as part of a collaboration with the Michelin starred
            Milanese restaurant Innocenti Evasioni, I helped creating
            Saporit&agrave;.
            <br />
            <br />
            The project aimed at exploring business opportunities for
            Italian&rsquo;s food excellence in Asian markets. As part of the
            team, composed by fine-dining professionals, I devised the branding
            identity.
          </p>
        }
      />

      <div className="sacrem__grid">
        <Img
          className="sacrem__grid__image-1"
          fluid={props.data.imageSeven.childImageSharp.fluid}
        />
        <Img
          className="sacrem__grid__image-2"
          fluid={props.data.imageEight.childImageSharp.fluid}
        />
      </div>

      <Commsprj
        h2="Sacremstudio: screenprinting & graphic design."
        yearlocation="2012 - 2015 - Milano, Italy"
        category="Interaction Design, Visual Design, Screenprinting"
        team="Communication designers x 4"
        p={
          <p>
            Back in 2012 a good friend of mine built a screenprinter and started
            experimenting with prints on old t-shirts. Months later myself and a
            few other friends joined the project and founded Sacr&egrave;m, a
            graphic design and screenprinting studio.
            <br />
            <br />
            Now Sacr&egrave;m is fully operative. Services range from branding
            to videomaking, from screenprinting to interaction design.
          </p>
        }
      />

      <div className="sintesi__grid">
        <Img
          className="sintesi__grid__image-1"
          fluid={props.data.imageNine.childImageSharp.fluid}
        />
        <Img
          className="sintesi__grid__image-2"
          fluid={props.data.imageTen.childImageSharp.fluid}
        />
      </div>

      <Commsprj
        h2="A visual book: Il salto dell'acciuga"
        yearlocation="2014 - Milano, Italy"
        category="Editorial Design"
        team="Communication designer"
        p={
          <>
            <p>
              &ldquo;Il salto dell&rsquo;acciuga&rdquo; is a novel written by
              the Italian author Nico Orengo, based on the story of a
              traditional italian dish, the &ldquo;bagna cauda&rdquo; - a soup
              made of garlic and anchovies.
              <br />
              The dissertation focused on reinterpretating the book with a
              deeper sense of what the author wanted to communicate.
              <br />I made a postcard folder book, which underlines every
              self-ending paragraph of the novel and the romantic feeling of the
              book with experimentally illustrated postcards.
            </p>
            <Buttonback />
          </>
        }
      />
    </Layout>
  </>
)

export const query = graphql`
  query {
    imageCover: file(relativePath: { eq: "comm-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "harika-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "harika-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "harika-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "saporita-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "saporita-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "saporita-3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "sacrem-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "sacrem-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "sintesi-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTen: file(relativePath: { eq: "sintesi-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
