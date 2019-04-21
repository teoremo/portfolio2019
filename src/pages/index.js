import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global-styles.css"
import Cardhomepage from "../components/homepage__card"



const IndexPage = (props) => (
  <>
  <SEO title="Tile of this page" keywords={[`gatsby`, `application`, `react`]} />
  <Layout>
    
  <div className="background">
  <svg className="background-svg" width="1980" height="4009" viewBox="0 0 1980 4009" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M747.015 870.698L753.025 862.706L753.025 862.706L747.015 870.698ZM1519.55 1395.62L1512.95 1388.1L1512.95 1388.1L1519.55 1395.62ZM79.1411 1517.03L72.4475 1524.46L72.4475 1524.46L79.1411 1517.03ZM896.537 1288.01L894.194 1297.74L894.194 1297.74L896.537 1288.01ZM1973.11 2046.31L1963.13 2045.72L1963.13 2045.72L1973.11 2046.31ZM612.444 2721L620.932 2715.71L620.932 2715.71L612.444 2721ZM1152.39 2230.98L1160.81 2236.37L1160.81 2236.37L1152.39 2230.98ZM92.032 1899.31L93.6319 1889.44L92.032 1899.31ZM1705.63 3390.59L1715.49 3392.24L1715.49 3392.24L1705.63 3390.59ZM442.1 -246.708C372.868 -229.592 330.784 -168.546 312.617 -85.5891C294.427 -2.5249 299.517 104.745 326.22 219.601C379.625 449.319 520.276 712.683 741.004 878.69L753.025 862.706C536.812 700.094 398.279 441.234 345.7 215.072C319.41 101.987 314.807 -2.09835 332.154 -81.3107C349.524 -160.63 388.206 -212.782 446.9 -227.292L442.1 -246.708ZM741.004 878.69C960.911 1044.08 1215.62 1123.34 1383.3 1186.95C1425.35 1202.89 1461.74 1217.78 1490.9 1232.74C1520.23 1247.79 1541.25 1262.43 1553.45 1277.47C1565.17 1291.92 1568.62 1306.48 1563.42 1323.25C1557.91 1340.97 1542.4 1362.24 1512.95 1388.1L1526.15 1403.13C1556.52 1376.46 1575.37 1352.2 1582.52 1329.18C1589.96 1305.2 1584.34 1283.81 1568.98 1264.87C1554.11 1246.52 1530.05 1230.35 1500.02 1214.94C1469.82 1199.45 1432.57 1184.24 1390.4 1168.25C1221.24 1104.08 970.06 1025.93 753.025 862.706L741.004 878.69ZM1512.95 1388.1C1494.23 1404.55 1471.04 1420.86 1443.96 1436.81L1454.11 1454.04C1481.97 1437.63 1506.26 1420.6 1526.15 1403.13L1512.95 1388.1ZM1443.96 1436.81C1289.26 1527.95 1013.31 1604.08 743.233 1628.11C608.336 1640.11 475.416 1639.06 360.307 1620.57C244.994 1602.06 148.681 1566.22 85.8347 1509.6L72.4475 1524.46C139.42 1584.8 240.142 1621.53 357.136 1640.32C474.335 1659.14 608.995 1660.13 745.006 1648.03C1016.75 1623.86 1295.93 1547.23 1454.11 1454.04L1443.96 1436.81ZM85.8347 1509.6C51.1782 1478.38 31.7146 1450.63 23.8775 1426.51C16.2067 1402.9 19.483 1382.29 31.5874 1363.84C43.9897 1344.93 66.1035 1327.66 97.1192 1312.6C128.02 1297.59 166.99 1285.14 212.08 1275.43C392.721 1236.54 666.142 1242.77 894.194 1297.74L898.88 1278.29C668.395 1222.75 391.901 1216.26 207.87 1255.88C161.791 1265.8 121.172 1278.69 88.3817 1294.61C55.707 1310.48 30.0302 1329.75 14.8638 1352.87C-0.600318 1376.45 -4.67049 1403.37 4.85646 1432.69C14.2171 1461.5 36.4955 1492.07 72.4475 1524.46L85.8347 1509.6ZM894.194 1297.74C1018.61 1327.72 1237.36 1372.1 1445.34 1454.72L1452.73 1436.13C1243.06 1352.84 1022.39 1308.06 898.88 1278.29L894.194 1297.74ZM1445.34 1454.72C1585.25 1510.3 1719.37 1582.86 1816.16 1679.24C1912.69 1775.36 1971.98 1895 1963.13 2045.72L1983.09 2046.9C1992.35 1889.42 1930.07 1764.43 1830.27 1665.06C1730.73 1565.95 1593.76 1492.16 1452.73 1436.13L1445.34 1454.72ZM1963.13 2045.72C1953.89 2203.02 1846.63 2352.97 1693.5 2478.23C1540.61 2603.28 1343.58 2702.37 1158.29 2758.21L1164.06 2777.36C1351.56 2720.85 1551.01 2620.61 1706.16 2493.71C1861.05 2367.02 1973.37 2212.4 1983.09 2046.9L1963.13 2045.72ZM1158.29 2758.21C1035.14 2795.32 917.773 2813.15 822.41 2807.13C726.692 2801.09 655.524 2771.26 620.932 2715.71L603.955 2726.28C643.641 2790.01 722.995 2820.9 821.15 2827.09C919.661 2833.31 1039.52 2814.89 1164.06 2777.36L1158.29 2758.21ZM620.932 2715.71C583.475 2655.56 582.675 2605.3 603.485 2561.93C624.728 2517.66 669.236 2478.97 725.79 2444.59L715.401 2427.5C657.775 2462.54 609.229 2503.73 585.453 2553.28C561.243 2603.74 563.457 2661.25 603.955 2726.28L620.932 2715.71ZM725.79 2444.59C804.064 2397.01 902.654 2359.26 986.833 2326.53C1028.71 2310.25 1067.15 2295.15 1097.25 2280.78C1112.31 2273.59 1125.54 2266.46 1136.2 2259.3C1146.72 2252.25 1155.49 2244.68 1160.81 2236.37L1143.97 2225.59C1140.84 2230.47 1134.73 2236.21 1125.06 2242.7C1115.53 2249.09 1103.26 2255.75 1088.63 2262.73C1059.34 2276.72 1021.64 2291.54 979.585 2307.89C895.904 2340.43 795.49 2378.82 715.401 2427.5L725.79 2444.59ZM1160.81 2236.37C1166.28 2227.82 1166.86 2218.41 1163.33 2209.3C1160.03 2200.77 1153.29 2192.84 1144.8 2185.47C1127.74 2170.66 1100.32 2155.36 1065.8 2139.87C996.464 2108.75 895.173 2075.43 781.308 2043.25C553.435 1978.86 273.435 1918.58 93.6319 1889.44L90.4322 1909.18C269.488 1938.2 548.74 1998.32 775.869 2062.5C889.505 2094.61 989.652 2127.62 1057.61 2158.12C1091.74 2173.43 1116.93 2187.77 1131.69 2200.57C1139.1 2207 1143.07 2212.37 1144.68 2216.53C1146.07 2220.1 1145.77 2222.77 1143.97 2225.59L1160.81 2236.37ZM93.6319 1889.44C82.6187 1887.65 73.2481 1886.9 65.6451 1887.37C58.3722 1887.82 50.9837 1889.48 45.7486 1894.23C39.6724 1899.74 38.6834 1907.23 40.1661 1913.98C41.5473 1920.27 45.1629 1926.85 49.7952 1933.41C59.1748 1946.67 75.1423 1963.11 96.1522 1982.13C117.292 2001.26 144.018 2023.42 175.319 2048.15C300.39 2146.95 500.522 2288.29 714.712 2444.14L726.479 2427.96C511.833 2271.79 312.374 2130.93 187.717 2032.46C156.586 2007.86 130.247 1986.01 109.573 1967.3C88.7686 1948.47 74.173 1933.24 66.1253 1921.86C62.044 1916.09 60.23 1912.1 59.701 1909.69C59.2736 1907.75 59.894 1908.4 59.1823 1909.04C59.1693 1909.06 59.5727 1908.69 60.8908 1908.28C62.206 1907.87 64.1466 1907.5 66.8802 1907.33C72.3876 1906.99 80.1181 1907.51 90.4322 1909.18L93.6319 1889.44ZM714.712 2444.14C861.122 2550.66 1014.25 2664.07 1154.96 2775.62L1167.38 2759.95C1026.35 2648.14 872.954 2534.54 726.479 2427.96L714.712 2444.14ZM1154.96 2775.62C1311.98 2900.11 1453.2 3022.03 1552.29 3129.31C1601.85 3182.97 1640.57 3232.64 1665.48 3276.87C1690.51 3321.33 1700.8 3358.9 1695.77 3388.94L1715.49 3392.24C1721.65 3355.49 1708.75 3312.96 1682.9 3267.05C1656.92 3220.91 1617.05 3169.94 1566.98 3115.74C1466.82 3007.3 1324.62 2884.61 1167.38 2759.95L1154.96 2775.62ZM1695.77 3388.94C1693.68 3401.39 1686.83 3415.45 1674.77 3430.95C1662.74 3446.4 1645.94 3462.78 1624.74 3479.83C1582.33 3513.94 1523.23 3550.01 1452.2 3586.09C1310.2 3658.21 1121.82 3729.7 927.176 3785.11C732.504 3840.53 532.11 3879.73 366.08 3887.56C283.047 3891.48 209.021 3887.53 148.771 3874.05C88.3841 3860.55 42.9745 3837.73 15.6932 3804.88L0.306798 3817.66C31.5889 3855.33 81.9241 3879.6 144.406 3893.57C207.025 3907.58 282.993 3911.5 367.022 3907.54C535.114 3899.61 737.114 3860.02 932.652 3804.35C1128.22 3748.67 1317.86 3676.76 1461.26 3603.92C1532.92 3567.52 1593.36 3530.73 1637.27 3495.42C1659.23 3477.76 1677.28 3460.29 1690.55 3443.24C1703.78 3426.24 1712.66 3409.13 1715.49 3392.24L1695.77 3388.94Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_f" x="-100.249" y="-346.708" width="2184.25" height="4355.71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="991.876" y1="-62.8121" x2="991.876" y2="3495.04" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6969"/>
<stop offset="0.453039" stop-color="#C0C23D"/>
<stop offset="0.723757" stop-color="#17C792"/>
<stop offset="1" stop-color="#2E00E5"/>
</linearGradient>
</defs>
</svg>


</div>



<div className="background">
<svg className="background-index" width="491" height="3778" viewBox="600 0 491 3778" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.8011 833.745L88.8578 838.219L97.8011 833.745ZM291.5 1318.5L301.474 1317.78L291.5 1318.5ZM144.498 1236.86L138.522 1244.88L144.498 1236.86ZM399.932 -75.9438C378.618 -59.6465 338.945 -13.8054 294.234 49.4465C249.245 113.093 198.428 195.408 154.961 285.561C111.517 375.667 75.247 473.949 59.6356 569.46C44.031 664.93 48.9443 758.433 88.8578 838.219L106.744 829.271C69.364 754.549 64.1677 665.717 79.3737 572.687C94.5729 479.697 130.034 383.312 172.976 294.247C215.896 205.229 266.122 123.866 310.566 60.9909C355.289 -2.2787 393.441 -45.8038 412.08 -60.0562L399.932 -75.9438ZM88.8578 838.219C225.734 1111.83 270.212 1162.79 281.526 1319.22L301.474 1317.78C289.788 1156.21 242.266 1100.17 106.744 829.271L88.8578 838.219ZM281.526 1319.22C288.942 1421.75 214.017 1514.71 125.395 1552.15C81.3265 1570.77 34.9718 1575.13 -5.17378 1560.88C-45.0027 1546.74 -80.1737 1513.77 -101.37 1454.71L-120.194 1461.46C-97.2869 1525.3 -58.1707 1563.29 -11.8646 1579.73C34.1248 1596.06 85.7531 1590.61 133.179 1570.57C227.548 1530.7 309.66 1430.96 301.474 1317.78L281.526 1319.22ZM-101.37 1454.71C-144.595 1334.25 -116.055 1258 -64.3784 1223.59C-11.8001 1188.57 69.4112 1193.36 138.522 1244.88L150.475 1228.84C76.3801 1173.61 -14.1521 1166.11 -75.4643 1206.94C-137.678 1248.37 -165.176 1336.11 -120.194 1461.46L-101.37 1454.71ZM138.522 1244.88C184.439 1279.11 269.292 1331.4 342.063 1439.45C414.701 1547.31 475.62 1711.43 470.724 1969.16L490.72 1969.54C495.683 1708.28 433.89 1540 358.652 1428.28C283.548 1316.76 195.359 1262.3 150.475 1228.84L138.522 1244.88ZM470.724 1969.16C465.833 2226.67 374.757 2459.76 278.261 2592.19C254.174 2625.25 229.919 2651.8 206.808 2670.84C183.588 2689.98 162.142 2701.03 143.644 2704.14C125.671 2707.16 110.215 2702.78 97.3251 2690.11C83.9891 2676.99 72.6457 2654.22 65.5766 2619.11L45.9701 2623.05C53.4292 2660.1 65.9535 2687.3 83.3013 2704.37C101.095 2721.86 123.14 2727.87 146.959 2723.86C170.254 2719.95 194.893 2706.58 219.528 2686.28C244.272 2665.88 269.642 2637.98 294.425 2603.97C393.411 2468.12 485.753 2231.03 490.72 1969.54L470.724 1969.16ZM65.5766 2619.11C37.1293 2477.81 73.8708 2384.08 119.827 2314.6C143.036 2279.52 168.471 2250.77 189.965 2224.47C210.913 2198.84 229.081 2174.49 234.196 2149.76L214.611 2145.71C210.646 2164.87 195.931 2185.56 174.479 2211.81C153.571 2237.39 127.088 2267.38 103.146 2303.57C54.7983 2376.66 16.3048 2475.71 45.9701 2623.05L65.5766 2619.11ZM234.196 2149.76C239.663 2123.34 225.822 2092.72 204.196 2062.7C182.127 2032.06 150.042 1999.45 114.243 1968.16C42.6452 1905.59 -45.3803 1846.94 -102.275 1818.42L-111.237 1836.3C-56.057 1863.96 30.5775 1921.6 101.081 1983.22C136.332 2014.03 167.158 2045.5 187.968 2074.39C209.22 2103.89 218.225 2128.24 214.611 2145.71L234.196 2149.76ZM-102.275 1818.42C-106.303 1816.4 -111.196 1814.61 -116.19 1815.12C-118.917 1815.4 -121.69 1816.37 -124.104 1818.31C-126.475 1820.2 -127.968 1822.6 -128.877 1824.92C-130.573 1829.25 -130.583 1834.18 -130.136 1838.59C-129.664 1843.24 -128.532 1848.59 -126.925 1854.46C-120.56 1877.72 -105.341 1914.04 -84.3912 1959.86C-63.3451 2005.89 -36.1719 2062.23 -5.5689 2125.85C25.0534 2189.5 59.148 2260.5 94.1126 2335.99C164.055 2486.98 237.387 2655.72 293.222 2819.02C349.116 2982.5 387.185 3139.72 387.185 3267.89H407.185C407.185 3136.37 368.252 2976.65 312.146 2812.55C255.98 2648.28 182.313 2478.82 112.26 2327.58C77.2277 2251.95 43.0761 2180.83 12.4539 2117.18C-18.1876 2053.48 -45.2575 1997.35 -66.2023 1951.54C-87.2433 1905.52 -101.763 1870.64 -107.635 1849.18C-109.087 1843.87 -109.921 1839.7 -110.238 1836.57C-110.58 1833.19 -110.204 1832.09 -110.255 1832.22C-110.342 1832.44 -110.697 1833.19 -111.607 1833.92C-112.559 1834.68 -113.546 1834.96 -114.152 1835.02C-114.903 1835.1 -114.214 1834.8 -111.237 1836.3L-102.275 1818.42ZM387.185 3267.89C387.185 3340.24 359.479 3418.26 316.054 3490.73C272.68 3563.1 214.06 3629.19 153.298 3677.58C92.2426 3726.2 30.319 3755.93 -19.6631 3757.78C-44.3697 3758.69 -65.7918 3752.79 -83.0887 3739.39C-100.437 3725.95 -114.606 3704.2 -123.342 3671.66L-142.658 3676.85C-133.104 3712.44 -116.987 3738.43 -95.3388 3755.2C-73.639 3772.01 -47.3532 3778.81 -18.9256 3777.77C37.3607 3775.69 103.411 3742.87 165.757 3693.22C228.396 3643.34 288.605 3575.43 333.209 3501.01C377.763 3426.66 407.185 3345.06 407.185 3267.89H387.185Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="174.274" y1="-68" x2="174.274" y2="3368.78" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFA7A7"/>
<stop offset="0.453039" stop-color="#C0C23D"/>
<stop offset="0.723757" stop-color="#17C792" stop-opacity="0.83"/>
<stop offset="1" stop-color="#2E00E5"/>
</linearGradient>
</defs>
</svg>

</div>

    <div className="homepage__hero-wrapper">
        
     <div className="homepage__hero__group">
        <h1 className="homepage__hero__h1">Matteo Remondini <br/> Service designer</h1>
        <div className="homepage__hero__p">
        <p>Passionate about complex problems, interested in human behaviour and intrigued by anything that is about change for the better.</p>
        </div>
        <div  className="homepage__hero__h2">
        <h2>This is a selection of work I’ve done over the years</h2>
        </div>
      </div>
    </div>
    
    <div className="arrow-down">
      <img  src={require('../images/arrow-down.svg')} alt="arrow pointing down"></img>
    </div>

    <div className="homepage__page">
    
     <Link to="/shelter/">
     <Cardhomepage
      year="2017"
      location="London, UK"
      cardlogo={require('../images/shelterlogo.png')}
      title="Shelter"
      categories="Service strategy + projects"
      description="Helping Shelter become a Human Centred organisation, focusing on the housing advice services given to millions of people."
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/">
      <Cardhomepage
      year="2016"
      location="London, UK"
      cardlogo={require('../images/sdt-logo.png')}
      title="Service Design Today"
      categories="Research"
      description={<p>A snapshot of how Service Design & Design Thinking are becoming to be. Includes interviews with Livework, IDEO, Facebook, and more</p>}
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/flair/">
      <Cardhomepage
      year="2015"
      location="London, UK"
      cardlogo={require('../images/flair-logo.png')}
      title="Flair"
      categories="User research + Service Design"
      description="Would a “Uber for hairdressers” work in London? An innovative proposition for a funded venture active in the beauty sector."
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/gimble/">
      <Cardhomepage
      year="2014"
      location="Milano, Italy"
      cardlogo={require('../images/logo-polimi.png')}
      title="Gimble: introducing kids to sports"
      categories="Product-Service System + Business Design"
      description={<p>How to help shy kids get into team sports?<br/>Final project, part of Politecnico’s two-year MSc programme in Product-Service System Design</p>}
      arrow={require('../images/arrow-down.svg')}/>
      </Link>

      <Link to="/commdesign/">
      <Cardhomepage
      year="2012-2014"
      location="Milano, Italy"
      cardlogo={require('../images/logo-appstore.png')}
      title="Other stuff"
      categories="Communication design projects"
      description="Including an award-winning app, editorial work, and a co-founded screenprint & graphic design studio in Milan, Italy."
      arrow={require('../images/arrow-down.svg') }/>
      </Link>
      </div>
     
      <div className="homepage__page">
        <p className="bio">I’m a hybrid designer – which means my profile is adaptable to the needs of the team.</p>
        <img className="avatar" src={require('../images/avatar.jpg')} alt="Matteo Remondini" ></img>
        <a href="www.teoremo.com">
          <p className="downloadtext">Download the resume</p>
          <img className="downloadicon" src={require('../images/downloadicon.svg')} alt="download icon"></img> 
        </a>
      </div>

  </Layout>
  </>
)

export default IndexPage

