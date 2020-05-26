import React from 'react'

// components
import {
  GatsbyJumbotron,
  GatsbyJumbotronInnerContainer,
  CenteredGridColumn,
  Quote,
  JumboHeader,
  JumboMessage
} from '../components/MyStyledComponents'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {
  Button,
  Container,
  Divider,
  Grid,
  Segment,
  List,
  Header,
  Item
} from 'semantic-ui-react'
import Layout from '../components/layout'

import FAQS from '../components/Faqs'
import Memberships from '../components/Memberships'

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      forrest: file(
        relativePath: {
          regex: "/(images/resources/forrest-path-trees.jpg)/"
        }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sueHeadshot: file(
        relativePath: { regex: "/(images/resources/sueHeadshot.jpg)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      # logo: file(relativePath: { regex: "/(images/logos/white_logo)/" }) {
      #   childImageSharp {
      #     fixed(width: 300, height: 300) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # aStillMind: file(
      #   relativePath: { regex: "/(images/resources/still_mind)/" }
      # ) {
      #   childImageSharp {
      #     fixed(width: 280, height: 280) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # peacefulHeart: file(
      #   relativePath: { regex: "/(images/resources/peaceful_heart)/" }
      # ) {
      #   childImageSharp {
      #     fixed(width: 280, height: 280) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # calmSpirit: file(
      #   relativePath: { regex: "/(images/resources/calm_spirit)/" }
      # ) {
      #   childImageSharp {
      #     fixed(width: 280, height: 280) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # restoredSoul: file(
      #   relativePath: { regex: "/(images/resources/restored_soul)/" }
      # ) {
      #   childImageSharp {
      #     fixed(width: 280, height: 280) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
    }
  `)

  return (
    <>
      <Layout location={location}>
        <GatsbyJumbotron fullHeight>
          <JumboMessage>
            <JumboHeader size='huge' as='h1' inverted>Inner Wisdom Psychology</JumboHeader>
            <Header.Subheader style={{ color: 'white', textShadow: '1px 1px 2px black' }} as='h3'>Wellbeing, Relationships, Guidance</Header.Subheader>

          </JumboMessage>
          <Img
            alt='path through trees in forrest'
            style={{ gridArea: 'main' }}
            fluid={data.forrest.childImageSharp.fluid}
          />
        </GatsbyJumbotron>

        <Divider hidden />
        <Divider hidden />

        <Container text>
          {/* <Segment> */}
          <Item.Group>
            <Item>
              <Img className='image' fluid={data.sueHeadshot.childImageSharp.fluid} />
              {/* <Item.Image alt="Susan Stephenson, Director" size='medium' src='https://storage.googleapis.com/inner_wisdom_bucket/headshot_noExifRotated.jpg' /> */}

              <Item.Content verticalAlign='top'>
                <Header>Susan Stephenson | Director
                  <Header.Subheader> B.A (Psych), Dip. Ed. (Psych), MEd (Counselling), FAPS, MCCOUNP, AAOS</Header.Subheader>
                </Header>

                <Item.Description>
                  <p>
                    I am a Registered Counselling Psychologist with 30+ years’ experience helping adults and couples resolve difficulties in order to live fulfilling, purposeful and content lives.
                    I specialize in mental health well-being, including managing personal and workplace stress, anxiety and depression; recovery from psychological and emotional trauma (past and present), bereavement, grief and loss; life transitions and adjustments; couples and relationship counselling.
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          {/* </Segment> */}
        </Container>

        <Divider hidden />
        <Divider hidden />

        <Memberships />

        <Divider hidden />
      </Layout>
    </>
  )
}

export default IndexPage
