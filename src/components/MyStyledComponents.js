import styled, { css } from 'styled-components'
import React from 'react'

import { Header, Container, Grid, Icon } from 'semantic-ui-react'

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner}
  }
`
export const desktop = inner => css`
  @media (min-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const JumboHeader = styled(Header)`
  font-size: 5rem;
  color: white;
  width: 100%;
  z-index: 3 !important;
  text-shadow: 1px 1px 2px black;
`
export const JumboMessage = styled.div`
  background-color: rgba(0, 0, 0, 0) !important;
  margin: auto;
  padding: 2rem;
  grid-area: main;
  z-index: 1;
`

export const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto ;
  min-height: 100vh;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
`

export const GridContainer = styled(Container)`
  min-height: 50vh;
  display: grid !important;
  align-content: center;
  justify-items: center;
`
export const CarouselImage = styled.div`
  background: url(${props => props.src});
  height: 50vh;
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const CenteredGridColumn = styled(Grid.Column)`
  display: flex !important;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const ImageDiv = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  min-height: ${props => props.minHeight || 'none'};
  background: ${props => `url('${props.src}')`};
  background-size: cover;
  grid-area: ${props => `${props.gridArea}`};
  background-position: center;
`
export const CreditContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
`

export const MobileOnlyDiv = styled.div`
  ${desktop(css`
    display: none;
  `)}
  margin: 0 auto 1rem auto;
  max-width: 100rem;
  position: fixed;
  top: 0rem;
  background: rgba(0,0,0,0);
  z-index: 2;
  width: 100%;
`
export const DesktopOnlyDiv = styled.div`
  ${mobile(css`
    display: none;
  `)}
  margin: 0 auto 1rem auto;
  // max-width: 100rem;
  position: fixed;
  top: 0rem;
  // background: rgba(0,0,0,0);
  z-index: 2;
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%) !important;
`

// export const Quote = styled(Message)`
//   background-color: ${props => props.backgroundColor} !important;
//   color: ${props => props.textColor} !important;
//   box-shadow: ${props =>
//     `0px 0px 0px 1px ${props.textColor}, 0px 0px 0px 0px rgba(0, 0, 0, 0)!important`};
// `
export const GatsbyJumbotron = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'main';
  height: ${props => (props.fullHeight ? '80vh' : '50vh')};
  min-height: 350px;
`

export const GatsbyJumbotronInnerContainer = styled.div`
  grid-area: main;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  color: white;
`
export const InfoContainer = styled(Container)`
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-gap: 1rem;
        grid-template-areas:
        "header header"
        "p1 p1"
        "quote quote"
        "p2 p2"
        "p3 p3"
        
        ;
    `

export const TwoColumnContainer = styled(Container)`
        grid-template-rows: auto 1fr;
        display: grid !important;
        justify-content: center;
        grid-template-columns: 2fr 3fr;
        grid-template-areas: ${props => props.imgleft ? "'. heading' 'img p1'" : "'heading .' 'p1 img'"};
        grid-column-gap: 2rem;
        margin-top: 2rem;

        @media(max-width: 40rem) {
            // grid-template-columns: 1fr;
            grid-template-areas:  "heading heading" "img img" "p1 p1";
            // grid-template-rows: minmax(25vh, auto);
            grid-template-rows: 1fr;
            grid-gap: 1rem;
            

        }
`

// export const QuoteContainer = styled.div`
//   border-left: .5rem solid  	#8EC03E;
//   padding-left: .5rem;
//   display: grid;
//   grid-gap: .5rem;
//   margin: 0 0 1rem -1rem;
//   color:  	grey;
//   font-size: 1.5rem;
//   width: 50rem;
//   max-width: 100%;
//   grid-area: quote;
// `

// export const Quote = (props) => {
//   return <QuoteContainer>
//     <Icon size='big' style={{ color: 'grey' }} name='quote left' />
//     {props.children}
//     {props.cite
//       ? <small>- {props.cite}</small>
//       : null}
//   </QuoteContainer>
// }
