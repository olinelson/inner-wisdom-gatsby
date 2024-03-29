import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import {
  Menu as SemanticMenu,
  Sidebar,
  Icon,
  Image,
  Button,
} from "semantic-ui-react"
import styled from "styled-components"

import blackLogo from "../images/logos/black_logo.svg"
import { MobileOnlyDiv, DesktopOnlyDiv } from "./MyStyledComponents"

const Menu = styled(SemanticMenu)`
  background: rgba(0, 0, 0, 0) !important;
  box-shadow: none !important;
  border: none !important;
  width: 100%;
`

function Nav({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName="active" {...props}>
      {children}
    </Menu.Item>
  )
  const fullMenu = (
    <DesktopOnlyDiv>
      <Menu secondary pointing inverted onItemClick={() => setVisible(false)}>
        <LinkedItem to="/">{siteTitle}</LinkedItem>
        <Menu.Menu position="right">
          <LinkedItem to="/counselling">Counselling</LinkedItem>
          <LinkedItem to="/supervision">Supervision</LinkedItem>
          <LinkedItem to="/end-of-life-doula">End of Life Doula</LinkedItem>
          <LinkedItem to="/resources">Resources</LinkedItem>
          <LinkedItem to="/faqs">FAQs</LinkedItem>
          <LinkedItem to="/book-an-appointment">Book an Appointment</LinkedItem>
        </Menu.Menu>
      </Menu>
    </DesktopOnlyDiv>
  )

  const mobileMenu = (
    <MobileOnlyDiv>
      <Menu>
        <Sidebar
          as={SemanticMenu}
          direction="right"
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
          onItemClick={() => setVisible(false)}
        >
          <Menu.Item
            onClick={() => setVisible(!visible)}
            onTouchStart={() => setVisible(!visible)}
          >
            <Icon size="large" name="close" />
          </Menu.Item>

          <LinkedItem to="/">Home</LinkedItem>
          <LinkedItem to="/counselling">Counselling</LinkedItem>
          <LinkedItem to="/supervision">Supervision</LinkedItem>
          <LinkedItem to="/end-of-life-doula">End of Life Doula</LinkedItem>
          <LinkedItem to="/resources">Resources</LinkedItem>
          <LinkedItem to="/faqs">FAQs</LinkedItem>
          <LinkedItem to="/book-an-appointment">Book an Appointment</LinkedItem>
        </Sidebar>

        <Menu secondary fixed="top">
          <Menu.Menu position="right">
            <Menu.Item onClick={() => setVisible(!visible)}>
              {!visible ? (
                <Icon size="big" color="yellow" inverted name="bars" />
              ) : null}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Menu>
    </MobileOnlyDiv>
  )

  return (
    <>
      {mobileMenu}

      {fullMenu}
    </>
  )
}

export default Nav
