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



    <Layout>     
    <div className="background">  
    <svg width="4560" height="7527" viewBox="0 0 4560 7527" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M2351.18 270.042L2348.51 279.679L2348.51 279.679L2351.18 270.042ZM3817.68 2200.04L3808.35 2196.45L3808.35 2196.45L3817.68 2200.04ZM722.681 3222.04L716.504 3229.91L716.504 3229.91L722.681 3222.04ZM3104.87 3059.12L3095.26 3056.33L3095.26 3056.33L3104.87 3059.12ZM1576.68 3784.04L1584.63 3790.11L1584.63 3790.11L1576.68 3784.04ZM1525.68 4806.04L1534.04 4800.56L1534.04 4800.56L1525.68 4806.04ZM4127.63 5227.05L4117.64 5226.52L4117.64 5226.52L4127.63 5227.05ZM4014.68 3879.04L4005.98 3883.96L4005.98 3883.96L4014.68 3879.04ZM4335.68 5864.04L4345.66 5864.6L4345.66 5864.6L4335.68 5864.04ZM2033.16 6803.84L2028.53 6812.71L2028.53 6812.71L2033.16 6803.84ZM1352.18 1233.54L1345.96 1241.38L1345.96 1241.38L1352.18 1233.54ZM4399.68 160.5H4409.68V150.5H4399.68V160.5ZM160 160.5V150.5H150V160.5H160ZM160 7367H150V7377H160V7367ZM4399.68 7367V7377H4409.68V7367H4399.68ZM2348.51 279.679C2387.46 290.47 2448.76 322.054 2525.4 371.137C2601.76 420.035 2692.53 485.759 2790.21 564.065C2985.58 720.688 3208.16 927.321 3397.89 1149.69L3413.1 1136.71C3222.43 913.223 2998.89 705.728 2802.72 548.46C2704.63 469.821 2613.27 403.659 2536.19 354.295C2459.39 305.116 2395.93 272.062 2353.85 260.405L2348.51 279.679ZM3397.89 1149.69C3550.62 1328.7 3681.73 1517.53 3760.34 1698.36C3839 1879.34 3864.48 2050.89 3808.35 2196.45L3827.01 2203.64C3885.85 2051.07 3858.31 1873.6 3778.68 1690.39C3698.98 1507.04 3566.51 1316.51 3413.1 1136.71L3397.89 1149.69ZM3808.35 2196.45C3777.3 2276.95 3701.7 2349.95 3591.52 2416.36C3481.53 2482.64 3338.38 2541.6 3174.28 2594.59C2846.1 2700.58 2435.9 2782.23 2043.84 2851.44C1652.18 2920.59 1278.25 2977.39 1023.96 3033.59C897.049 3061.63 798.584 3089.8 742.445 3119.81C728.317 3127.37 716.497 3135.23 707.477 3143.5C698.485 3151.75 691.799 3160.84 688.808 3170.92C682.421 3192.43 694.09 3212.3 716.504 3229.91L728.858 3214.18C708.634 3198.3 705.16 3186.11 707.981 3176.61C709.594 3171.18 713.6 3165.02 720.994 3158.24C728.36 3151.49 738.622 3144.54 751.876 3137.45C805.266 3108.9 901.156 3081.21 1028.27 3053.11C1282.03 2997.04 1654.82 2940.43 2047.32 2871.14C2439.42 2801.92 2850.82 2720.08 3180.42 2613.63C3345.21 2560.4 3489.99 2500.89 3601.84 2433.49C3713.48 2366.2 3793.6 2290.28 3827.01 2203.64L3808.35 2196.45ZM716.504 3229.91C760.029 3264.09 827.199 3294.59 910.895 3321.04C994.786 3347.57 1096.06 3370.27 1208.42 3388.52C1433.14 3425 1702.84 3443.72 1967.75 3439.12L1967.4 3419.12C1703.56 3423.71 1435.05 3405.05 1211.62 3368.77C1099.91 3350.64 999.628 3328.12 916.924 3301.98C834.026 3275.77 769.562 3246.15 728.858 3214.18L716.504 3229.91ZM1967.75 3439.12C2239.15 3434.4 2506.08 3405.18 2714.65 3345.19C2818.93 3315.2 2909.08 3277.38 2977.99 3230.76C3046.9 3184.13 3095.25 3128.21 3114.47 3061.9L3095.26 3056.33C3077.77 3116.68 3033.33 3169.17 2966.78 3214.19C2900.23 3259.22 2812.25 3296.3 2709.12 3325.97C2502.88 3385.29 2237.88 3414.42 1967.4 3419.12L1967.75 3439.12ZM3114.47 3061.9C3128.32 3014.14 3129.32 2976.18 3117.17 2947.98C3104.73 2919.09 3079.48 2902.6 3046.24 2895.98C3013.36 2889.42 2971.84 2892.28 2924.36 2902.27C2876.73 2912.29 2822.34 2929.67 2763.38 2952.85C2527.74 3045.5 2215.46 3232.24 1961.6 3421.09L1973.54 3437.14C2226.55 3248.91 2537.26 3063.25 2770.7 2971.47C2829.02 2948.54 2882.29 2931.56 2928.48 2921.84C2974.82 2912.09 3013.28 2909.8 3042.33 2915.59C3071.02 2921.31 3089.65 2934.63 3098.8 2955.9C3108.26 2977.86 3108.58 3010.39 3095.26 3056.33L3114.47 3061.9ZM1961.6 3421.09C1791.42 3547.7 1646.62 3675.91 1568.73 3777.98L1584.63 3790.11C1660.77 3690.33 1803.72 3563.48 1973.54 3437.14L1961.6 3421.09ZM1568.73 3777.98C1403.31 3994.76 1348.1 4189.31 1355.8 4362.11C1363.49 4534.7 1433.87 4684.33 1517.32 4811.53L1534.04 4800.56C1451.62 4674.92 1383.25 4528.81 1375.78 4361.22C1368.32 4193.86 1421.55 4003.82 1584.63 3790.11L1568.73 3777.98ZM1517.32 4811.53C1645.68 5007.18 1871.93 5165.11 2138.27 5283.63C2404.79 5402.23 2712.48 5481.8 3005.02 5520.12C3297.47 5558.43 3575.52 5555.6 3782.67 5508.84C3886.22 5485.47 3972.74 5450.97 4034.51 5404.56C4096.48 5357.98 4133.88 5299.06 4137.61 5227.57L4117.64 5226.52C4114.29 5290.77 4080.91 5344.66 4022.49 5388.57C3963.85 5432.64 3880.35 5466.29 3778.27 5489.33C3574.19 5535.4 3298.68 5538.42 3007.62 5500.29C2716.66 5462.18 2410.89 5383.05 2146.4 5265.36C1881.74 5147.59 1659.42 4991.66 1534.04 4800.56L1517.32 4811.53ZM4137.61 5227.57C4145.82 5070.42 4147.11 4904.25 4142.7 4743.68L4122.71 4744.23C4127.11 4904.34 4125.82 5069.97 4117.64 5226.52L4137.61 5227.57ZM4142.7 4743.68C4137.27 4546.1 4123.21 4356.84 4102.73 4203.19C4092.49 4126.37 4080.63 4058.32 4067.42 4002.51C4054.25 3946.91 4039.56 3902.72 4023.38 3874.12L4005.98 3883.96C4020.72 3910.03 4034.89 3951.96 4047.95 4007.12C4060.97 4062.07 4072.72 4129.42 4082.9 4205.83C4103.27 4358.64 4117.3 4547.17 4122.71 4744.23L4142.7 4743.68ZM4023.38 3874.12C3986.86 3809.54 3958.14 3763 3936.22 3732.56C3925.28 3717.38 3915.81 3705.86 3907.7 3698.07C3903.65 3694.17 3899.68 3690.96 3895.82 3688.68C3892.05 3686.46 3887.61 3684.68 3882.81 3684.78C3877.52 3684.89 3873.05 3687.28 3869.85 3691.07C3866.95 3694.53 3865.33 3698.84 3864.35 3703.01C3862.4 3711.37 3862.24 3722.67 3863.2 3735.92C3865.15 3762.73 3872 3801.21 3882.51 3848.84C3924.55 4039.36 4027.2 4385.29 4123.04 4746.52L4142.37 4741.39C4046.23 4379.04 3943.97 4034.56 3902.04 3844.53C3891.56 3797.03 3884.99 3759.74 3883.15 3734.47C3882.22 3721.69 3882.59 3712.87 3883.83 3707.57C3884.12 3706.32 3884.43 3705.42 3884.7 3704.8C3884.97 3704.17 3885.16 3703.95 3885.16 3703.95C3884.93 3704.22 3884.13 3704.76 3883.24 3704.78C3882.85 3704.79 3883.54 3704.66 3885.67 3705.92C3887.71 3707.12 3890.42 3709.2 3893.84 3712.48C3900.67 3719.05 3909.33 3729.44 3919.99 3744.25C3941.25 3773.78 3969.55 3819.56 4005.98 3883.96L4023.38 3874.12ZM4123.04 4746.52C4179.45 4959.15 4233.59 5177.33 4271.89 5373.06C4310.23 5569.01 4332.53 5741.64 4325.7 5863.48L4345.66 5864.6C4352.65 5740.09 4329.9 5565.38 4291.51 5369.22C4253.09 5172.85 4198.82 4954.17 4142.37 4741.39L4123.04 4746.52ZM4325.7 5863.48C4306.67 6202.56 4215.92 6462.1 4075.68 6652.81C3935.48 6843.47 3745.37 6965.97 3526.45 7030.26C3088.21 7158.98 2534.43 7054.36 2037.79 6794.98L2028.53 6812.71C2527.91 7073.52 3087.18 7180.13 3532.09 7049.45C3754.74 6984.06 3948.73 6859.21 4091.79 6664.66C4234.81 6470.17 4326.47 6206.65 4345.66 5864.6L4325.7 5863.48ZM2037.79 6794.98C1346.56 6433.97 779.925 5795.25 472.793 5418.31C396.025 5324.09 335.606 5246.4 293.373 5193.36C272.323 5166.91 255.673 5146.44 243.835 5133.23C237.987 5126.7 232.947 5121.53 228.94 5118.28C227.079 5116.77 224.606 5114.97 221.849 5114.01C220.427 5113.52 218.052 5112.93 215.269 5113.49C212.054 5114.14 209.456 5116.08 207.868 5118.67C206.499 5120.89 206.147 5123.14 206.043 5124.57C205.933 5126.09 206.049 5127.57 206.224 5128.84C206.573 5131.37 207.325 5134.25 208.285 5137.28C210.227 5143.42 213.49 5151.64 217.968 5161.92C226.958 5182.55 241.326 5212.52 261.25 5252.75C301.119 5333.25 363.619 5455.61 450.753 5628.05L468.604 5619.03C381.399 5446.45 318.995 5324.28 279.173 5243.87C259.252 5203.65 245.078 5174.07 236.303 5153.93C231.898 5143.82 228.972 5136.36 227.353 5131.25C226.534 5128.66 226.162 5127.01 226.037 5126.11C225.974 5125.65 226.016 5125.67 225.991 5126.01C225.974 5126.25 225.869 5127.57 224.907 5129.14C223.727 5131.06 221.696 5132.6 219.208 5133.1C217.152 5133.51 215.662 5133.04 215.284 5132.91C214.615 5132.67 214.862 5132.61 216.346 5133.81C219.027 5135.99 223.171 5140.14 228.938 5146.57C240.33 5159.29 256.632 5179.31 277.726 5205.81C319.784 5258.64 380.432 5336.62 457.289 5430.94C764.655 5808.17 1333.44 6449.68 2028.53 6812.71L2037.79 6794.98ZM2353.85 260.405C2017.27 167.163 1606.84 284.308 1359.52 487.566C1235.78 589.26 1151.55 713.596 1139.09 845.382C1126.57 977.78 1186.71 1115.01 1345.96 1241.38L1358.39 1225.71C1202.9 1102.33 1147.29 971.18 1159 847.265C1170.78 722.739 1250.77 602.824 1372.22 503.018C1615.26 303.276 2019.09 188.421 2348.51 279.679L2353.85 260.405ZM1345.96 1241.38C1402.41 1286.17 1500.97 1318.07 1630.07 1337.37C1759.61 1356.74 1921.42 1363.63 2105.76 1357.27C2474.47 1344.55 2934.26 1278.75 3408.06 1152.86L3402.93 1133.53C2930.44 1259.07 2472.15 1324.61 2105.07 1337.28C1921.51 1343.62 1761 1336.72 1633.03 1317.59C1504.63 1298.39 1410.53 1267.07 1358.39 1225.71L1345.96 1241.38ZM3408.06 1152.86C3741.92 1064.15 4082.88 945.567 4403.94 794.592L4395.42 776.493C4075.61 926.881 3735.82 1045.08 3402.93 1133.53L3408.06 1152.86ZM4409.68 785.542V160.5H4389.68V785.542H4409.68ZM4399.68 150.5H160V170.5H4399.68V150.5ZM150 160.5V7367H170V160.5H150ZM160 7377H4399.68V7357H160V7377ZM4409.68 7367V785.542H4389.68V7367H4409.68Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_f" x="0" y="0.5" width="4559.68" height="7526.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="1768.45" y1="1000.94" x2="2773.21" y2="6636.13" gradientUnits="userSpaceOnUse">
<stop stop-color="#E2B101"/>
<stop offset="1" stop-color="#C30000"/>
</linearGradient>
</defs>
</svg>
   
    </div>   
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