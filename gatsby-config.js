require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(`Graphql url: ${process.env.PCCI_API_GRAPHQL_URL}`);

module.exports = {
  pathPrefix: '/',
  siteMetadata: require('./site-metadata.json'),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`],
      },
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: require('./src/data/menus.json'),
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'PCCI',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'pcci',
        // Url to query from
        url: `${process.env.PCCI_API_GRAPHQL_URL || 'http://127.0.0.1:3000/graphql'}`,
      },
    },
    'gatsby-plugin-pcci',
  ],
};
