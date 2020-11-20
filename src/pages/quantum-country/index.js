import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LinkList from "../../components/linkList"

const ESSAYS = [
  {
    path: "/quantum-country/qcfvc",
    title: "Quantum Computing for the Very Curious",
  },
  {
    path: "/quantum-country/2-how-the-quantum-search-algorithm-works",
    title: "How the Quantum Search Algorithm Works",
  },
]

const QuantumCountry = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // need a regex that finds only those pages where the route matches quantum-country and has only
  // one subsequent part of the path
  const links = data.allSitePage
  console.log(links)
  const relevantLinks = links.edges.filter(
    ({ node: { path } }) => path.split("/").length === 4
  )

  // at this point it should be automated which chapters exist
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quantum Country" />
      <h2>
        <a href="https://quantum.country/">https://quantum.country/</a>
      </h2>
      <blockquote>
        A free introduction to quantum computing and quantum mechanics. By
        working through these essays, you will understand in detail all the
        basic principles of quantum computing and quantum mechanics, plus two
        important applications: the quantum search algorithm and quantum
        teleportation.
      </blockquote>
      <h3>Exercises by Essay</h3>
      <LinkList items={ESSAYS} />
    </Layout>
  )
}

export default QuantumCountry

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    allSitePage(filter: { path: { regex: "/quantum-country/" } }) {
      edges {
        node {
          path
        }
      }
    }
  }
`
