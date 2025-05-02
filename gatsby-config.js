module.exports = {
  siteMetadata: {
    title: `Wonde BlogPost`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: `Wonde Shi`,
    siteURL: "http://localhost:8000/",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/src/components/hero`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-wordpress-inline-images`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"), // Explicitly use Dart Sass
        sassOptions: {
          // Modern Sass configuration
          quietDeps: true, // Optional: suppress deprecation warnings
          logger: {
            // Optional: customize warning output
            warn: (message, options) => {
              if (!options.deprecation) console.warn(message)
            },
          },
        },
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
