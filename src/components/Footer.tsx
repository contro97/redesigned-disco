import React from "react";
import s from 'styled-components'

import { P } from './shared'
import { M2 } from '../../src/constants/measurements'

const FooterTag = s.footer`
    width: 100%;
    margin-top: ${M2};
    margin-bottom: ${M2};
    display: flex;
    justify-content: space-between;
`

const handleClick = (event: React.MouseEvent): void => {
    if(typeof window ==='undefined') return 
    event.preventDefault()
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
} 

export const Footer = (): React.ReactElement => (
    <FooterTag>
    <P sm mb0 lightest>
      <a href="#top" onClick={handleClick}>
        Back to top &uarr;
      </a>
    </P>
    <P sm mb0 lightest>
      Ciarán Mahon &copy; {new Date().getFullYear()}
    </P>
  </FooterTag>
)