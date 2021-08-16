const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Inner Wisdom Psychology And Yoga'
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src')
    }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components'
  ]
}
