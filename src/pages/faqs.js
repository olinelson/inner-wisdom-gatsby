import React, { useEffect } from "react"
import {
  Header,
  Accordion,
  Container,
  Table,
  List,
  Divider,
} from "semantic-ui-react"
import Layout from "../components/layout"
import { GatsbyJumbotron } from "../components/MyStyledComponents"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FAQS() {
  const data = useStaticQuery(graphql`
    query {
      bonsai: file(relativePath: { regex: "/(images/resources/path.jpg)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faq: file(relativePath: { regex: "/(images/resources/faq.jpg)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const panels = [
    {
      key: "how-long-session",
      title: "How long are the sessions?",
      content: [
        "Sessions are generally 60 minutes long.  Usually I will offer people a regular time so that it is easy to remember and plan for attending.",
      ].join(" "),
    },
    {
      key: "how-many-sessions",
      title: "How many sessions are needed?",
      content: [
        "This varies from person to person and depends upon the situation and context for each client. The aim is for us to uncover what is most important to you, which often means reflecting on past situations, on your hopes, values and goals for the future, as well as what is happening now.  This helps to develop a clearer picture about what causes problems, how they can be understood, and what can be done to address them.",
      ].join(" "),
    },
    {
      key: "medicare-rebate",
      title:
        "What is the fee for psychological treatment? Are Medicare rebates available?",
      content: [
        "The Australian Psychological Society recommended fee is $280/hour. My standard fee is $200 for individuals and $220 for couples. If you have a referral from your GP - a Mental Health Care Plan - Medicare subsides up to 10 sessions a calendar year and you will only pay an $100 gap fee. For pensioners, unemployed people and fulltime students, the gap fee is $50. Many Health Funds also cover psychology. Fees will be discussed at your initial free phone consultation.",
      ].join(" "),
    },
    {
      key: "death-doula",
      title: "What are your End of Life Doula Rates?",
      content:
        "The standard rate of $200/hr applies for the initial consultation- up to 3 hours, which may also be provided as 3 x1 hr, or 2 x 1 1/2 hr sessions. If ongoing consultation and support are required, discounted packages are available . ",
    },
    {
      key: "health-fund-rebate",
      title: "Are Health Fund rebates available?",
      content: [
        "Yes, a variety of private Health Funds provide rebates for Psychology. Please check with your provider for more details.",
      ].join(" "),
    },
    {
      key: "how-do-I-pay",
      title: "How can I pay for my sessions?",
      content: [
        "I accept payment via invoice, Square credit card or direct bank deposit",
      ].join(" "),
    },
    {
      key: "offer-skype",
      title: "Do you offer face to face sessions?",
      content: [
        "All initial intake, counselling and supervision sessions are via secure Telehealth or phone platforms. End of Life Doula packages may include in person meetings with individuals, couples or families depending on your need and Susan’s availability.",
      ].join(" "),
    },
    {
      key: "how-make-appointment",
      title: "How do I make an appointment?",
      content: [
        "Please call, text or email Susan to book a free 15 minute intake consultation. She can be contacted on innerwisdompsychologist@gmail.com or 0401 057 778 ",
      ].join(" "),
    },

    {
      key: "cant-make-it",
      title: "What if I can't make it to my appointment?",
      content: [
        "If you are unable to attend for any reason, please notify me via mobile, text or email as soon as possible. Anything less than 24 hours’ notice or failing to attend a session will incur a cancellation fee of 100%. Late arrivals will result in a short session as I may have other clients booked in following you.",
      ].join(" "),
    },
    {
      key: "confidential",
      title: "Is what I say confidential?",
      content: {
        content: (
          <>
            <p>
              Yes, no one can access your records without your permission,
              unless: exist:
            </p>
            <List bulleted>
              <List.Item>They are subpoenaed by a court</List.Item>
              <List.Item>
                If your own or another person's safety is considered to be at
                risk
              </List.Item>
              <List.Item>
                If I am required to fulfil my legal obligation as a mandatory
                reporter
              </List.Item>
            </List>
          </>
        ),
      },
    },
  ]

  return (
    <Layout>
      <GatsbyJumbotron>
        <Divider hidden />
        <Img
          alt="I trust my inner wisdom"
          style={{ gridArea: "main" }}
          fluid={data.faq.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      <Container text>
        <Header as="h1" content="Frequently Asked Questions" />
        <Accordion defaultActiveIndex={0} fluid styled panels={panels} />
      </Container>
    </Layout>
  )
}
