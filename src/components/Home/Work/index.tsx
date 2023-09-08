import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { InfoCard, Button } from '../../shared'
import { Route } from '../../../constants/routes'
import { IWorkFrontmatter } from '../../../types'

interface IWorkNode {
    fontmatter: IWorkFrontmatter;
    html: string;
}

export const Work = (): React.ReactElement => {
    const data = useStaticQuery(
        graphql`
      query WorkQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(work/)/" } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          nodes {
            html
            frontmatter {
              company
              title
              location
              start
              end
              image {
                childImageSharp {
                  fluid(maxHeight: 96) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `,
    )

    const { nodes } = data.allMarkdownRemark

    return(
        <>
        {(nodes as IWorkNode[]).map(
            ({
                html,
                fontmatter: { company, title, location, start, end, image, svg },
            }) => {
                const fluid = image?.childImageSharp?.fluid
                return (
                    <InfoCard
                    key={`${title}-${company}`}
                    title={`${title}, ${company}`}
                    subtitle={`${start} - ${end} • ${location}`}
                    fluidImage={fluid}
                    // Svg={svgs[svg || '']}
                    body={html}
                    />
                )
            },
        )}
        <Button as="a" href={Route.RESUME} target="_BLANK">
            View my resume &arr;
        </Button>
        </>
    )
}