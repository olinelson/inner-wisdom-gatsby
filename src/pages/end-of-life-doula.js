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
        <h1> End of Life Doula</h1>
        <p>
          We have such difficulty talking about death Have you experienced the
          death of someone significant, either recent or in the past, or are you
          facing your own mortality? . How can we best contemplate death and the
          effects of loss in our life, so that we can live more fully or to plan
          for conscious dying?
        </p>
        <h3>Grief Counselling</h3>
        <ul>
          <li>
            explore and release grief, come to a deeper understanding of what
            death means, and reorient to life with renewed purpose
          </li>
        </ul>
        <h3>Aging</h3>
        <ul>
          <li>
            explore beliefs, thoughts and feelings around aging to gain clarity
            about what gives you meaning and purpose as you age
          </li>
          <li>
            fulfil life dreams using bucket lists, resolve unfinished business
            in your life, write or record legacy letters for love ones
          </li>
        </ul>
        <h3>End of Life Planning</h3>
        <p>
          How can your dying reflect your personality, values, and the way you
          lived your life?
        </p>
        <ul>
          <li>utilise Advanced Care Directives</li>
          <li>
            clarify meaningful spiritual support, rituals, appropriate
            complimentary therapies, and other wishes for the dying process
          </li>
          <li>
            plan for who to involve at the end of life- family, friends, pets
          </li>
          <li>create a compassionate community for end of life support</li>
          <li>
            explore options for after death care including home vigils, body
            disposal and funerals
          </li>
        </ul>
        <p>
          Like at birth, there are a myriad of choices and resources available
          at the end of life. I support and educate individuals, couples and
          families to open to deeply felt values that can then inform well
          considered end of life planning.
        </p>
      </Container>
    </Layout>
  )
}

export default Counselling
