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
  <>
      <SEO title="Tile of this page"/>
      <Layout>        

  <div className="background">
  <svg className="background-svg" width="1980" height="5739" viewBox="0 0 1980 5739" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M886.894 3855.08L895.263 3860.55L895.263 3860.55L886.894 3855.08ZM2703.94 3197.07L2699.31 3205.94L2699.31 3205.94L2703.94 3197.07ZM1729.23 3781.03L1729.02 3771.04L1729.02 3771.04L1729.23 3781.03ZM-89.4992 2691L-99.2915 2693.03L-99.2915 2693.03L-89.4992 2691ZM2621 1255L2627.89 1247.75L2627.89 1247.75L2621 1255ZM3198.5 2048L3188.53 2047.28L3188.53 2047.28L3198.5 2048ZM2429 2711.5L2435.85 2704.22L2429 2711.5ZM-679.499 1416.69L-669.929 1419.6L-669.929 1419.6L-679.499 1416.69ZM2855.13 5638.88C2936.94 5593.28 2969.55 5500.09 2963.82 5385.47C2958.07 5270.68 2913.94 5131.94 2839.16 4990.44C2689.58 4707.43 2415.76 4410.44 2073.16 4268.86L2065.52 4287.35C2402.89 4426.76 2673.56 4719.93 2821.47 4999.78C2895.43 5139.7 2938.29 5275.55 2943.84 5386.47C2949.4 5497.55 2917.62 5581.16 2845.4 5621.41L2855.13 5638.88ZM2073.16 4268.86C1731.5 4127.68 1375.32 4111.6 1136.13 4085.93C1076.2 4079.5 1023.82 4072.5 980.71 4062.88C937.412 4053.21 904.543 4041.11 882.894 4025.11C861.841 4009.54 851.516 3990.45 852.377 3965.17C853.271 3938.93 866.249 3904.91 895.263 3860.55L878.525 3849.6C848.824 3895.01 833.469 3932.77 832.388 3964.48C831.276 3997.15 845.335 4022.21 871.006 4041.19C896.08 4059.73 932.273 4072.55 976.351 4082.4C1020.62 4092.28 1073.93 4099.37 1133.99 4105.82C1374.75 4131.65 1727.22 4147.55 2065.52 4287.35L2073.16 4268.86ZM895.263 3860.55C935.975 3798.31 1004.56 3730 1092.98 3660.95L1080.67 3645.19C991.443 3714.87 920.947 3784.74 878.525 3849.6L895.263 3860.55ZM1092.98 3660.95C1298.47 3500.49 1608.19 3338.26 1913.11 3240.52C2065.53 3191.66 2216.41 3159.03 2352.21 3150.68C2488.15 3142.33 2608.08 3158.36 2699.31 3205.94L2708.56 3188.2C2612.83 3138.28 2488.78 3122.25 2350.99 3130.72C2213.06 3139.2 2060.49 3172.27 1907 3221.47C1600.11 3319.84 1288.24 3483.11 1080.67 3645.19L1092.98 3660.95ZM2699.31 3205.94C2755.32 3235.14 2790.85 3265.26 2809.97 3295.04C2828.8 3324.39 2831.99 3353.82 2822.52 3383.34C2812.9 3413.35 2789.93 3444.2 2754.97 3474.93C2720.1 3505.59 2673.93 3535.58 2618.99 3564.02C2398.96 3677.92 2043.25 3764.41 1729.02 3771.04L1729.44 3791.03C2046.21 3784.35 2405.02 3697.31 2628.18 3581.79C2684.04 3552.87 2731.71 3522.01 2768.17 3489.96C2804.55 3457.97 2830.41 3424.24 2841.57 3389.45C2852.89 3354.16 2848.81 3318.54 2826.8 3284.24C2805.05 3250.36 2766.14 3218.23 2708.56 3188.2L2699.31 3205.94ZM1729.02 3771.04C1592.73 3773.91 1352.63 3730.92 1089.98 3643.58L1083.67 3662.56C1347.29 3750.22 1589.87 3793.98 1729.44 3791.03L1729.02 3771.04ZM1089.98 3643.58C840.569 3560.65 571.849 3438.08 353.539 3277.91C135.104 3117.65 -31.7455 2920.6 -79.7069 2688.97L-99.2915 2693.03C-49.9074 2931.52 121.347 3132.36 341.709 3294.04C562.196 3455.8 832.966 3579.2 1083.67 3662.56L1089.98 3643.58ZM-79.7069 2688.97C-103.438 2574.36 -57.0557 2449.55 41.571 2321.44C140.074 2193.49 289.569 2063.79 468.689 1940.13L457.326 1923.67C277.345 2047.92 125.994 2179 25.7234 2309.24C-74.424 2439.32 -124.744 2570.11 -99.2915 2693.03L-79.7069 2688.97ZM468.689 1940.13C830.547 1690.32 1311.34 1466.54 1730.46 1332.71C1940.03 1265.79 2133.76 1221.49 2289.23 1207.56C2366.97 1200.59 2434.78 1201.25 2490.05 1210.3C2545.46 1219.38 2587.26 1236.72 2614.11 1262.25L2627.89 1247.75C2596.95 1218.33 2550.65 1199.96 2493.29 1190.56C2435.79 1181.15 2366.16 1180.58 2287.44 1187.64C2129.98 1201.75 1934.71 1246.49 1724.38 1313.66C1303.68 1447.99 821.053 1672.57 457.326 1923.67L468.689 1940.13ZM2614.11 1262.25C2786.61 1426.28 2933.2 1587.65 3035.25 1726C3086.29 1795.19 3126.03 1858.4 3152.31 1913.15C3178.72 1968.16 3190.98 2013.48 3188.53 2047.28L3208.47 2048.72C3211.31 2009.65 3197.22 1960.48 3170.34 1904.49C3143.32 1848.22 3102.82 1783.9 3051.35 1714.13C2948.39 1574.56 2800.94 1412.3 2627.89 1247.75L2614.11 1262.25ZM3188.53 2047.28C3174.46 2240.9 3146.07 2403.68 3104.91 2532.64C3063.71 2661.75 3009.98 2756.16 2945.81 2813.98C2882.07 2871.43 2807.67 2893.14 2723.13 2876.49C2638.01 2859.74 2541.78 2803.9 2435.85 2704.22L2422.15 2718.78C2529.43 2819.74 2628.95 2878.34 2719.27 2896.12C2810.18 2914.01 2890.93 2890.36 2959.2 2828.84C3027.06 2767.69 3082.23 2669.52 3123.97 2538.73C3165.75 2407.79 3194.34 2243.35 3208.47 2048.72L3188.53 2047.28ZM2435.85 2704.22C2213 2494.51 1893.04 2339.36 1542.96 2216.52C1192.76 2093.64 811.425 2002.77 465.275 1922.16L460.739 1941.64C806.983 2022.27 1187.31 2112.92 1536.34 2235.39C1885.5 2357.91 2202.34 2511.94 2422.15 2718.78L2435.85 2704.22ZM465.275 1922.16C128.379 1843.71 -174.626 1775.09 -384.437 1696.18C-489.434 1656.69 -569.912 1615.03 -619.552 1569.09C-644.275 1546.21 -660.97 1522.6 -669.461 1498.06C-677.903 1473.66 -678.455 1447.72 -669.929 1419.6L-689.069 1413.79C-698.739 1445.69 -698.269 1475.96 -688.362 1504.6C-678.505 1533.09 -659.525 1559.34 -633.137 1583.77C-580.555 1632.44 -497.065 1675.19 -391.477 1714.9C-180.118 1794.39 124.523 1863.34 460.739 1941.64L465.275 1922.16ZM-669.929 1419.6C-571.497 1094.94 -329.645 928.874 -19.749 842.957C290.698 756.888 667.832 751.749 1034.22 748.347C1399.7 744.952 1754.99 743.319 2018.77 663.066C2150.9 622.866 2261.02 562.688 2338.08 471.881C2415.29 380.908 2458.5 260.163 2458.5 100.499L2438.5 100.499C2438.5 256.336 2396.43 372.221 2322.84 458.939C2249.1 545.823 2142.9 604.394 2012.95 643.932C1752.57 723.152 1400.68 724.943 1034.03 728.347C668.296 731.744 288.367 736.779 -25.0923 823.684C-339.103 910.741 -588 1080.45 -689.069 1413.79L-669.929 1419.6Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_f" x="-796.063" y="0.49939" width="4104.9" height="5738.38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="2365.5" y1="5243.5" x2="828.441" y2="911.634" gradientUnits="userSpaceOnUse">
<stop offset="0.0254142" stop-color="#1401E8"/>
<stop offset="0.981215" stop-color="#C30000"/>
</linearGradient>
</defs>
</svg>
</div>




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
    </>
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