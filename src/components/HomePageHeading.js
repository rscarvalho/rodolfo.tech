import React from "react"
import { Container, Header } from "semantic-ui-react"

import style from "./HomePageHeading.module.css"

export default function HomePageHeading({ mobile = false }) {
  console.log(style)
  return (
    <Container text>
      <Header
        as="h1"
        content="Hi! I am Rodolfo."
        inverted
        className={mobile ? style.mobileTitle : style.title}
      />
      <Header
        as="h2"
        content="I love building great software."
        inverted
        className={mobile ? style.mobileSubheading : style.subheading}
      />
    </Container>
  )
}
