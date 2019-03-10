import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import styles from "./blog.module.css"

const BlogPostSummary = ({ title, date, path }) => (
  <li>
    <Link to={path}>{title}</Link>
    <small>{date}</small>
  </li>
)

export default function BlogPage({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={styles.postList}>
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
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
