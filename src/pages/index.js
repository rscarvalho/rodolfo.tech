import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "semantic-ui-react"

const IndexPage = () => (
  <Layout heading>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>Welcome to my website.</p>
      <p>
        While I'm building it, please feel free to drop me a line at{" "}
        <a href="mailto:rodolfo@rodolfo.tech">rodolfo@rodolfo.tech</a>.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
