module.exports = {
  siteMetadata: {
    title: `This is title`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static/`,
      },

    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
    },
  ],
}