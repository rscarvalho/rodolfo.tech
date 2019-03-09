import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter: frontMatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container">
        <section className="blog-post">
          <header>
            <h1>{frontMatter.title}</h1>
            <h2>{frontMatter.date}</h2>
          </header>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </section>
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
