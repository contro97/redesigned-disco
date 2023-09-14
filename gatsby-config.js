module.exports = {
  siteMetadata: {
    title: `Ciaran Mahon`,
    description: `Software Engineer, musician, and product builder`,
    author: `Ciaran Mahon <ciaranmahon97@gmail.com>`,
    siteUrl: 'https://www.ciaranmahon.com',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   // Footnotes mode (default: true)
      //   footnotes: true,
      //   // GitHub Flavored Markdown mode (default: true)
      //   gfm: true,
      //   // Plugins configs
      //   plugins: [],
      // },
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-105075968-1',
      },
    },
    `gatsby-plugin-preact`,
  ],
}