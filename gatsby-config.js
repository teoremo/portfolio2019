module.exports = {
  siteMetadata: {
    title: `Matteo's portfolio`,
    description: `Matteo Remondini's porfolio. And much love`,
    author: `Matteo Remondini`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        pngCompressionSpeed: 1,
        defaultQuality: 100,
        srcSetBreakpoints: [ 200, 500, 1200, 1400, 1600 ],
      },
    },
    'gatsby-plugin-gtag',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-69169005-2",
      },
    },
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     'gatsby-plugin-offline',
  ],
}
