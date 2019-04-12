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
<>
  <SEO title="Tile of this page"/>
  
    <div className="background-svg">
    <svg width="4664" height="6496" viewBox="0 0 4664 6496" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M2007.5 -69.5001L2010.17 -79.1372L2007.5 -69.5001ZM1233 3444.5L1240.95 3450.57L1233 3444.5ZM1182 4466.5L1190.36 4461.01L1182 4466.5ZM3671 3539.5L3662.3 3544.42L3671 3539.5ZM3992 5524.5L3982.02 5523.94L3992 5524.5ZM1689.48 6464.3L1694.11 6455.44L1689.48 6464.3ZM1008.5 894L1002.28 901.834L1008.5 894ZM2010.17 -79.1372C2048.2 -68.6028 2103.58 -40.6347 2170.34 0.774496C2237.34 42.3365 2316.55 97.9145 2402.41 164.319C2574.15 297.128 2772.9 473.529 2954.44 668.356C3135.92 863.117 3300.57 1076.68 3403.71 1283.82C3506.73 1490.71 3549.29 1693.05 3483.33 1864.1L3464.67 1856.9C3527.62 1693.66 3487.89 1497.75 3385.81 1292.74C3283.86 1087.99 3120.61 876.029 2939.81 681.99C2759.06 488.017 2561.12 312.339 2390.18 180.14C2304.71 114.041 2226.08 58.8828 2159.8 17.7703C2093.27 -23.495 2039.93 -50.1398 2004.83 -59.8631L2010.17 -79.1372ZM3483.33 1864.1C3449.92 1950.74 3369.8 2026.66 3258.16 2093.95C3146.31 2161.35 3001.53 2220.86 2836.74 2274.08C2507.14 2380.54 2095.74 2462.37 1703.64 2531.6C1311.14 2600.89 938.347 2657.49 684.593 2713.57C557.476 2741.67 461.586 2769.36 408.196 2797.91C394.942 2805 384.68 2811.95 377.315 2818.7C369.92 2825.48 365.914 2831.63 364.301 2837.07C361.48 2846.57 364.954 2858.75 385.178 2874.64L372.824 2890.37C350.41 2872.76 338.741 2852.89 345.128 2831.37C348.119 2821.3 354.805 2812.21 363.797 2803.96C372.817 2795.69 384.637 2787.83 398.765 2780.27C454.904 2750.25 553.369 2722.09 680.277 2694.04C934.572 2637.85 1308.5 2581.05 1700.16 2511.9C2092.22 2442.69 2502.42 2361.04 2830.6 2255.05C2994.7 2202.05 3137.85 2143.1 3247.84 2076.82C3358.02 2010.41 3433.62 1937.41 3464.67 1856.9L3483.33 1864.1ZM385.178 2874.64C426.392 2907.01 491.957 2936.96 576.334 2963.41C660.51 2989.79 762.62 3012.43 876.292 3030.58C1103.63 3066.86 1376.54 3085.01 1643.38 3079.19C1910.3 3073.37 2170.6 3043.58 2372.91 2984.26C2474.08 2954.59 2560.29 2917.67 2625.51 2873.01C2690.72 2828.35 2734.3 2776.41 2751.58 2716.79L2770.79 2722.36C2751.8 2787.87 2704.39 2843.23 2636.81 2889.51C2569.24 2935.79 2480.86 2973.45 2378.54 3003.45C2173.89 3063.46 1911.66 3093.35 1643.81 3099.19C1375.88 3105.03 1101.77 3086.81 873.14 3050.33C758.829 3032.08 655.719 3009.24 570.353 2982.49C485.187 2955.8 416.886 2924.97 372.824 2890.37L385.178 2874.64ZM2751.58 2716.79C2769.43 2655.23 2762.79 2618.14 2742.62 2597.54C2721.98 2576.46 2683.54 2568.64 2627.9 2575.12C2517.42 2587.99 2352.05 2655.74 2171.21 2752.48C1990.75 2849.01 1796.13 2973.72 1627.52 3099.34C1458.72 3225.11 1316.73 3351.25 1240.95 3450.57L1225.05 3438.44C1302.58 3336.83 1446.41 3209.34 1615.57 3083.31C1784.92 2957.13 1980.38 2831.88 2161.78 2734.84C2342.79 2638.02 2511.05 2568.6 2625.59 2555.25C2682.46 2548.63 2729.38 2555.43 2756.91 2583.55C2784.9 2612.14 2789.22 2658.79 2770.79 2722.36L2751.58 2716.79ZM1240.95 3450.57C1077.87 3664.28 1024.64 3854.32 1032.1 4021.68C1039.57 4189.27 1107.94 4335.38 1190.36 4461.01L1173.64 4471.99C1090.19 4344.79 1019.81 4195.15 1012.12 4022.57C1004.42 3849.77 1059.63 3655.22 1225.05 3438.44L1240.95 3450.57ZM1190.36 4461.01C1315.74 4652.11 1538.06 4808.04 1802.72 4925.82C2067.21 5043.51 2372.98 5122.64 2663.94 5160.75C2955 5198.87 3230.51 5195.86 3434.59 5149.79C3536.67 5126.75 3620.17 5093.1 3678.81 5049.03C3737.23 5005.12 3770.61 4951.23 3773.96 4886.98L3793.93 4888.03C3790.2 4959.52 3752.8 5018.44 3690.83 5065.02C3629.06 5111.43 3542.54 5145.93 3438.99 5169.3C3231.84 5216.06 2953.79 5218.89 2661.34 5180.58C2368.8 5142.26 2061.11 5062.69 1794.59 4944.09C1528.25 4825.57 1302 4667.64 1173.64 4471.99L1190.36 4461.01ZM3773.96 4886.98C3788.12 4615.99 3781.63 4317.88 3760.75 4068.39C3750.32 3943.64 3736.29 3831.2 3719.49 3740.46C3702.62 3649.33 3683.14 3581.27 3662.3 3544.42L3679.7 3534.58C3702.34 3574.6 3722.27 3645.62 3739.16 3736.82C3756.12 3828.41 3770.21 3941.56 3780.68 4066.72C3801.63 4317.06 3808.14 4616.08 3793.93 4888.03L3773.96 4886.98ZM3662.3 3544.42C3633.39 3493.32 3609.59 3453.91 3590.34 3425.02C3570.91 3395.87 3556.63 3378.24 3546.83 3369.92C3541.66 3365.53 3539.43 3365.23 3539.48 3365.23C3539.93 3365.25 3540.68 3365.06 3541.26 3364.6C3541.67 3364.29 3541.44 3364.26 3540.98 3365.36C3539.97 3367.73 3539.07 3372.43 3538.96 3380.28C3538.85 3387.89 3539.48 3397.57 3540.87 3409.3C3552.04 3504.03 3609.82 3714.34 3681.38 3972.6C3752.78 4230.28 3837.58 4534.65 3902.18 4816.19C3966.7 5097.38 4011.41 5357.11 4001.98 5525.06L3982.02 5523.94C3991.26 5359.19 3947.25 5102.05 3882.69 4820.67C3818.21 4539.64 3733.54 4235.74 3662.11 3977.94C3590.84 3720.72 3532.41 3508.34 3521 3411.65C3519.57 3399.45 3518.84 3388.82 3518.96 3380C3519.08 3371.42 3520.01 3363.57 3522.56 3357.56C3523.87 3354.46 3525.85 3351.28 3528.91 3348.87C3532.15 3346.33 3536 3345.14 3540.01 3345.24C3547.2 3345.43 3553.96 3349.75 3559.76 3354.67C3571.91 3364.97 3587.52 3384.73 3606.98 3413.93C3626.62 3443.39 3650.69 3483.28 3679.7 3534.58L3662.3 3544.42ZM4001.98 5525.06C3982.79 5867.11 3891.13 6130.62 3748.11 6325.12C3605.05 6519.67 3411.06 6644.52 3188.41 6709.91C2743.5 6840.58 2184.23 6733.98 1684.85 6473.17L1694.11 6455.44C2190.75 6714.82 2744.53 6819.44 3182.77 6690.72C3401.69 6626.42 3591.8 6503.92 3732 6313.27C3872.24 6122.56 3962.99 5863.02 3982.02 5523.94L4001.98 5525.06ZM1684.85 6473.17C989.76 6110.14 420.974 5468.63 113.608 5091.4C36.752 4997.08 -23.8961 4919.1 -65.954 4866.27C-87.0488 4839.77 -103.351 4819.75 -114.742 4807.03C-120.509 4800.59 -124.653 4796.45 -127.334 4794.27C-128.818 4793.07 -129.065 4793.13 -128.396 4793.36C-128.018 4793.49 -126.528 4793.97 -124.472 4793.56C-121.984 4793.06 -119.953 4791.52 -118.773 4789.6C-117.811 4788.03 -117.706 4786.71 -117.689 4786.47C-117.664 4786.13 -117.705 4786.11 -117.643 4786.56C-117.518 4787.47 -117.147 4789.11 -116.327 4791.71C-114.708 4796.82 -111.782 4804.28 -107.378 4814.39C-98.6016 4834.52 -84.4277 4864.11 -64.5074 4904.33C-24.6851 4984.74 37.7195 5106.9 124.924 5279.49L107.073 5288.51C19.939 5116.06 -42.5612 4993.71 -82.4299 4913.21C-102.354 4872.98 -116.722 4843.01 -125.712 4822.38C-130.19 4812.1 -133.453 4803.87 -135.395 4797.74C-136.356 4794.7 -137.107 4791.83 -137.456 4789.29C-137.631 4788.02 -137.748 4786.55 -137.637 4785.02C-137.533 4783.59 -137.181 4781.35 -135.812 4779.12C-134.224 4776.54 -131.626 4774.6 -128.411 4773.95C-125.628 4773.39 -123.253 4773.98 -121.831 4774.47C-119.074 4775.43 -116.601 4777.23 -114.741 4778.73C-110.733 4781.98 -105.693 4787.16 -99.8451 4793.69C-88.0068 4806.9 -71.3573 4827.37 -50.3067 4853.81C-8.07388 4906.86 52.345 4984.55 129.113 5078.77C436.245 5455.71 1002.88 6094.42 1694.11 6455.44L1684.85 6473.17ZM2004.83 -59.8631C1675.41 -151.121 1271.58 -36.2664 1028.54 163.476C907.09 263.282 827.096 383.197 815.322 507.723C803.606 631.637 859.223 762.786 1014.71 886.167L1002.28 901.834C843.026 775.464 782.893 638.237 795.411 505.84C807.871 374.053 892.096 249.717 1015.84 148.024C1263.16 -55.2337 1673.59 -172.379 2010.17 -79.1372L2004.83 -59.8631ZM1014.71 886.167C1049.83 914.027 1104.19 937.47 1175.78 955.686C1247.2 973.859 1334.99 986.64 1436.29 993.668C1638.87 1007.72 1894.66 998.716 2179.93 964.356C2750.48 895.632 3437.87 725.621 4051.74 436.951L4060.25 455.05C3444.13 744.779 2754.61 915.28 2182.32 984.212C1896.17 1018.68 1639.07 1027.79 1434.9 1013.62C1332.82 1006.54 1243.78 993.625 1170.85 975.068C1098.08 956.553 1040.59 932.229 1002.28 901.834L1014.71 886.167Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_f" x="-1538.33" y="-921.479" width="7463.95" height="8562.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="1424.77" y1="661.394" x2="2429.53" y2="6296.59" gradientUnits="userSpaceOnUse">
<stop stop-color="#E2B101"/>
<stop offset="1" stop-color="#C30000"/>
</linearGradient>
</defs>
</svg>

    </div>

    <Layout>        
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