import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.css'
import NavBar from "../components/Nav/NavBar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
