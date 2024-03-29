import React from "react"
import { Item, Header, Container } from "semantic-ui-react"

export default function Memberships() {
  return (
    <Container text>
      <Header as="h2" content="Professional Memberships" />
      <Item.Group>
        <Item>
          <Item.Image alt="APS Logo" size="tiny" src="/images/ahpra.png" />
          <Item.Content>
            <h4>Australian Health Professionals Regulation Agency</h4>
            <Item.Meta>Member Number 1137541</Item.Meta>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            alt="medicare logo"
            size="tiny"
            src="/images/medicare.png"
          />
          <Item.Content>
            <h4>Medicare Provider</h4>
            <Item.Meta>Provider Number 2577293T</Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            alt="Psychology Board of Australia logo"
            size="tiny"
            src="/images/psychologyBoard.png"
          />
          <Item.Content>
            <h4>Psychology Board of Australia</h4>
            {/* <Item.Meta>Provider Number 2577293T</Item.Meta> */}
            <Item.Meta>
              <p>Practice Endorsement Counselling Psychology</p>
              <p>Approved Supervisor</p>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            alt="Fellow Australian Psychological Society logo"
            size="tiny"
            src="/images/aps.svg"
          />
          <Item.Content>
            <h4>Fellow Australian Psychological Society</h4>
            <Item.Meta>
              <p>
                Interest group memberships: Counselling Psychology, Psychology
                and Yoga
              </p>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            alt="Australasian Association of Supervision logo"
            size="tiny"
            src="/images/aaos.png"
          />
          <Item.Content>
            <h4>AAOS</h4>
            <Item.Meta>
              <p>Australasian Association Of Supervision</p>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            alt="Preparing the way logo"
            size="tiny"
            src="/images/tpwLogo.png"
          />
          <Item.Content>
            <h4>Certified End of Life Doula Australia</h4>
            <Item.Meta>
              <p>
                Australia and New Zealand’s leading end of life doula training
                organisation
              </p>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  )
}
