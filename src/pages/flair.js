import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback";

export default props => (
  <>
    <SEO title="Tile of this page" />

    <Layout>
      <div className="background">
        <svg
          className="background-svg"
          width="4113"
          height="8000"
          viewBox="0 0 4113 8000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f)">
            <path
              d="M2245.28 143.042L2242.61 152.679L2245.28 143.042ZM3711.79 2073.04L3702.46 2069.45L3702.46 2069.45L3711.79 2073.04ZM616.786 3095.04L608.24 3100.23L616.786 3095.04ZM2998.97 2932.11L3008.72 2934.35L2998.97 2932.11ZM1470.79 3657.04L1478.74 3663.11L1478.74 3663.11L1470.79 3657.04ZM1419.79 4679.04L1428.15 4673.56L1428.15 4673.56L1419.79 4679.04ZM4021.73 5100.05L4028.96 5106.96L4021.73 5100.05ZM3977.5 3657.04L3974.86 3666.69L3977.5 3657.04ZM1927.26 6676.84L1922.63 6685.71L1922.63 6685.71L1927.26 6676.84ZM1246.28 1106.54L1252.5 1098.71L1246.28 1106.54ZM3702.46 2069.45C3671.58 2149.51 3594.79 2215.16 3482.04 2269.64C3369.48 2324.02 3222.67 2366.52 3054.36 2401.2C2717.74 2470.56 2297.55 2508.18 1898.5 2548.04C1500.05 2587.85 1122.19 2629.92 872.007 2708.47C747.187 2747.66 652.012 2796.53 602.578 2860.54C577.622 2892.85 564.306 2929.05 564.838 2969.42C565.367 3009.6 579.601 3053.09 608.24 3100.23L625.333 3089.85C597.936 3044.75 585.305 3004.75 584.836 2969.15C584.37 2933.74 595.925 2901.87 618.407 2872.76C663.849 2813.93 753.818 2766.54 877.998 2727.55C1125.81 2649.75 1501.38 2607.81 1900.49 2567.94C2298.99 2528.13 2720.49 2490.42 3058.4 2420.79C3227.36 2385.98 3376.02 2343.08 3490.74 2287.64C3605.26 2232.31 3687.54 2163.72 3721.12 2076.64L3702.46 2069.45ZM608.24 3100.23C637.892 3149.05 699.338 3186.44 780.505 3215.35C862.068 3244.4 965.421 3265.54 1081.37 3280.6C1313.32 3310.73 1597.31 3316.72 1861.85 3312.12L1861.5 3292.12C1597.31 3296.71 1314.45 3290.71 1083.94 3260.77C968.66 3245.79 866.879 3224.88 787.216 3196.51C707.156 3167.99 651.283 3132.57 625.333 3089.85L608.24 3100.23ZM1861.85 3312.12C2133.22 3307.4 2403.77 3279.13 2614.16 3219.61C2719.34 3189.86 2809.99 3152.16 2878.28 3105.31C2946.58 3058.45 2993.24 3001.89 3008.72 2934.35L2989.23 2929.88C2975.25 2990.89 2932.76 3043.67 2866.96 3088.82C2801.15 3133.97 2712.77 3170.93 2608.72 3200.37C2400.66 3259.23 2132.02 3287.42 1861.5 3292.12L1861.85 3312.12ZM3008.72 2934.35C3016.69 2899.58 3012.75 2871.18 2996.06 2850.45C2979.61 2830 2952.51 2819.25 2919.19 2815.54C2852.67 2808.12 2754.35 2827.94 2639.85 2867.21C2410.22 2945.96 2109.86 3105.02 1855.71 3294.09L1867.65 3310.14C2120.37 3122.13 2418.92 2964.12 2646.34 2886.12C2760.38 2847.01 2855.13 2828.52 2916.98 2835.41C2947.84 2838.85 2968.76 2848.41 2980.48 2862.99C2991.98 2877.28 2996.39 2898.62 2989.23 2929.88L3008.72 2934.35ZM1855.71 3294.09C1685.53 3420.7 1540.72 3548.91 1462.84 3650.98L1478.74 3663.11C1554.87 3563.33 1697.83 3436.48 1867.65 3310.14L1855.71 3294.09ZM1462.84 3650.98C1297.41 3867.76 1242.21 4062.31 1249.91 4235.11C1257.59 4407.7 1327.98 4557.33 1411.42 4684.53L1428.15 4673.56C1345.72 4547.92 1277.35 4401.81 1269.89 4234.22C1262.43 4066.86 1315.66 3876.82 1478.74 3663.11L1462.84 3650.98ZM1411.42 4684.53C1667.7 5075.15 2228.19 5279.15 2769.13 5336.93C3039.98 5365.86 3306.87 5358.26 3529.81 5318.69C3752.26 5279.21 3932.78 5207.58 4028.96 5106.96L4014.5 5093.14C3922.86 5189.02 3747.65 5259.71 3526.31 5299C3305.47 5338.19 3040.49 5345.8 2771.25 5317.05C2232 5259.44 1679.35 5056.44 1428.15 4673.56L1411.42 4684.53ZM4219.79 5737.04C4219.79 6076.54 4138.53 6336.17 4001.95 6526.82C3865.4 6717.43 3673 6839.86 3449.27 6904.05C3001.39 7032.55 2428.46 6927.33 1931.89 6667.98L1922.63 6685.71C2422.09 6946.56 3000.42 7053.63 3454.79 6923.28C3682.19 6858.03 3878.66 6733.26 4018.21 6538.46C4157.73 6343.71 4239.79 6079.74 4239.79 5737.04H4219.79ZM1931.89 6667.98C1240.66 6306.97 674.031 5668.25 366.899 5291.31C290.131 5197.09 229.712 5119.4 187.479 5066.36C166.428 5039.91 149.779 5019.45 137.94 5006.23C132.093 4999.7 127.052 4994.53 123.045 4991.28C121.184 4989.77 118.712 4987.97 115.955 4987.01C114.533 4986.52 112.157 4985.93 109.375 4986.49C106.159 4987.14 103.561 4989.08 101.974 4991.67C100.605 4993.89 100.252 4996.14 100.149 4997.57C100.038 4999.09 100.154 5000.57 100.329 5001.84C100.679 5004.37 101.43 5007.25 102.391 5010.28C104.332 5016.42 107.595 5024.64 112.073 5034.92C121.063 5055.55 135.431 5085.52 155.356 5125.75C195.224 5206.25 257.725 5328.61 344.859 5501.05L362.709 5492.03C275.505 5319.45 213.1 5197.28 173.278 5116.87C153.358 5076.65 139.184 5047.07 130.408 5026.93C126.004 5016.82 123.078 5009.36 121.459 5004.25C120.639 5001.66 120.267 5000.01 120.142 4999.11C120.08 4998.65 120.121 4998.67 120.097 4999.01C120.079 4999.25 119.974 5000.57 119.013 5002.14C117.832 5004.06 115.802 5005.6 113.313 5006.1C111.257 5006.51 109.768 5006.04 109.39 5005.91C108.72 5005.67 108.968 5005.61 110.451 5006.81C113.132 5008.99 117.277 5013.14 123.044 5019.57C134.435 5032.29 150.737 5052.31 171.832 5078.81C213.89 5131.64 274.538 5209.62 351.394 5303.94C658.76 5681.17 1227.55 6322.68 1922.63 6685.71L1931.89 6667.98ZM2247.95 133.405C1911.37 40.163 1500.95 157.308 1253.62 360.566C1129.88 462.26 1045.66 586.596 1033.2 718.382C1020.68 850.78 1080.81 988.007 1240.07 1114.38L1252.5 1098.71C1097.01 975.328 1041.39 844.18 1053.11 720.265C1064.88 595.739 1144.88 475.824 1266.32 376.018C1509.37 176.276 1913.19 61.4209 2242.61 152.679L2247.95 133.405ZM4028.96 5106.96C4104.86 5027.55 4171.55 4905.54 4221.09 4765.67C4270.69 4625.67 4303.39 4467.02 4310.83 4313.75C4318.27 4160.58 4300.51 4012.09 4248.57 3892.84C4196.51 3773.32 4109.91 3682.85 3980.14 3647.4L3974.86 3666.69C4097.59 3700.22 4180.05 3785.6 4230.23 3900.82C4280.53 4016.31 4298.2 4161.44 4290.85 4312.78C4283.51 4464.01 4251.22 4620.74 4202.24 4758.99C4153.22 4897.39 4087.74 5016.52 4014.5 5093.14L4028.96 5106.96ZM3980.14 3647.4C3844.98 3610.48 3745.89 3602.14 3676.62 3618.88C3641.77 3627.3 3614.2 3642.13 3593.53 3663.08C3572.86 3684.02 3559.63 3710.53 3552.58 3741.44C3538.58 3802.82 3548.74 3882.52 3574.15 3974.36C3599.64 4066.48 3640.89 4172.17 3690.39 4286.12C3739.9 4400.11 3797.83 4522.73 3856.78 4648.69C3915.76 4774.71 3975.78 4904.12 4029.62 5031.95C4137.44 5287.97 4219.79 5536.23 4219.79 5737.04H4239.79C4239.79 5531.83 4155.9 5280.29 4048.05 5024.19C3994.05 4895.96 3933.88 4766.23 3874.9 4640.21C3815.89 4514.12 3758.1 4391.82 3708.73 4278.16C3659.35 4164.47 3618.55 4059.79 3593.43 3969.03C3568.23 3877.98 3559.22 3802.27 3572.08 3745.89C3578.46 3717.91 3590.16 3694.96 3607.76 3677.12C3625.36 3659.29 3649.4 3646.03 3681.31 3638.32C3745.56 3622.79 3840.63 3630.02 3974.86 3666.69L3980.14 3647.4ZM2242.61 152.679C2738.58 290.073 3170.21 597.939 3444.44 957.565C3718.86 1317.44 3834.41 1727.26 3702.46 2069.45L3721.12 2076.64C3856.57 1725.4 3736.98 1308.22 3460.35 945.438C3183.53 582.413 2748.21 271.989 2247.95 133.405L2242.61 152.679ZM1240.07 1114.38C1351.59 1202.87 1522.11 1254.67 1733.02 1274.2C1944.16 1293.74 2196.97 1281.04 2474.22 1239.43C3028.75 1156.2 3682.26 957.161 4298.04 667.592L4289.53 649.493C3675.32 938.324 3023.67 1136.74 2471.26 1219.65C2195.04 1261.11 1943.92 1273.63 1734.86 1254.28C1525.56 1234.91 1359.59 1183.68 1252.5 1098.71L1240.07 1114.38Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0.105469"
              y="0.90625"
              width="4412.34"
              height="7077.92"
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
              x1="1662.56"
              y1="873.936"
              x2="2667.32"
              y2="6509.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2B101" />
              <stop offset="1" stop-color="#C30000" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="project__hero__img">
        <Img fluid={props.data.imageCover.childImageSharp.fluid} />
      </div>
      <Projectintro
        image={
          <Img
            className="image-l"
            fluid={props.data.imageCover.childImageSharp.fluid}
          />
        }
        h1="Flair. Hairstyling on-demand"
        p={
          <p>
            When I joined Flair, a newly funded venture, I was asked to validate
            the product idea &ndash; an on-demand service for people who need an
            hairdresser.
            <br />
            Learning from the feedback I gathered, the team reframed the
            opportunity and{" "}
            <strong>
              collaborated with a diverse pool of professionals, hairdressers
              and potential clients
            </strong>{" "}
            to understand the context better before moving forward. <br />
            <br />
            With expert input and a range of research and ideation methods, our
            team proposed and validated a revised product vision.
          </p>
        }
        yearlocation="2015 - London, UK"
        category="Service Design, Strategic Design, UX Design"
        team="Service Designer x2, Product Owner, Developer"
        logo={require("../images/flair-logo.png")}
      />

      <Img
        className="image-s"
        fluid={props.data.imageOne.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
        <Buttonback />
          <h2 className="project__article__h2">
            Tailoring a service around people
          </h2>
          <p className="project__article__p">
            In London, thousands of people rely on mobile hairstylists, who
            conveniently provide hairdressing services in the comfort of their
            clients&rsquo; domestic environment.
            <br />
            <br />
            Just as Uber revolutionized the landscape of transportation with the
            aid of modern technology, Flair wanted to explore the opportunity of
            developing a digital product to extend on-demand mobile hairstyling
            to anybody.
            <br />
            The preliminary validation tests confirmed the assumption that{" "}
            <strong>
              potential customers would&rsquo;ve been reluctant to trust a
              stranger to invade the privacy of their home
            </strong>
            .&nbsp;
            <br />
            In order to fully understand the context we decided to undergo
            further research; teaming up with a second Service Designer, I
            devised and facilitated three ideation workshops. Considering market
            and desk research insights&rsquo; and tapping from the precious
            expertise of domain specialists who attended our sessions, we
            spotted a range of opportunities in the hairstyling industry.
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
            We learned that hairstyling is deeply linked to many aspects of the
            human nature &ndash; for example, people tend to have a haircut when
            approaching a big change in life.{" "}
            <strong>The relational component of this interaction</strong> is
            even more important in the domestic environment in which mobile
            hairstylists operate.
            <br />
            <br />
            After considering a wide range of visions, our team decided to focus
            on &lsquo;Providing a tailored on-demand service that matches
            users&rsquo; needs with mobile-hairdressers&rsquo; skills and
            personality&rsquo;.
          </p>
        </div>
      </div>

      <Img
        className="image-l"
        fluid={props.data.imageThree.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p">
            Considering our two distinct audiences - mobile hairdressers and
            their clients &ndash; had very different needs, we used a range of
            techniques to define the idea in detail.
            <br />
            <br />I conducted several in-person interviews and shadowed a mobile
            hairdresser while she was at clients&rsquo; home to style their
            hair.{" "}
            <strong>
              By investing time in qualitative research, I learned that for each
              audience there were clear subsets of people
            </strong>{" "}
            with very different needs: for instance, full time mobile
            hairdressers are happy to travel across the city to get to their
            clients, while part timers would rather not to.
            <br />
            <br />
            Designing a <em>features sorting</em> excercise allowed the team to
            understand what was important to our users, and prioritise the
            service components accordingly - whether this meant developing an
            appointment scheduler for stylist or assessing what hair-care
            products Flair should provide.
          </p>
        </div>
      </div>

      <div className="flair__grid">
        <Img
          className="flair__grid__image"
          fluid={props.data.imageFour.childImageSharp.fluid}
        />
        <Img
          className="flair__grid__image"
          fluid={props.data.imageFive.childImageSharp.fluid}
        />
      </div>

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p">
            We then went on exploring different business models &ndash; as an
            example, we considered a &lsquo;monthly subscription&rsquo; for
            haircare services &ndash; we tested multiple pricing options and{" "}
            <strong>
              prototyped the service using low fidelity prototypes
            </strong>{" "}
            &ndash; ensuring that the revised business idea was fully validated.
          </p>
          <Buttonback />
        </div>
      </div>
    </Layout>
  </>
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
    imageOne: file(relativePath: {eq: "flair-1.png"}) {
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
    imageThree: file(relativePath: {eq: "flair-3.png"}) {
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