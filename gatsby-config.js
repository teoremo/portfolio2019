module.exports = {
  siteMetadata: {
    title: `Matteo Remondini's Portfolio`,
    description: `Matteo Remondini's porfolio. And much love`,
    author: `Matteo Remondini`,
    twitterUsername: "@teoremo",
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
      },
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
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
        name: `Matteo Remondini's Portfolio`,
        short_name: `Matteo's Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/icon.png`,

      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     'gatsby-plugin-offline',
  ],
}
