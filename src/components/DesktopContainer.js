import React, { useState } from "react"
import {
  Responsive,
  Visibility,
  Menu,
  Container,
  Segment,
} from "semantic-ui-react"
import { getWidth } from "../lib/layoutUtils"
import HomePageHeading from "./HomePageHeading"
import MainNavigation from "./MainNavigation"

export default function DesktopContainer({ children, heading = false }) {
  const [fixed, setFixed] = useState(false)

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: heading ? 700 : 0, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <MainNavigation />
            </Container>
          </Menu>
          {heading && <HomePageHeading />}
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}
