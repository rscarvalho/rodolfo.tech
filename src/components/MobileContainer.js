import React, { useState } from "react"

import {
  Responsive,
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon,
} from "semantic-ui-react"

import { Link } from "gatsby"

import { getWidth } from "../lib/layoutUtils"
import HomePageHeading from "./HomePageHeading"
import MainNavigation from "./MainNavigation"

export default function MobileContainer({ children, heading = false }) {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        vertical
        onHide={() => setSidebarOpened(false)}
        visible={sidebarOpened}
      >
        <MainNavigation />
      </Sidebar>
      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
          {heading && <HomePageHeading mobile />}
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}
