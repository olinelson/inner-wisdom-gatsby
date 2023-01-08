import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Header, Button, Divider, Image } from "semantic-ui-react"
import Layout from "../components/layout"
import {
  ImageDiv,
  TwoColumnContainer,
  GatsbyJumbotron,
} from "../components/MyStyledComponents"
import Img from "gatsby-image"

export default function Supervision() {
  const data = useStaticQuery(graphql`
    query {
      bigBonsai: file(
        relativePath: { regex: "/(images/resources/bigBonsai.jpg)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hands: file(relativePath: { regex: "/(images/resources/hands.jpg)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pen: file(relativePath: { regex: "/(images/resources/pen.jpg)/" }) {
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
        <Divider hidden />
        <Img
          alt="hands tree"
          style={{ gridArea: "main" }}
          fluid={data.hands.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      <TwoColumnContainer text>
        <h1
          style={{
            gridArea: "heading",
            textAlign: "right",
            alignSelf: "flex-end",
          }}
        >
          Supervision
        </h1>
        <Img
          alt="bonsai tree"
          fluid={data.bigBonsai.childImageSharp.fluid}
          style={{ gridArea: "img" }}
        />
        <div style={{ gridArea: "p1", textAlign: "right" }}>
          <p>
            I began my training as a supervisor in Emotionally Focused
            Supervision in 1994 and completed the Psychology Board of
            Australia's Approved Supervision training in 2014. I am accredited
            with the Australian Association of Supervisors as a trainer and
            currently provide clinical supervision for master's student interns;
            early career psychologists and counsellors, as well as experienced
            mental health professionals from Psychology, Social Work and
            Clinical and Pastoral Counselling.
          </p>
          <p>
            I draw on self-reflective practice, creative and expressive
            approaches to supervision and am particularly interested in how the
            personal experience of the health practitioner helps or hinders
            their work with clients.
          </p>
        </div>
      </TwoColumnContainer>
      <TwoColumnContainer imgleft="true" text>
        <h1
          style={{
            gridArea: "heading",
            textAlign: "left",
            alignSelf: "flex-end",
          }}
        >
          Training
        </h1>
        <div style={{ gridArea: "p1", textAlign: "left" }}>
          <p>
            I have spent 20 years as a trainer of mental health professionals in
            a variety of areas, including: counselling skills and theories;
            grief and loss; mental health in adulthood; treating psychological
            and emotional trauma; practitioner well-being and burnout and
            training pastoral and Clinical Supervisors.
          </p>
        </div>
        <Img
          alt="pen"
          fluid={data.pen.childImageSharp.fluid}
          style={{ gridArea: "img" }}
        />
      </TwoColumnContainer>
    </Layout>
  )
}
