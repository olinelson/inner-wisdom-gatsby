import React from "react"
import { Container, Divider } from "semantic-ui-react"
import { GatsbyJumbotron } from "../components/MyStyledComponents"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Counselling(props) {
  const data = useStaticQuery(graphql`
    query {
      counsiousDying: file(
        relativePath: { regex: "/(images/resources/counsiousDying.jpg)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <GatsbyJumbotron>
        <Img
          alt="Counsious dying woman"
          style={{ gridArea: "main" }}
          fluid={data.counsiousDying.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      <Divider hidden />

      <Container text>
        <h1>Book an appointment</h1>
        <p>
          Please call, text or email Susan to book a free 15 minute intake
          consultation. She can be contacted on
          <a href="mailto:innerwisdompsychologist@gmail.com">
            innerwisdompsychologist@gmail.com
          </a>{" "}
          or <a href="tel:0401 057 778">0401 057 778</a>
        </p>
        <p>
          Please note business hours are Monday, Wednesday and Friday 9am - 6pm
        </p>
      </Container>
    </Layout>
  )
}

export default Counselling
