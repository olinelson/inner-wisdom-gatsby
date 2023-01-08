import React from "react"
import { Container, Divider, Table } from "semantic-ui-react"
import { GatsbyJumbotron } from "../components/MyStyledComponents"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Resources(props) {
  const data = useStaticQuery(graphql`
    query {
      questions: file(
        relativePath: { regex: "/(images/resources/questions.jpg)/" }
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
          fluid={data.questions.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      <Divider hidden />

      <Container text>
        <h1>Resources</h1>

        <p>
          Please contact any of the following organisation for prompt assistance
        </p>

        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Organisation</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Lifeline</Table.Cell>
              <Table.Cell>13 11 14</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Headspace – For young people 12-25 </Table.Cell>
              <Table.Cell>1800 650 890</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Anxiety Disorders Information & Support Line{" "}
              </Table.Cell>
              <Table.Cell>1300 794 992</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Mensline 24/7</Table.Cell>
              <Table.Cell>1300 789 978</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sexual assault counselling</Table.Cell>
              <Table.Cell>1800 806 292</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Women's DV Helpline</Table.Cell>
              <Table.Cell>1800 007 339</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <h3>End of life resources</h3>
        <ul>
          <li>
            <a target="_blank" rel="noreferer" href="https://www.cota.org.au">
              COTA – Council for older Australians
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://touchstonelifecare.com"
            >
              What is Advanced Care Directive Planning?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://www.livingdying.org/practices-and-meditations"
            >
              The living/dying project
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://www.youtube.com/watch?v=lkvKGafoyIY"
            >
              Dying well in the 21st Centur
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://www.youtube.com/watch?v=jZIYFE2fQUA"
            >
              What does a Death Doula do?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://www.liferites.com.au"
            >
              Liferights.com.au
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://www.sallycant.com.au/shop/p/the-ultimate-guide-to-funerals-printed"
            >
              The ultimate guid to funerals
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="https://grattan.edu.au/report/dying-well/"
            >
              Dying well - Grattan Institute
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferer"
              href="http://www.orderofthegooddeath.com/about"
            >
              Order Of the Good Death
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default Resources
