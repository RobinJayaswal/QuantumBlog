import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ModuleTemplate = ({ location, data, pageContext }) => {
  const { pages, path } = pageContext
  console.log(location)
  console.log(pageContext)
  return (
    <Layout location={location} title="Quantum Wiki">
      <h4>
        {location.pathname
          .split("/")
          .filter(el => el)
          .map(_.startCase)
          .join(" — ")}
      </h4>
      {pages.map(page => (
        <Link to={page.slug}>{page.title}</Link>
      ))}
    </Layout>
  )
}

export default ModuleTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
