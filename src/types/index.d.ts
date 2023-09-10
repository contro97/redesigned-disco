import React from 'react'
import { FluidObject } from 'gatsby-image'

export type Children = React.ReactNode | React.ReactNodeArray

export interface IWorkFrontmatter {
  company: string
  title: string
  location: string
  start: string
  end: string
  svg?: string
  image?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export interface IProjectPreview {
  path: string
  src?: string
  image?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  color: string
  title: string
  description: string
  tags: string[]
  technologies: string[]
  start: string
  end: string
}

export interface IProjectFrontmatter {
  path: string
  title: string
  description: string
  link: string
  technologies: string[]
  collaborators: string[]
  start: string
  end: string
  color: string
  repo: string
  tags: string[]
  status?: string
  image: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export interface IProject {
  frontmatter: IProjectFrontmatter
}

