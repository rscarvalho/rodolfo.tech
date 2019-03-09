import React from "react"

import { Menu } from "semantic-ui-react"
import { Link } from "gatsby"

const isBlogPage = className => ({ isPartiallyCurrent }) => ({
  className: isPartiallyCurrent ? `${className} active` : className,
})

const BlogLink = ({ className, ...rest }) => (
  <Link getProps={isBlogPage(className)} {...rest} />
)

export default function MainNavigation() {
  return (
    <>
      <Menu.Item as={Link} to="/" activeClassName="active">
        Home
      </Menu.Item>
      <Menu.Item as={BlogLink} to="/blog">
        Blog
      </Menu.Item>
      <Menu.Item as="a" href="mailto:rodolfo@rodolfo.tech">
        Contact
      </Menu.Item>
    </>
  )
}
