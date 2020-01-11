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
      title="Flair"
      keywords={[`service design`, `design thinking`, `portfolio`, "design"]}
    />

    <Layout>
      <div className="background">
        <svg
          className="background-svg"
          width="2500"
          height="6500"
          viewBox="0 0 2500 6500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="url(#paint0_linear)"
            d="M 1980.8 1844 L 1971.07 1846.33 L 1980.8 1844 L 1980.8 1844 M 783.056 2814.54 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 788.998 2806.5 L 783.056 2814.54 M 468.884 3520 L 468.884 3520 L 468.945 3520.279 L 469.005 3520.558 L 469.066 3520.837 L 469.127 3521.117 L 469.188 3521.396 L 469.248 3521.675 L 469.309 3521.954 L 469.37 3522.233 L 469.431 3522.512 L 469.491 3522.791 L 469.552 3523.071 L 469.613 3523.35 L 469.674 3523.629 L 469.734 3523.908 L 469.795 3524.187 L 469.856 3524.466 L 469.917 3524.745 L 469.977 3525.025 L 470.038 3525.304 L 470.099 3525.583 L 470.16 3525.862 L 470.22 3526.141 L 470.281 3526.42 L 470.342 3526.699 L 470.403 3526.979 L 470.463 3527.258 L 470.524 3527.537 L 470.585 3527.816 L 470.646 3528.095 L 470.706 3528.374 L 470.767 3528.653 L 470.828 3528.933 L 470.889 3529.212 L 470.949 3529.491 L 471.01 3529.77 L 468.884 3520 M 1971.07 1846.33 C 2001.43 1972.96 1964.27 2110.57 1884.74 2242.88 C 1805.27 2375.09 1684.1 2500.93 1548.58 2603.27 C 1413.05 2705.62 1263.73 2784.03 1128.36 2821.84 C 992.513 2859.78 873.131 2856.22 794.941 2798.46 C 790.979 2803.82 787.018 2809.18 783.056 2814.54 C 811.623 2835.647 844.794 2849.911 881.431 2858.124 C 918.068 2866.336 958.171 2868.497 1000.602 2865.396 C 1043.033 2862.296 1087.791 2853.933 1133.74 2841.1 C 1272.05 2802.47 1423.59 2722.72 1560.63 2619.23 C 1697.69 2515.74 1820.8 2388.08 1901.88 2253.18 C 1982.91 2118.38 2022.55 1975.29 1990.52 1841.67 C 1989.223 1841.981 1987.927 1842.291 1986.63 1842.602 C 1985.333 1842.913 1984.037 1843.223 1982.74 1843.534 L 1978.85 1844.466 L 1974.96 1845.398 C 1973.663 1845.709 1972.367 1846.019 1971.07 1846.33 C 1971.07 1846.33 1971.07 1846.33 1971.07 1846.33 M 467.588 4.812 C 530.957 271.436 645.209 469.954 783.7 630.264 C 922.192 790.575 1084.922 912.678 1245.25 1026.47 C 1405.875 1140.47 1563.457 1245.842 1692.82 1372.511 C 1822.182 1499.18 1923.325 1647.145 1971.07 1846.33 L 1990.52 1841.67 C 1941.725 1638.105 1838.125 1486.882 1706.813 1358.224 C 1575.5 1229.565 1416.475 1123.47 1256.83 1010.16 C 1096.881 896.638 935.675 775.583 798.836 617.189 C 661.996 458.796 549.524 263.064 487.046 0.188 L 467.588 4.812 Z M 794.941 2798.46 C 573.135 2634.58 425.374 2517.83 333.637 2439.61 C 287.742 2400.48 256.029 2371.13 236.116 2350.42 C 226.13 2340.04 219.337 2332.07 215.229 2326.27 C 213.163 2323.36 211.983 2321.29 211.393 2319.94 C 210.658 2318.27 211.355 2318.92 210.983 2320.76 C 210.742 2321.95 210.095 2323.36 208.87 2324.51 C 207.721 2325.6 206.571 2325.99 206.023 2326.12 C 205.215 2326.32 205.399 2326.05 207.406 2326.49 C 211.141 2327.31 217.318 2329.68 226.042 2334.03 C 243.228 2342.59 267.844 2357.57 297.763 2378.07 C 357.498 2419.01 437.368 2481.3 519.425 2556.38 C 601.489 2631.47 685.532 2719.17 753.756 2810.92 C 822.068 2902.8 874.029 2998.08 892.762 3088.38 C 911.404 3178.24 897.145 3262.86 833.316 3335.19 C 769.043 3408.03 653.457 3469.62 466.759 3510.23 L 471.01 3529.77 C 659.59 3488.75 779.993 3425.85 848.312 3348.43 C 917.075 3270.5 932.011 3179.11 912.345 3084.31 C 892.769 2989.95 838.918 2891.94 769.806 2798.99 C 700.607 2705.92 615.614 2617.28 532.926 2541.62 C 450.23 2465.95 369.63 2403.08 309.069 2361.58 C 278.84 2340.86 253.352 2325.29 234.963 2316.13 C 225.9 2311.61 217.923 2308.32 211.697 2306.95 C 208.724 2306.3 204.975 2305.81 201.354 2306.68 C 199.399 2307.14 197.121 2308.1 195.134 2309.98 C 193.07 2311.93 191.872 2314.35 191.378 2316.8 C 190.5 2321.16 191.878 2325.25 193.084 2327.99 C 194.434 2331.06 196.453 2334.37 198.915 2337.84 C 203.863 2344.82 211.441 2353.62 221.702 2364.29 C 242.283 2385.69 274.567 2415.53 320.66 2454.83 C 412.898 2533.48 561.073 2650.54 783.056 2814.54 L 794.941 2798.46 Z M 471.01 3529.77 L 466.759 3510.23 L 466.759 3510.23 C 398.611 3525.053 339.14 3536.4 287.711 3544.649 C 236.281 3552.899 192.893 3558.05 156.91 3560.484 C 120.927 3562.918 92.349 3562.633 70.54 3560.01 C 68.218 3559.731 65.987 3559.428 63.844 3559.1 C 61.7 3558.772 59.645 3558.421 57.676 3558.047 C 55.707 3557.673 53.823 3557.276 52.024 3556.859 C 50.225 3556.442 48.509 3556.003 46.875 3555.546 C 45.242 3555.088 43.69 3554.611 42.218 3554.116 C 40.746 3553.62 39.353 3553.107 38.039 3552.578 C 36.724 3552.048 35.487 3551.501 34.326 3550.94 C 26.244 3547.04 22.612 3542.82 21.146 3539.06 C 19.691 3535.33 19.636 3530.17 22.654 3522.84 C 25.703 3515.44 31.586 3506.63 40.661 3496.51 C 77.245 3455.74 158.322 3401.72 269.534 3343.74 C 380.332 3285.97 519.87 3224.87 672.242 3169.63 C 977.247 3059.07 1332.36 2972.51 1610.64 2982.63 C 1749.81 2987.69 1868.49 3016.89 1952.16 3078.11 C 2035.27 3138.92 2085 3232.17 2085 3368.5 L 2105 3368.5 C 2105 3226.58 2052.82 3126.99 1963.97 3061.97 C 1875.69 2997.37 1752.38 2967.77 1611.37 2962.64 C 1329.29 2952.38 971.318 3039.94 665.426 3150.83 C 512.348 3206.32 371.983 3267.77 260.288 3326 C 246.378 3333.253 232.894 3340.464 219.87 3347.618 C 206.847 3354.771 194.283 3361.866 182.215 3368.885 C 170.146 3375.904 158.572 3382.847 147.527 3389.696 C 136.481 3396.545 125.965 3403.299 116.011 3409.943 C 106.057 3416.586 96.666 3423.117 87.873 3429.519 C 79.079 3435.921 70.882 3442.193 63.317 3448.318 C 55.752 3454.444 48.818 3460.421 42.55 3466.234 C 36.281 3472.047 30.678 3477.695 25.775 3483.16 C 15.898 3494.16 8.408 3504.91 4.161 3515.23 C -0.115 3525.61 -1.389 3536.32 2.514 3546.33 C 4.459 3551.315 7.507 3555.653 11.434 3559.403 C 15.361 3563.153 20.168 3566.315 25.63 3568.95 C 36.507 3574.21 50.751 3577.77 68.152 3579.87 C 137.323 3588.19 266.716 3574.21 471.01 3529.77 M 2085 3368.5 C 2085 3949.03 1934.2 4349.83 1720.39 4645.98 C 1684.728 4695.377 1647.3 4741.882 1608.503 4785.841 C 1569.706 4829.8 1529.54 4871.214 1488.405 4910.426 C 1447.27 4949.639 1405.165 4986.651 1362.489 5021.807 C 1319.813 5056.964 1276.566 5090.266 1233.146 5122.057 C 1189.726 5153.849 1146.134 5184.13 1102.767 5213.247 C 1059.401 5242.364 1016.26 5270.317 973.744 5297.45 C 846.4 5378.72 724.259 5452.88 619.126 5528.77 C 566.535 5566.725 517.978 5605.262 474.93 5645.555 C 431.882 5685.847 394.342 5727.895 363.789 5772.87 C 302.507 5863.08 269.481 5964.84 276.032 6087.24 C 282.567 6209.35 328.457 6351.35 423.763 6522.37 L 441.233 6512.63 C 346.789 6343.15 302.319 6204.18 296.003 6086.17 C 289.702 5968.44 321.333 5870.95 380.333 5784.11 C 439.507 5697 526.364 5620.38 630.831 5544.98 C 735.347 5469.55 856.597 5395.94 984.503 5314.31 C 1069.639 5259.98 1157.547 5202.207 1244.932 5138.224 C 1332.318 5074.241 1419.181 5004.05 1502.225 4924.883 C 1585.27 4845.716 1664.497 4757.573 1736.61 4657.69 C 1953.11 4357.81 2105 3952.81 2105 3368.5 L 2085 3368.5 Z;"
>
          </path>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="854.96"
              y1="643.528"
              x2="3002.5"
              y2="5510.22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2B101" />
              <stop offset="1" stop-color="#C30000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Img
        className="project__hero__img"
        fluid={props.data.imageCover.childImageSharp.fluid}
      />

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
    imageCover: file(relativePath: { eq: "flair-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "flair-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "flair-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "flair-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "flair-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "flair-5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
