module.exports = {
  siteMetadata: {
    title: 'Sebastian Fuchs - Software Entwickler & Web Enthusiast',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
