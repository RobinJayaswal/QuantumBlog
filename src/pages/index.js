import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkList from "../components/linkList"

const LEARN_MODULES = [
  {
    title: "Quantum Country",
    description:
      "Introductory essays with a built in spaced repitition system. Written by Michael Nielsen and Andy Matuschak.",
    path: "/quantum-country",
  },
]

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quantum Wiki" />
      <p>
        Resources to learn about quantum computing, along with exercise
        solutions.
      </p>
      <h2>Learn</h2>
      <LinkList items={LEARN_MODULES} />
    </Layout>
  )
}

export default BlogIndex

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
  }
`
