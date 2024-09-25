import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import s from 'styled-components';

import { H1, P, FlexRow, Flex, Button, Buttons, BR } from '../shared'
import { Route } from '../../constants/routes';
import {
    minWidth,
    DESKTOP,
    WIDESCREEN,
    maxWidth,
    PHONE,
  } from '../../constants/measurements'

const Wrapper = s.div<{}>`
    ${minWidth(DESKTOP)}{
        padding: 5vh 0;
    }

    ${minWidth(WIDESCREEN)} {
        padding: 10vh, 0;
    }
    `

const IMG_SIZE = '10rem';

const ImgWrapper = s.div<{}>`
    border-radius: 50%;
    height: auto;
    margin-bottom: 1.5rem;
    width: ${IMG_SIZE};
    height: ${IMG_SIZE};
    overflow: hidden;
    margin-right: calc(0.5rem + 2.5%);

    ${maxWidth(PHONE)} {
        margin-bottom: 0.5rem;
    }
`

export const Hero = (): React.ReactElement => {
    const data = useStaticQuery(
        graphql`
            query{
                file(relativePath: {eq: "me.JPG"}){
                    childImageSharp {
                        fluid(maxWidth: 256) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    )

    const { fluid } = data.file.childImageSharp

    return (
        <Wrapper>
          <BR />
          <FlexRow centerOnMobile>
            <ImgWrapper>
              <Img fluid={fluid} style={{ width: IMG_SIZE, height: IMG_SIZE }} />
            </ImgWrapper>
            <Flex>
              <H1 mb4>Hi, I&apos;m Ciarán Mahon.</H1>
              <P>
                I am Senior Solutions Consultant at ServiceNow. I
                studied Applied Mathematics and Business at {' '}
                <a
                  href="https://www.bu.edu/"
                  target="_BLANK"
                  rel="noopener noreferrer"
                >
                  {'Boston University.'}
                </a>{' '}
                In my freetime I create music, sail yachts, learn languages, and explore new places.
              </P>
              <Buttons>
                <Button to={Route.PROJECTS}>Projects</Button>
                {/* <Button to={Route.BLOG}>Blog</Button> */}
              </Buttons>
            </Flex>
          </FlexRow>
        </Wrapper>
      )
}