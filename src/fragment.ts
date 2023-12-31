import { graphql } from 'gatsby'

export const PartialProject = graphql`
  fragment PartialProject on MarkdownRemark {
    frontmatter {
      title
      description
      path
      technologies
      tags
      color
      start
      end
      image {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const Project = graphql`
  fragment Project on MarkdownRemark {
    html
    frontmatter {
      title
      repo
      description
      path
      link
      technologies
      collaborators
      start
      end
      color
      tags
      status
      image {
        childImageSharp {
          fluid(maxWidth: 1248) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const PartialBlog = graphql`
  fragment PartialThought on MarkdownRemark {
    timeToRead
    frontmatter {
      title
      createdAt(formatString: "MMM D, YYYY")
      path
      topics
      subtitle
      image {
        childImageSharp {
          fluid(maxWidth: 848) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const Blog = graphql`
  fragment Thought on MarkdownRemark {
    html
    timeToRead
    frontmatter {
      createdAt(formatString: "MMM D, YYYY")
      updatedAt(formatString: "MMM D, YYYY")
      title
      subtitle
      topics
      caption
      image {
        childImageSharp {
          fluid(maxWidth: 1248) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`