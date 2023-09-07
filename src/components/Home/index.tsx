import React from 'react'
import s from 'styled-components'

import { Hero } from './Hero'

import { M1, minWidth, TABLET } from '../../constants/measurements'
import { Children } from '../../types'
import { H3, HR } from '../shared'


const SectionWrapper = s.section`
  padding: ${M1} 0;

  ${minWidth(TABLET)} {
    padding: calc(1.25vh + ${M1}) 0;
  }
`

const Section = ({
  title,
  children,
}: {
  title: string
  children: Children
}): React.ReactElement => (
  <SectionWrapper>
    <H3 mb4 mt4>
      {title}
    </H3>
    <HR />
    {children}
  </SectionWrapper>
)

const HomePage = (): React.ReactElement => (
  <>
    <Hero />
  </>
)

export default HomePage