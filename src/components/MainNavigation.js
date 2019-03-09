import React from "react"

import { Menu } from "semantic-ui-react"
import { Link } from "gatsby"

export default function MainNavigation() {
  return (
    <>
      <Menu.Item as={Link} to="/" activeClassName="active">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/blog" activeClassName="active">
        Blog
      </Menu.Item>
      <Menu.Item as="a" href="mailto:rodolfo@rodolfo.tech">
        Contact
      </Menu.Item>
    </>
  )
}
