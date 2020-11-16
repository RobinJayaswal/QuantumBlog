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
  {
    title:
      "Exercise: Explain why the output from the circuit is XH∣ψ⟩, not HX∣ψ⟩",
    link: "https://www.notion.so/Exercise-3-be7f2c2b84fc46b499631df54ebcd754",
  },
  {
    title: "Exercise: Distinguish ∣+⟩ and ∣-⟩ using Hadamard gate",
    link: "https://www.notion.so/Exercise-4-633fbedace27453cb9b7128a932a4472",
  },
  {
    title: "Exercise: Show that X is unitary.",
    link: "https://www.notion.so/Exercise-5-9f4fdac4eeac44a5873d83e084eed253",
  },
  {
    title: "Exercise: Show that I is unitary.",
    link: "https://www.notion.so/Exercise-6-6203712f432c4dae919a2192483934f6",
  },
  {
    title:
      "Exercise: Can you find an example of a 2 X 2 matrix that is unitary, and is not I, X, or H?",
    link: "https://www.notion.so/Exercise-7-5e9cf513bb164a9eb410dc7af6779a8c",
  },
  {
    title:
      "Exercise: Show that the Y and Z matrices are unitary, and so legitimate quantum gates.",
    link: "https://www.notion.so/Exercise-8-af26f9ec53564d2b844fd5cb2b0576e7",
  },
  {
    title:
      "Exercise: Show that for any matrix M and vector ∣ψ⟩, the following identity holds",
    link: "https://www.notion.so/Exercise-9-da3b195e9dfb43b09bc96461e80ebe36",
  },
  {
    title: "Exercise: Show that M|e_k⟩ is the kth column of the matrix M",
    link: "https://www.notion.so/Exercise-10-d18ffa5478d0402993bb03b172314072",
  },
]

const QuantumCountry = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quantum Country" />
      <h2>Quantum Country — Quantum Computing for the Very Curious</h2>
      <a href="https://quantum.country/qcvc">https://quantum.country/qcvc</a>
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
