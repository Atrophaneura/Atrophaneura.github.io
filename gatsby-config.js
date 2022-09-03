const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Atrophaneura',
    shortName: 'Atrophaneura',
    description: 'Atrophaneura project for creating a new DE for linux'
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main'
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          react: path.resolve(__dirname, 'node_modules', 'react')
        }
      }
    }
  ]
}
