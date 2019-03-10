import "semantic-ui-css/semantic.min.css"
import "./layout.css"

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import DesktopContainer from "./DesktopContainer"
import MobileContainer from "./MobileContainer"
import { Segment, Container } from "semantic-ui-react"

const ResponsiveContainer = ({ children, ...props }) => (
  <div style={{ flex: 1 }}>
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </div>
)

const Layout = ({ children, ...props }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
            }
          }
        }
      `}
      render={data => (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <ResponsiveContainer {...props}>
            <Container style={{ marginTop: 20, marginBottom: 20 }}>
              {children}
            </Container>
          </ResponsiveContainer>
          <Segment as="footer" inverted vertical>
            <Container>
              © {new Date().getFullYear()}, {data.site.siteMetadata.author}.
              Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Container>
          </Segment>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
