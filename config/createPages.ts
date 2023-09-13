import * as path from 'path'
import { GatsbyCreatePages } from './types'
import { IBook, IThought, IProject } from '../src/types'

const projectTemplate = path.resolve('./src/templates/ProjectTemplate.tsx')
const thoughtTemplate = path.resolve('./src/templates/ThoughtTemplate.tsx')
const bookTemplate = path.resolve('./src/templates/BookTemplate.tsx')

const getPrev = (arr: any[], idx: number): any =>
  idx === 0 ? undefined : arr[idx - 1]
const getNext = (arr: any[], idx: number): any =>
  idx === arr.length - 1 ? undefined : arr[idx + 1]

interface ICreatePagesData {
  data: {
    
    allProjectsMarkdown: {
      nodes: IProject[]
    }
  }
  errors: any
}

export const createPages: GatsbyCreatePages = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  // NOTE this has duplicate graphql code: https://github.com/gatsbyjs/gatsby/issues/12155
  const {
    data: {
      allProjectsMarkdown: { nodes: projectNodes },

    },
    errors,
  }: ICreatePagesData = await graphql(`

    fragment PartialProject on MarkdownRemark {
      frontmatter {
        title
        description
        path
        tags
        technologies
        color
        image {
          childImageSharp {
            fluid(maxWidth: 720) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }

    query {

      allProjectsMarkdown: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/projects)/" } }
        sort: { order: DESC, fields: [frontmatter___order] }
      ) {
        nodes {
          ...PartialProject
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error while running createPages GraphQL query.')
    return
  }

  projectNodes.forEach(({ frontmatter }, idx) => {
    const { path: pagePath } = frontmatter
    if (!pagePath) return

    const prev = getPrev(projectNodes, idx)
    const next = getNext(projectNodes, idx)

    createPage({
      path: pagePath,
      component: projectTemplate,
      context: { prev, next },
    })
  })
}