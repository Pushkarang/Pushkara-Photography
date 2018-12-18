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
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          useMozJpeg: false,
          stripMetadata: true,
        },
      },
      `gatsby-transformer-sharp`,
    ],
  }