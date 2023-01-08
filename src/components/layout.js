import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql, Link } from "gatsby"
import { Icon, Divider, List, Segment, Button } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"
import Header from "./header"

import { SiteContainer } from "../components/MyStyledComponents"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <SiteContainer>
        <div>
          <Helmet
            lang="en"
            title={data.site.siteMetadata.title}
            htmlAttributes={{
              lang: "en",
            }}
            meta={[
              {
                name: "description",

                content:
                  "Still Waters Psychology is an adult psychotherapy and psychology service, providing evidence-based care for a range of mental health conditions and life challenges, for adults of all ages and life stages.",
              },
              {
                name: "viewport",
                content: '"width=device-width,initial-scale=1"',
              },
            ]}
          />

          <Header siteTitle={data.site.siteMetadata.title} />

          <div style={{ margin: "0 auto" }}>{children}</div>
        </div>

        <Segment textAlign="center" padded="very">
          <h4>{data.site.siteMetadata.title}</h4>

          <List horizontal inverted={false} divided link size="small">
            <List.Item as={Link} to="/">
              Home
            </List.Item>
            <List.Item as={Link} to="/counselling">
              Counselling
            </List.Item>
            <List.Item as={Link} to="/supervision">
              Supervision
            </List.Item>
            <List.Item as={Link} to="/faqs">
              FAQs
            </List.Item>
            <List.Item href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=b6129245-a32e-47a0-a283-9fe3895dd945">
              Book Appointment
            </List.Item>
          </List>
          <Divider hidden />
          <small style={{ color: "grey" }}>
            <Icon name="copyright" />
            {new Date().getFullYear()}
          </small>
          <Divider hidden />
        </Segment>
      </SiteContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
