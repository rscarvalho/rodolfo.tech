import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter: frontMatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container">
        <Container text>
          <header style={{ marginBottom: 20 }}>
            <h1>{frontMatter.title}</h1>
            <h3>{frontMatter.date}</h3>
          </header>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
