import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Cardhomepage from "../components/homepage__card"

const IndexPage = props => (
  <>
    <SEO
      title="Tile of this page"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Layout>
      <div>
        <svg
          className="frontground-index"
          width="491"
          height="3778"
          viewBox="600 0 491 3778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M97.8011 833.745L88.8578 838.219L97.8011 833.745ZM291.5 1318.5L301.474 1317.78L291.5 1318.5ZM144.498 1236.86L138.522 1244.88L144.498 1236.86ZM399.932 -75.9438C378.618 -59.6465 338.945 -13.8054 294.234 49.4465C249.245 113.093 198.428 195.408 154.961 285.561C111.517 375.667 75.247 473.949 59.6356 569.46C44.031 664.93 48.9443 758.433 88.8578 838.219L106.744 829.271C69.364 754.549 64.1677 665.717 79.3737 572.687C94.5729 479.697 130.034 383.312 172.976 294.247C215.896 205.229 266.122 123.866 310.566 60.9909C355.289 -2.2787 393.441 -45.8038 412.08 -60.0562L399.932 -75.9438ZM88.8578 838.219C225.734 1111.83 270.212 1162.79 281.526 1319.22L301.474 1317.78C289.788 1156.21 242.266 1100.17 106.744 829.271L88.8578 838.219ZM281.526 1319.22C288.942 1421.75 214.017 1514.71 125.395 1552.15C81.3265 1570.77 34.9718 1575.13 -5.17378 1560.88C-45.0027 1546.74 -80.1737 1513.77 -101.37 1454.71L-120.194 1461.46C-97.2869 1525.3 -58.1707 1563.29 -11.8646 1579.73C34.1248 1596.06 85.7531 1590.61 133.179 1570.57C227.548 1530.7 309.66 1430.96 301.474 1317.78L281.526 1319.22ZM-101.37 1454.71C-144.595 1334.25 -116.055 1258 -64.3784 1223.59C-11.8001 1188.57 69.4112 1193.36 138.522 1244.88L150.475 1228.84C76.3801 1173.61 -14.1521 1166.11 -75.4643 1206.94C-137.678 1248.37 -165.176 1336.11 -120.194 1461.46L-101.37 1454.71ZM138.522 1244.88C184.439 1279.11 269.292 1331.4 342.063 1439.45C414.701 1547.31 475.62 1711.43 470.724 1969.16L490.72 1969.54C495.683 1708.28 433.89 1540 358.652 1428.28C283.548 1316.76 195.359 1262.3 150.475 1228.84L138.522 1244.88ZM470.724 1969.16C465.833 2226.67 374.757 2459.76 278.261 2592.19C254.174 2625.25 229.919 2651.8 206.808 2670.84C183.588 2689.98 162.142 2701.03 143.644 2704.14C125.671 2707.16 110.215 2702.78 97.3251 2690.11C83.9891 2676.99 72.6457 2654.22 65.5766 2619.11L45.9701 2623.05C53.4292 2660.1 65.9535 2687.3 83.3013 2704.37C101.095 2721.86 123.14 2727.87 146.959 2723.86C170.254 2719.95 194.893 2706.58 219.528 2686.28C244.272 2665.88 269.642 2637.98 294.425 2603.97C393.411 2468.12 485.753 2231.03 490.72 1969.54L470.724 1969.16ZM65.5766 2619.11C37.1293 2477.81 73.8708 2384.08 119.827 2314.6C143.036 2279.52 168.471 2250.77 189.965 2224.47C210.913 2198.84 229.081 2174.49 234.196 2149.76L214.611 2145.71C210.646 2164.87 195.931 2185.56 174.479 2211.81C153.571 2237.39 127.088 2267.38 103.146 2303.57C54.7983 2376.66 16.3048 2475.71 45.9701 2623.05L65.5766 2619.11ZM234.196 2149.76C239.663 2123.34 225.822 2092.72 204.196 2062.7C182.127 2032.06 150.042 1999.45 114.243 1968.16C42.6452 1905.59 -45.3803 1846.94 -102.275 1818.42L-111.237 1836.3C-56.057 1863.96 30.5775 1921.6 101.081 1983.22C136.332 2014.03 167.158 2045.5 187.968 2074.39C209.22 2103.89 218.225 2128.24 214.611 2145.71L234.196 2149.76ZM-102.275 1818.42C-106.303 1816.4 -111.196 1814.61 -116.19 1815.12C-118.917 1815.4 -121.69 1816.37 -124.104 1818.31C-126.475 1820.2 -127.968 1822.6 -128.877 1824.92C-130.573 1829.25 -130.583 1834.18 -130.136 1838.59C-129.664 1843.24 -128.532 1848.59 -126.925 1854.46C-120.56 1877.72 -105.341 1914.04 -84.3912 1959.86C-63.3451 2005.89 -36.1719 2062.23 -5.5689 2125.85C25.0534 2189.5 59.148 2260.5 94.1126 2335.99C164.055 2486.98 237.387 2655.72 293.222 2819.02C349.116 2982.5 387.185 3139.72 387.185 3267.89H407.185C407.185 3136.37 368.252 2976.65 312.146 2812.55C255.98 2648.28 182.313 2478.82 112.26 2327.58C77.2277 2251.95 43.0761 2180.83 12.4539 2117.18C-18.1876 2053.48 -45.2575 1997.35 -66.2023 1951.54C-87.2433 1905.52 -101.763 1870.64 -107.635 1849.18C-109.087 1843.87 -109.921 1839.7 -110.238 1836.57C-110.58 1833.19 -110.204 1832.09 -110.255 1832.22C-110.342 1832.44 -110.697 1833.19 -111.607 1833.92C-112.559 1834.68 -113.546 1834.96 -114.152 1835.02C-114.903 1835.1 -114.214 1834.8 -111.237 1836.3L-102.275 1818.42ZM387.185 3267.89C387.185 3340.24 359.479 3418.26 316.054 3490.73C272.68 3563.1 214.06 3629.19 153.298 3677.58C92.2426 3726.2 30.319 3755.93 -19.6631 3757.78C-44.3697 3758.69 -65.7918 3752.79 -83.0887 3739.39C-100.437 3725.95 -114.606 3704.2 -123.342 3671.66L-142.658 3676.85C-133.104 3712.44 -116.987 3738.43 -95.3388 3755.2C-73.639 3772.01 -47.3532 3778.81 -18.9256 3777.77C37.3607 3775.69 103.411 3742.87 165.757 3693.22C228.396 3643.34 288.605 3575.43 333.209 3501.01C377.763 3426.66 407.185 3345.06 407.185 3267.89H387.185Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="174.274"
              y1="-68"
              x2="174.274"
              y2="3368.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA7A7" />
              <stop offset="0.453039" stop-color="#C0C23D" />
              <stop
                offset="0.723757"
                stop-color="#17C792"
                stop-opacity="0.83"
              />
              <stop offset="1" stop-color="#2E00E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="homepage__hero-wrapper">
        <div className="homepage__hero-group">
          <h1 className="homepage__hero__h1">
            Matteo Remondini <br /> Service designer
          </h1>
          <div className="homepage__hero__p">
            <p>
              Passionate about complex problems, interested in human behaviour
              and intrigued by anything that is about change for the better.
            </p>
          </div>
          <div className="homepage__hero__h2">
            <h2>This is a selection of work I’ve done over the years</h2>
          </div>
        </div>
      </div>

      <div className="arrow-down">
        <img
          src={require("../images/arrow-down.svg")}
          alt="arrow pointing down"
        />
      </div>

      <div className="homepage__page">
        <Link to="/shelter/">
          <Cardhomepage
            year="2017 : 2019"
            location="London, UK"
            cardlogo={require("../images/shelterlogo.png")}
            title="Shelter"
            categories="Service strategy + projects"
            description="Helping Shelter become a Human Centred organisation, focusing on the housing advice services given to millions of people."
            arrow={require("../images/arrow-down.svg")}
          />
        </Link>

        <Link to="/">
          <Cardhomepage
            year="2016"
            location="London, UK"
            cardlogo={require("../images/sdt-logo.png")}
            title="Service Design Today"
            categories="Research"
            description={
              <p>
                A snapshot of what Service Design & Design Thinking are.<br/> Includes interviews with Livework, IDEO, Facebook, and
                more
              </p>
            }
            arrow={require("../images/arrow-ext-link.svg") }
          />
        </Link>

        <Link to="/flair/">
          <Cardhomepage
            year="2015"
            location="London, UK"
            cardlogo={require("../images/flair-logo.png")}
            title="Flair"
            categories="User research + Service Design"
            description="Would a “Uber for hairdressers” work in London? An innovative proposition for a funded venture active in the beauty sector."
            arrow={require("../images/arrow-down.svg")}
          />
        </Link>

        <Link to="/gimble/">
          <Cardhomepage
            year="2014"
            location="Milano, Italy"
            cardlogo={require("../images/logo-polimi.png")}
            title="Gimble: introducing kids to sports"
            categories="Product-Service System + Business Design"
            description={
              <p>
                How to help shy kids get into team sports?
                <br />
                Final project, part of Politecnico’s two-year MSc programme in
                Product-Service System Design
              </p>
            }
            arrow={require("../images/arrow-down.svg")}
          />
        </Link>

        <Link to="/commdesign/">
          <Cardhomepage
            year="2012 : 2014"
            location="Milano, Italy"
            cardlogo={require("../images/logo-appstore.png")}
            title="Other stuff"
            categories="Communication design projects"
            description="Including an award-winning app, editorial work, and a co-founded screenprint & graphic design studio in Milan, Italy."
            arrow={require("../images/arrow-down.svg")}
          />
        </Link>
      </div>

      <div className="homepage__page">
        <p className="bio">
          I’m a hybrid designer – which means my profile is adaptable to the
          needs of the team.
        </p>
        <Img
          className="avatar"
          fluid={props.data.imageAvatar.childImageSharp.fluid}
        />
        <a href="www.teoremo.com">
          <div className="homepage__download-cv">
          <p className="downloadtext">Download the resume</p>
          <img
            className="downloadicon"
            src={require("../images/downloadicon.svg")}
            alt="download icon"
          />
          </div>
        </a>
      </div>
    </Layout>
  </>
)

export default IndexPage

export const query = graphql`
query {
    imageAvatar: file(relativePath: {eq: "avatar.jpg"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }      
      }
    }
  }
  `
