const { siteMetadata } = require('./src/utils/site-metadata');

module.exports = {
  pathPrefix: '',
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-emotion`],
  siteMetadata,
};