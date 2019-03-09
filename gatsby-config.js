const path = require("path")

function fsSource(name, sourcePath) {
  return {
    resolve: "gatsby-source-filesystem",
    options: {
      name,
      path: path.resolve(__dirname, sourcePath || `content/${name}`),
    },
  }
}

const config = {
  siteMetadata: {
    title: `rodolfo.tech`,
    description: `I like coding and building great products.`,
    author: `@rscarvalho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    fsSource("images", "src/images"),
    fsSource("blog"),
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

if (process.env.GA_TRACKING_ID) {
  // @ts-ignore
  config.plugins.push({
    resolve: "gatsy-plugin-google-analytics",
    options: {
      trackingId: process.env.GA_TRACKING_ID,
      head: false,
    },
  })
}

module.exports = config
