import React from 'react'
import { P, Row, Col, Button } from '../shared'
import { M1 } from '../../constants/measurements'
import { Route } from '../../constants/routes'

export const Technologies = (): React.ReactElement => (
    <>
    <Row margin={M1}>
        <Col margin ={M1} sm={12} md={6}>
            <P bold mb2>
                General Purpose
            </P>
            <P>Typescript, Javascript, Python, Java.</P>
            <P bold mb2>
                Web
            </P>
            <P>React, Angular, Redux, HTML, CSS, SCSS</P>
            <P bold mb2>
                Mobile
            </P>
            <P> Unity, React Native </P>
        </Col>

        <Col margin={M1} sm={12} md={6}>
            <P bold mb2>
                API
            </P>
            <P>Node, Spring, Express, Serverless</P>
            <P bold mb2>
                Databases & Deployment
            </P>
            <P>
                Firebase, Postgres, AWS, Terraform, Jenkins
            </P>
            <P bold mb2>
                Data
            </P>
            <P> SQL, Jupyter Notebooks, Numpy Pandas, Snowflake, </P>
        </Col>
    </Row>
    <Button to={Route.PROJECTS}>See my projects &rarr;</Button>
    </>
)