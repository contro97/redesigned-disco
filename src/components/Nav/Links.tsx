import * as React from "react"
import { Link } from 'gatsby'
import s from 'styled-components'
import { Route } from '../../constants/routes'
import { BLACK } from '../../constants/colors'
import { 
    maxWidth,
    SHORT_ANIMATION_DURATION,
    M2,
    M1,
    DESKTOP,
} from '../../constants/measurements'

const Wrapper = s.div<{active?: boolean }>`
    ${maxWidth(DESKTOP)} {
        margin: ${M2} 0;
        transition: opacity ${SHORT_ANIMATION_DURATION + 100}ms ease;
        opacity: ${(props): number => (props.active ? 1 : 0)};
    }
`

const StyledLink = s(Link)<{}>`
    display: inline-block;
    text-decoration: none !important;
    color: ${BLACK};
    opacity: 0.5;
    margin: 0calc(${M1} + 0.5w);
    padding: 0 4px

    &:hover,
    &:focus,
    &:active {
        opacity: 1;
    }
`

const routes: [string, string][] = [
    ['Home', Route.HOME],
    ['Freelance', Route.FREELANCE],
    ['Projects', Route.PROJECTS],
    ['Books', Route.BOOKS],
    ['Thoughts', Route.THOUGHTS],
    ['Design', Route.DESIGN],
  ]

  interface ILinksProps {
    active: boolean;
    tabIndex?: number;
  }

export const Links = ({
    tabIndex,
    active,
}: ILinksProps): React.ReactElement => (
    <Wrapper active={active} role="menu">
        {routes.map(
            ([name, route]): React.ReactElement => {
                return(
                    <StyledLink
                    to={route}
                        key={route}
                        tabIndex={tabIndex}
                        role="menuItem"
                        >
                        {name}
                    </StyledLink>
                )
            },
        )}
    </Wrapper>
)