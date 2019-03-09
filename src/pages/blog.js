import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPostSummary = ({ title, date, path }) => (
  <li>
    <Link to={path}>
      {title} <small>{date}</small>
    </Link>
  </li>
)

export default function BlogPage({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {edges
          .map(e => e.node.frontmatter)
          .map(({ title, date, path }) => (
            <BlogPostSummary key={path} title={title} date={date} path={path} />
          ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true)
            path
          }
        }
      }
    }
  }
`
