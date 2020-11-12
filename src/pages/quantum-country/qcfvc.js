import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const EXERCISES = [
  {
    title: "Exercise: Verify that HH = I",
    link: "https://www.notion.so/Exercise-1-7c696de5cb4d432eb771122e340d0646",
  },
  {
    title: "Exercise: Why is J unsuitable as a quantum gate?",
    link: "https://www.notion.so/Exercise-2-622c785ca8a74381a2152edd9eb7b18f",
  },
]

const QuantumCountry = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quantum Country" />
      <h4>Quantum Country — Quantum Computing for the Very Curious</h4>
      <a href="https://quantum.country/qcvc">Link</a>
      <h3>Exercises</h3>
      {EXERCISES.map(exercise => (
        <p>
          <a href={exercise.link} target="_blank">
            {exercise.title}
          </a>
        </p>
      ))}
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
  }
`
