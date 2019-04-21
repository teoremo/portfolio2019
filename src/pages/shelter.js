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
  <svg className="background-svg" width="3517" height="6661" viewBox="0 0 3517 6661" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M287.447 4351.5L294.171 4358.9L287.447 4351.5ZM615.447 2791.5L611.37 2800.63L615.447 2791.5ZM3240.95 1983.5L3249.89 1979.02L3240.95 1983.5ZM112.948 1416.2L103.206 1413.94L112.948 1416.2ZM2697.39 6558.41C2589.45 5570.95 2612.61 4901.58 2697.13 4448.6C2781.65 3995.6 2927.37 3759.8 3063.83 3638.34C3200.16 3517 3328.25 3508.87 3379.73 3513.26C3386.15 3513.8 3391.33 3514.54 3395.12 3515.26C3397.02 3515.62 3398.53 3515.96 3399.63 3516.26C3400.83 3516.58 3401.28 3516.77 3401.24 3516.75C3401.2 3516.73 3401.05 3516.67 3400.83 3516.54C3400.64 3516.43 3400.21 3516.18 3399.7 3515.75C3399.28 3515.4 3398.2 3514.46 3397.36 3512.83C3396.38 3510.94 3395.64 3507.86 3397.02 3504.54C3398.22 3501.65 3400.37 3500.26 3401.31 3499.74C3402.35 3499.18 3403.23 3498.95 3403.59 3498.87C3404.34 3498.69 3404.79 3498.7 3404.64 3498.71C3403.99 3498.72 3401.49 3498.54 3396.47 3497.62C3377.08 3494.06 3329.46 3481.26 3244.77 3446.26L3237.13 3464.74C3322.43 3499.99 3371.51 3513.37 3392.87 3517.29C3398.04 3518.24 3402.24 3518.76 3405.05 3518.7C3405.76 3518.69 3406.89 3518.63 3408.1 3518.35C3408.7 3518.21 3409.76 3517.92 3410.93 3517.28C3412.01 3516.69 3414.24 3515.21 3415.49 3512.23C3416.9 3508.82 3416.16 3505.64 3415.12 3503.64C3414.22 3501.9 3413.04 3500.83 3412.47 3500.36C3411.27 3499.37 3410.05 3498.79 3409.46 3498.52C3406.95 3497.39 3403.11 3496.42 3398.84 3495.61C3394.29 3494.75 3388.43 3493.93 3381.42 3493.33C3325.36 3488.55 3191.58 3497.86 3050.54 3623.4C2909.63 3748.81 2762.48 3989.33 2677.47 4444.93C2592.46 4900.54 2569.45 5572.05 2677.51 6560.59L2697.39 6558.41ZM3244.77 3446.26C3157.56 3410.22 3040.78 3402.53 2904.86 3415.2C2768.73 3427.9 2612.35 3461.13 2445.25 3507.9C2111.04 3601.45 1732.85 3749.48 1386.2 3897.12C1039.62 4044.74 723.872 4192.26 515.286 4284.56C410.639 4330.87 333.518 4363.02 292.545 4374.7C282.273 4377.62 274.963 4379.06 270.334 4379.3C267.961 4379.42 267.1 4379.17 267.137 4379.19C267.416 4379.28 269.453 4380.16 270.313 4382.78C270.981 4384.82 270.208 4385.87 270.681 4384.75C271.077 4383.81 272.029 4382.14 273.969 4379.62C277.819 4374.63 284.388 4367.79 294.171 4358.9L280.722 4344.1C270.657 4353.24 263.059 4361.01 258.127 4367.41C255.677 4370.59 253.586 4373.81 252.248 4376.99C250.987 4379.99 249.79 4384.38 251.308 4389.01C253.017 4394.23 257.177 4396.95 260.814 4398.16C264.211 4399.29 267.944 4399.45 271.367 4399.27C278.328 4398.91 287.406 4396.96 298.027 4393.93C340.625 4381.79 419.145 4348.97 523.379 4302.85C732.558 4210.29 1047.54 4063.1 1394.04 3915.52C1740.46 3767.98 2117.7 3620.35 2450.64 3527.16C2617.11 3480.56 2772.23 3447.66 2906.72 3435.12C3041.41 3422.56 3154.35 3430.53 3237.13 3464.74L3244.77 3446.26ZM122.69 1418.45C143.67 1327.96 206.465 1258.52 302.396 1203.99C398.481 1149.37 526.943 1110.24 677.269 1080.27C978.075 1020.31 1362.6 997.713 1743.4 959.036C2123.42 920.437 2499.54 865.824 2780.78 741.358C2921.53 679.069 3039.13 599.031 3121.56 494.196C3204.12 389.193 3250.95 259.871 3250.95 100L3230.95 100C3230.95 255.629 3185.48 380.541 3105.84 481.834C3026.06 583.294 2911.56 661.614 2772.69 723.069C2494.7 846.094 2121.54 900.525 1741.37 939.138C1361.98 977.673 975.414 1000.45 673.36 1060.66C522.257 1090.78 391.347 1130.42 292.513 1186.6C193.524 1242.87 125.851 1316.26 103.206 1413.94L122.69 1418.45ZM294.171 4358.9C906.488 3802.61 1041.43 3431.13 993.873 3185.46C946.346 2939.92 717.557 2826.13 619.523 2782.37L611.37 2800.63C709.625 2844.5 928.836 2954.71 974.237 3189.26C1019.61 3423.68 892.405 3788.39 280.722 4344.1L294.171 4358.9ZM619.523 2782.37C613.272 2779.58 609.154 2775.51 606.569 2770.22C603.889 2764.74 602.548 2757.29 603.183 2747.47C604.465 2727.62 613.64 2700.58 630.946 2667.28C665.41 2600.95 730.123 2513.47 818.061 2415.79C993.803 2220.58 1260.69 1986.39 1558.69 1801.64C1856.89 1616.76 2185.03 1482.14 2483.53 1484.36C2632.59 1485.47 2774.14 1520.7 2901.06 1600.73C3027.99 1680.77 3140.87 1805.98 3232.01 1987.98L3249.89 1979.02C3157.41 1794.35 3042.25 1666.11 2911.73 1583.81C2781.2 1501.5 2635.89 1465.49 2483.68 1464.36C2179.65 1462.1 1847.64 1598.97 1548.16 1784.64C1248.47 1970.44 980.14 2205.86 803.197 2402.41C714.793 2500.61 648.798 2589.54 613.199 2658.06C595.472 2692.17 584.776 2722.16 583.225 2746.18C582.442 2758.29 583.944 2769.48 588.6 2779.01C593.351 2788.72 601.063 2796.03 611.37 2800.63L619.523 2782.37ZM3232.01 1987.98C3251.82 2027.54 3256.27 2060.18 3249.11 2087.02C3241.98 2113.78 3222.81 2136.63 3191.49 2155.66C3128.27 2194.08 3019.03 2214.73 2876.5 2219.81C2592.23 2229.92 2182.82 2177.93 1765.54 2092.29C1348.38 2006.67 924.207 1887.59 610.577 1763.94C453.677 1702.08 324.97 1639.28 238.687 1579.23C195.512 1549.18 163.506 1520.2 143.828 1492.81C124.184 1465.47 117.514 1440.78 122.69 1418.45L103.206 1413.94C96.2677 1443.87 105.997 1474.44 127.587 1504.48C149.143 1534.48 183.207 1564.99 227.262 1595.65C315.437 1657.02 445.825 1720.49 603.241 1782.55C918.243 1906.74 1343.59 2026.1 1761.52 2111.88C2179.33 2197.63 2590.57 2249.99 2877.21 2239.79C3020.14 2234.71 3133.92 2214.04 3201.87 2172.76C3236.14 2151.94 3259.59 2125.35 3268.44 2092.17C3277.26 2059.08 3271.05 2021.29 3249.89 1979.02L3232.01 1987.98Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_f" x="0.994141" y="0" width="3515.27" height="6660.59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="3157.95" y1="5243" x2="1620.89" y2="911.135" gradientUnits="userSpaceOnUse">
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