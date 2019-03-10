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
    title: `Rodolfo Carvalho`,
    description: "I love building great software.",
    siteUrl: "https://www.rodolfo.tech",
    author: `@rscarvalho`,
    socialLinks: {
      twitter: "https://twitter.com/rscarvalho",
      github: "https://github.com/rscarvalho",
      linkedin: "https://www.linkedin.com/in/rscarvalho/",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    fsSource("images", "src/images"),
    fsSource("blog"),
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize({ query: { site, allMarkdownRemark } }) {
              return allMarkdownRemark.edges.map(({ node }) => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                custom_elements: [
                  {
                    "content:encoded": node.html,
                  },
                ],
              }))
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: { draft: { ne: true } }}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "rodolfo.tech blog RSS feed",
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

if (process.env.GA_TRACKING_ID) {
  // @ts-ignore
  config.plugins.push({
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GA_TRACKING_ID,
      head: false,
    },
  })
}

module.exports = config
