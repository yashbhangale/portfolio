import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <Seo title="Yash Bhangale" />
    <Layout>
      <Header />
      <div className="container">
        <LsDisplay text="~ $ls -l" delay="natural"></LsDisplay>
      </div>
    </Layout>
  </>
)

export default IndexPage
