import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Projectintro from "../components/project__intro"
import Buttonback from "../components/buttonback"
import Cardshelter from "../components/shelter__card"

export default props => (
  <>
    <SEO
      title="Matteo Remondini | Portfolio | Shelter"
      keywords={[
        `service design`,
        `design thinking`,
        `portfolio`,
        "design",
        "shelter",
      ]}
    />
    <Layout>
      <div className="background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="background-svg"
          width="2000"
          height="6300"
          viewBox="0 0 2000 6300"
          fill="none"
        >
          <path fill="url(#paint0_linear)">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="29s"
              values="M 1894.05 4145.42 L 1904 4146.5 L 1904 4146.5 L 1894.05 4145.42 M 967.669 6277.52 C 484.462 5437.19 748.609 4635.91 1119.05 4179.62 C 1165.345 4122.595 1213.263 4071.01 1261.541 4025.449 C 1309.82 3979.887 1358.46 3940.35 1406.2 3907.42 C 1501.8 3841.47 1593.19 3802.43 1670.42 3794.03 C 1747.28 3785.66 1809.35 3807.57 1849.2 3862.75 C 1889.56 3918.63 1908.64 4010.58 1894.05 4145.42 L 1913.94 4147.58 C 1928.75 4010.67 1909.99 3912.76 1865.42 3851.04 C 1820.34 3788.63 1750.37 3765.21 1668.26 3774.14 C 1586.52 3783.04 1491.97 3823.95 1394.84 3890.95 C 1346.215 3924.495 1296.787 3964.685 1247.816 4010.901 C 1198.845 4057.117 1150.33 4109.36 1103.53 4167.01 C 729.194 4628.09 462.038 5438.31 950.331 6287.48 L 967.669 6277.52 Z M 1894.05 4145.42 C 1865.1 4413.03 1673.77 4735.95 1386.32 4864.88 C 1242.97 4929.17 1075.46 4945.36 891.5 4882.19 C 830.111 4861.11 766.818 4831.167 701.932 4791.156 C 637.046 4751.145 570.566 4701.067 502.803 4639.717 C 435.041 4578.368 365.996 4505.747 295.978 4420.65 L 280.534 4433.35 C 351.067 4519.073 420.775 4592.421 489.36 4654.519 C 557.945 4716.617 625.406 4767.464 691.446 4808.188 C 757.486 4848.911 822.105 4879.51 885.004 4901.11 C 1073.91 4965.98 1246.65 4949.44 1394.5 4883.13 C 1689.46 4750.84 1884.35 4421.05 1913.94 4147.58 L 1894.05 4145.42 Z M 115.052 1677.45 C 244.959 1578.48 428.019 1503.46 631.038 1426.73 C 833.546 1350.18 1055.47 1272.07 1260.92 1166.94 C 1466.48 1061.75 1656.35 929.143 1794.82 743.026 C 1933.41 556.736 2020 317.496 2020 0 C 2013.333 0 2006.667 0 2000 0 C 2000 313.552 1914.59 548.524 1778.77 731.088 C 1642.82 913.823 1455.88 1044.71 1251.81 1149.13 C 1047.63 1253.62 827.116 1331.23 623.967 1408.02 C 421.329 1484.61 235.517 1560.52 102.931 1661.55 L 115.052 1677.45 Z M 1672.2 2920.97 C 1626.15 2841.83 1558.795 2769.12 1477.444 2701.702 C 1396.092 2634.285 1300.745 2572.16 1198.71 2514.19 C 994.451 2398.13 761.666 2297.8 557.5 2204.84 C 455.292 2158.3 360.273 2113.62 279.27 2069.66 C 265.752 2062.323 252.642 2055.015 239.967 2047.731 C 227.293 2040.447 215.055 2033.186 203.283 2025.944 C 191.51 2018.703 180.204 2011.48 169.393 2004.271 C 158.583 1997.063 148.267 1989.868 138.477 1982.682 C 128.686 1975.497 119.421 1968.32 110.71 1961.148 C 101.999 1953.976 93.843 1946.808 86.27 1939.64 C 40.712 1896.51 17.819 1854.84 20.165 1813.32 C 22.512 1771.77 50.344 1726.76 115.052 1677.45 L 102.931 1661.55 C 36.393 1712.24 3.032 1762.01 0.197 1812.2 C -0.276 1820.57 0.106 1828.851 1.289 1837.048 C 2.472 1845.245 4.457 1853.357 7.191 1861.389 C 9.924 1869.421 13.406 1877.372 17.584 1885.246 C 21.761 1893.121 26.634 1900.919 32.149 1908.644 C 37.664 1916.37 43.821 1924.023 50.567 1931.608 C 57.314 1939.192 64.649 1946.708 72.521 1954.16 C 119.875 1998.99 188.167 2042.97 269.73 2087.24 C 351.395 2131.56 446.962 2176.48 549.212 2223.04 C 753.961 2316.26 985.576 2416.09 1188.83 2531.58 C 1290.56 2589.38 1384.755 2650.875 1464.68 2717.104 C 1544.605 2783.332 1610.26 2854.295 1654.91 2931.03 L 1672.2 2920.97 Z M 295.978 4420.65 L 295.978 4420.65 L 280.534 4433.35 C 174.479 4304.46 121.307 4192.88 110.174 4094.94 C 98.989 3996.55 130.366 3913.13 190.74 3841.32 C 250.866 3769.81 339.737 3709.78 443.966 3657.14 C 548.286 3604.46 668.693 3558.85 792.477 3516.5 C 1040.8 3431.55 1301.63 3359.97 1478.62 3270.52 C 1567.11 3225.79 1632.73 3177.46 1665.43 3122.37 C 1681.66 3095.04 1689.79 3066.04 1688.64 3034.71 C 1687.48 3003.3 1676.97 2968.93 1654.91 2931.03 L 1672.2 2920.97 C 1695.49 2961 1707.32 2998.55 1708.63 3033.98 C 1709.93 3069.5 1700.63 3102.26 1682.63 3132.58 C 1646.9 3192.76 1576.96 3243.22 1487.64 3288.37 C 1309.01 3378.65 1045.22 3451.18 798.95 3535.43 C 675.44 3577.68 556.062 3622.94 452.982 3674.99 C 349.812 3727.09 263.67 3785.66 206.048 3854.19 C 148.675 3922.44 119.569 4000.52 130.046 4092.68 C 140.573 4185.29 191.206 4293.31 295.978 4420.65;
M 1706.9 4496 L 1696.9 4495.76 L 1706.9 4496 L 1706.9 4496 M 1253.02 6293.51 C 618.096 5731.75 741.323 4863.89 1020.45 4344.8 C 1090.12 4215.24 1169.24 4107.99 1248.15 4033.08 C 1327.36 3957.9 1405.05 3916.53 1471.93 3915.8 C 1537.43 3915.1 1595.7 3953.49 1636.96 4045.97 C 1657.695 4092.435 1673.928 4152.215 1684.352 4226.712 C 1694.777 4301.21 1699.395 4390.425 1696.9 4495.76 L 1716.89 4496.24 C 1719.4 4390.325 1714.795 4299.95 1704.158 4223.939 C 1693.52 4147.927 1676.85 4086.28 1655.23 4037.82 C 1611.77 3940.44 1547.5 3894.99 1471.71 3895.81 C 1397.3 3896.61 1314.93 3942.13 1234.39 4018.58 C 1153.56 4095.3 1073.24 4204.41 1002.84 4335.33 C 721.72 4858.11 594.695 5737.75 1239.77 6308.49 L 1253.02 6293.51 Z M 1696.9 4495.76 C 1693.79 4627.27 1600.62 4756.37 1460.91 4863.27 C 1321.56 4969.91 1137.78 5052.9 957.762 5092.58 C 777.442 5132.32 602.71 5128.21 480.347 5062.98 C 419.401 5030.48 371.384 4982.82 341.783 4917.53 C 312.136 4852.13 300.65 4768.36 314.071 4663.27 L 294.232 4660.73 C 280.467 4768.52 292.025 4856.21 323.568 4925.79 C 355.159 4995.46 406.48 5046.26 470.938 5080.63 C 599.383 5149.1 779.719 5152.3 962.067 5112.11 C 1144.71 5071.86 1331.21 4987.7 1473.07 4879.16 C 1614.58 4770.88 1713.57 4636.78 1716.89 4496.24 L 1696.9 4495.76 Z M 119.9 1678.17 C 277.31 1768.73 475.79 1824.432 684.996 1828.139 C 894.202 1831.845 1114.134 1783.555 1314.45 1666.13 C 1715.68 1430.92 2035.9 919.84 2035.9 0 C 2029.233 0 2022.567 0 2015.9 0 C 2015.9 305.053 1980.534 564.33 1918.815 782.991 C 1857.095 1001.653 1769.021 1179.699 1663.605 1322.292 C 1558.189 1464.884 1435.43 1572.023 1304.34 1648.87 C 1107.404 1764.32 891.085 1811.78 685.351 1808.142 C 479.616 1804.505 284.468 1749.77 129.874 1660.83 L 119.9 1678.17 Z M 1689.39 2644.35 C 1681.53 2576.38 1640.31 2504.89 1577.34 2432.95 C 1514.21 2360.84 1428.33 2287.25 1329.36 2215.06 C 1131.39 2070.66 879.863 1930.95 650.028 1818.89 C 420.246 1706.84 211.521 1622.12 99.002 1587.86 C 70.937 1579.31 48.343 1573.74 32.733 1571.78 C 25.154 1570.83 18.068 1570.56 12.588 1571.88 C 9.824 1572.55 6.293 1573.89 3.573 1576.9 C 0.467 1580.33 -0.419 1584.61 0.176 1588.53 C 0.703 1592.02 2.338 1595.08 4.011 1597.54 C 5.758 1600.11 8.036 1602.72 10.675 1605.35 C 15.953 1610.62 23.412 1616.73 32.973 1623.68 C 52.144 1637.61 80.786 1655.66 119.9 1678.17 L 129.874 1660.83 C 90.987 1638.46 63.054 1620.81 44.731 1607.5 C 35.546 1600.82 29.029 1595.42 24.808 1591.2 C 22.698 1589.09 21.346 1587.46 20.545 1586.29 C 19.671 1585 19.841 1584.82 19.95 1585.54 C 20.126 1586.7 19.867 1588.7 18.399 1590.32 C 17.316 1591.52 16.432 1591.53 17.287 1591.32 C 19.046 1590.9 23.09 1590.72 30.239 1591.62 C 44.086 1593.36 65.341 1598.51 93.176 1606.99 C 204.253 1640.82 411.909 1725.03 641.262 1836.86 C 870.563 1948.67 1120.93 2087.78 1317.57 2231.22 C 1415.9 2302.95 1500.51 2375.54 1562.29 2446.13 C 1624.24 2516.89 1662.35 2584.62 1669.52 2646.65 L 1689.39 2644.35 Z M 314.071 4663.27 L 314.071 4663.27 L 294.232 4660.73 C 303.394 4588.99 321.097 4518.766 345.785 4450.016 C 370.474 4381.266 402.148 4313.991 439.254 4248.151 C 476.36 4182.31 518.898 4117.903 565.312 4054.89 C 704.557 3865.85 879.222 3688.65 1048.08 3522.31 C 1132.65 3439.01 1215.688 3358.5 1292.226 3280.526 C 1368.765 3202.552 1438.805 3127.115 1497.38 3053.96 C 1556.085 2980.645 1602.747 2910.24 1632.92 2842.452 C 1663.092 2774.665 1676.775 2709.495 1669.52 2646.65 L 1689.39 2644.35 C 1697.145 2711.505 1682.505 2780.242 1651.196 2850.586 C 1619.888 2920.93 1571.91 2992.88 1512.99 3066.46 C 1453.945 3140.205 1383.38 3216.21 1306.5 3294.539 C 1229.62 3372.867 1146.425 3453.52 1062.12 3536.56 C 893.242 3702.91 719.618 3879.12 581.415 4066.75 C 535.347 4129.293 493.273 4193.029 456.654 4258.01 C 420.035 4322.991 388.87 4389.218 364.619 4456.743 C 340.369 4524.269 323.033 4593.093 314.071 4663.27;
M 1894.05 4145.42 L 1904 4146.5 L 1904 4146.5 L 1894.05 4145.42 M 967.669 6277.52 C 484.462 5437.19 748.609 4635.91 1119.05 4179.62 C 1165.345 4122.595 1213.263 4071.01 1261.541 4025.449 C 1309.82 3979.887 1358.46 3940.35 1406.2 3907.42 C 1501.8 3841.47 1593.19 3802.43 1670.42 3794.03 C 1747.28 3785.66 1809.35 3807.57 1849.2 3862.75 C 1889.56 3918.63 1908.64 4010.58 1894.05 4145.42 L 1913.94 4147.58 C 1928.75 4010.67 1909.99 3912.76 1865.42 3851.04 C 1820.34 3788.63 1750.37 3765.21 1668.26 3774.14 C 1586.52 3783.04 1491.97 3823.95 1394.84 3890.95 C 1346.215 3924.495 1296.787 3964.685 1247.816 4010.901 C 1198.845 4057.117 1150.33 4109.36 1103.53 4167.01 C 729.194 4628.09 462.038 5438.31 950.331 6287.48 L 967.669 6277.52 Z M 1894.05 4145.42 C 1865.1 4413.03 1673.77 4735.95 1386.32 4864.88 C 1242.97 4929.17 1075.46 4945.36 891.5 4882.19 C 830.111 4861.11 766.818 4831.167 701.932 4791.156 C 637.046 4751.145 570.566 4701.067 502.803 4639.717 C 435.041 4578.368 365.996 4505.747 295.978 4420.65 L 280.534 4433.35 C 351.067 4519.073 420.775 4592.421 489.36 4654.519 C 557.945 4716.617 625.406 4767.464 691.446 4808.188 C 757.486 4848.911 822.105 4879.51 885.004 4901.11 C 1073.91 4965.98 1246.65 4949.44 1394.5 4883.13 C 1689.46 4750.84 1884.35 4421.05 1913.94 4147.58 L 1894.05 4145.42 Z M 115.052 1677.45 C 244.959 1578.48 428.019 1503.46 631.038 1426.73 C 833.546 1350.18 1055.47 1272.07 1260.92 1166.94 C 1466.48 1061.75 1656.35 929.143 1794.82 743.026 C 1933.41 556.736 2020 317.496 2020 0 C 2013.333 0 2006.667 0 2000 0 C 2000 313.552 1914.59 548.524 1778.77 731.088 C 1642.82 913.823 1455.88 1044.71 1251.81 1149.13 C 1047.63 1253.62 827.116 1331.23 623.967 1408.02 C 421.329 1484.61 235.517 1560.52 102.931 1661.55 L 115.052 1677.45 Z M 1672.2 2920.97 C 1626.15 2841.83 1558.795 2769.12 1477.444 2701.702 C 1396.092 2634.285 1300.745 2572.16 1198.71 2514.19 C 994.451 2398.13 761.666 2297.8 557.5 2204.84 C 455.292 2158.3 360.273 2113.62 279.27 2069.66 C 265.752 2062.323 252.642 2055.015 239.967 2047.731 C 227.293 2040.447 215.055 2033.186 203.283 2025.944 C 191.51 2018.703 180.204 2011.48 169.393 2004.271 C 158.583 1997.063 148.267 1989.868 138.477 1982.682 C 128.686 1975.497 119.421 1968.32 110.71 1961.148 C 101.999 1953.976 93.843 1946.808 86.27 1939.64 C 40.712 1896.51 17.819 1854.84 20.165 1813.32 C 22.512 1771.77 50.344 1726.76 115.052 1677.45 L 102.931 1661.55 C 36.393 1712.24 3.032 1762.01 0.197 1812.2 C -0.276 1820.57 0.106 1828.851 1.289 1837.048 C 2.472 1845.245 4.457 1853.357 7.191 1861.389 C 9.924 1869.421 13.406 1877.372 17.584 1885.246 C 21.761 1893.121 26.634 1900.919 32.149 1908.644 C 37.664 1916.37 43.821 1924.023 50.567 1931.608 C 57.314 1939.192 64.649 1946.708 72.521 1954.16 C 119.875 1998.99 188.167 2042.97 269.73 2087.24 C 351.395 2131.56 446.962 2176.48 549.212 2223.04 C 753.961 2316.26 985.576 2416.09 1188.83 2531.58 C 1290.56 2589.38 1384.755 2650.875 1464.68 2717.104 C 1544.605 2783.332 1610.26 2854.295 1654.91 2931.03 L 1672.2 2920.97 Z M 295.978 4420.65 L 295.978 4420.65 L 280.534 4433.35 C 174.479 4304.46 121.307 4192.88 110.174 4094.94 C 98.989 3996.55 130.366 3913.13 190.74 3841.32 C 250.866 3769.81 339.737 3709.78 443.966 3657.14 C 548.286 3604.46 668.693 3558.85 792.477 3516.5 C 1040.8 3431.55 1301.63 3359.97 1478.62 3270.52 C 1567.11 3225.79 1632.73 3177.46 1665.43 3122.37 C 1681.66 3095.04 1689.79 3066.04 1688.64 3034.71 C 1687.48 3003.3 1676.97 2968.93 1654.91 2931.03 L 1672.2 2920.97 C 1695.49 2961 1707.32 2998.55 1708.63 3033.98 C 1709.93 3069.5 1700.63 3102.26 1682.63 3132.58 C 1646.9 3192.76 1576.96 3243.22 1487.64 3288.37 C 1309.01 3378.65 1045.22 3451.18 798.95 3535.43 C 675.44 3577.68 556.062 3622.94 452.982 3674.99 C 349.812 3727.09 263.67 3785.66 206.048 3854.19 C 148.675 3922.44 119.569 4000.52 130.046 4092.68 C 140.573 4185.29 191.206 4293.31 295.978 4420.65;"
              keyTimes="0; 0.6; 1"
              keySplines=".8,.93,.97,.4;
                .8,.93,.97,.4;
                .8,.93,.97,.4;"
            />
          </path>

          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1957.12"
              y1="5143.39"
              x2="191.997"
              y2="1021.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0254142" stop-color="#1401E8" />
              <stop offset="0.981215" stop-color="#C30000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Img
        className="project__hero__img"
        fluid={props.data.imageCover.childImageSharp.fluid}
      />

      <Projectintro
        h1="Shelter service strategy + projects"
        p={
          <p>
            As the first Service Designer for the leading housing &amp;
            homelessness British charity, I&rsquo;m advocating for Design
            Thinking within the organization, with a focus on improving the
            services{" "}
            <strong>
              we provide to people in urgent need of help with housing
            </strong>
            . <br />
            <br />
            By acting as a &lsquo;hands-on&rsquo; Service &amp; UX Designer and
            actively engaging with senior management stakeholders, I&rsquo;ve
            successfully contributed to Human Centred Design becoming a key
            element of Services&rsquo; division long term strategy.
          </p>
        }
        yearlocation="2017 : 2019 - London, Uk"
        category="Service Design, Strategic Design, UX Design"
        team="Service Designer, Product Owner, Lead UX Designer, Developer"
        logo={require("../images/shelterlogo.png")}
      />
      <Img
        className="image-s"
        fluid={props.data.imageOne.childImageSharp.fluid}
      />

      <div className="project__article__page">
        <div className="project__article__wrapper">
          <h2 className="project__article__h2">
            Some things I’ve learned at Shelter (so far)
          </h2>
          <p className="project__article__p">
            When I joined Shelter, there were few people around me who really
            had a clear idea of what a Service Designer is. <br />
            To familiarise myself with Shelter services and identify
            opportunities, I began conducting contextual user research.{" "}
            <strong>
              I learned how complex it is to engage with vulnerable people, from
              &lsquo;recruiting&rsquo; to actually carring out research
              activities with somebody who is or will soon be homeless.
            </strong>{" "}
            Reading existing bibliography and reviewing in-depth analysis
            produced by our researchers proved useful.
            <br />
            That&rsquo;s when I started mapping things. <br />
            <br />
            By developing a system map at Shelter, I was able to &lsquo;connect
            the dots&rsquo; and find areas for improvement accross different
            areas of the organisation.
            <br />
            Designing a user journey map helped to visualise what an ideal
            experience could look like for a person seeking advice from Shelter
            and communicate that idea quickly to get feedback.
          </p>
        </div>
      </div>

      <Img
        className="image-l hide-responsive"
        fluid={props.data.imageTwo.childImageSharp.fluid}
      />

  
      <Img
        className="image-l show-responsive"
        fluid={props.data.imageTwoM.childImageSharp.fluid}
      />
      
            <div className="project__article__page">
        <div className="project__article__wrapper">
          <p className="project__article__p">
            As I started to implement digital products I saw there was a clear
            need to introduce Service Design principles to the longer term
            strategy, but there were some barriers to achieving this. <br />
            <br />
            <strong>
              I learned that &lsquo;starting small&rsquo; was the best approach
            </strong>{" "}
            and began to build relationships with key people across the
            organisation so that I could understand their needs better. Once
            we'd built trust my team was able to guide stakeholders along the
            design process whilst addressing things they cared about. That’s
            when they started to gain genuine interest in Service Design.
            <br />
            <br />
            By leading a number of research and ideation workshops, I helped our
            team devising a service strategy and roadmap of products-services
            and interventions that would get Shelter closer to the ideal advice
            journey envisioned earlier. <br />
            <br />
            As a team we then went on exploring these opportunities.
            <br />
            <strong>Some of the successful results we achieved include:</strong>
          </p>
        </div>
        <a
          href="https://blog.shelter.org.uk/2018/06/streamlining-advice-journeys/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cardshelter
            cardimage={require("../images/shelter-3.png")}
            year="2017"
            location="London, UK"
            title="Streamlining advice journeys"
            description="A unified point of access made it easier for people to contact Shelter and allowed us to run experiments aimed at decreasing pressure of our helpline. "
            arrow={require("../images/arrow-down.svg")}
          />
        </a>

        <a
          href="https://blog.shelter.org.uk/2018/09/how-we-improved-our-helpline-to-reach-more-people-in-urgent-need/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cardshelter
            cardimage={require("../images/shelter-4.png")}
            year="2018"
            location="London, UK"
            title="Improving our helpline to reach more people in urgent need"
            description="How we improved Shelter’s helpline to reach thousands more people in urgent need of housing & homelessness expertise."
            arrow={require("../images/arrow-down.svg")}
          />
        </a>

        <a
          href="https://blog.shelter.org.uk/2019/03/reshaping-our-local-advice-services-offering/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cardshelter
            cardimage={require("../images/shelter-5.png")}
            year="2018"
            location="London, UK"
            title="Reshaping our Local Advice Services offering"
            description="How we implemented a new way of looking for face-to-face Shelter advice in a local area and simplified things for our staff."
            arrow={require("../images/arrow-down.svg")}
          />
        </a>

        <div className="project__article__wrapper">
          <p className="project__article__p">
            These outcomes have been recognized by senior management and they
            feel we are going in the right direction. Following these successes
            I was asked to ideate and facilitate a strategic session with senior
            stakeholders which contributed to Human Centred Design becoming a
            key element of the Services’ directorate long term plan <br />
            <br />
            As the team expands,{" "}
            <strong>
              I’m still working towards helping the rest of the organization to
              adopt a genuinely Human Centred approach
            </strong>{" "}
            for any new service that needs to be designed.
          </p>

          <Buttonback />
        </div>
      </div>
    </Layout>
  </>
)

export const query = graphql`
  query {
    imageCover: file(relativePath: { eq: "shelter-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "shelter-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth:900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "shelter-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwoM: file(relativePath: { eq: "m-shelter-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
