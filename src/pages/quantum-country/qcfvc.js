import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const EXERCISES = [
  {
    title: "Exercise 1: Verify that HH = I",
    link: "https://www.notion.so/Exercise-1-7c696de5cb4d432eb771122e340d0646",
  },
  {
    title: "Exercise 2: Why is J unsuitable as a quantum gate?",
    link: "https://www.notion.so/Exercise-2-622c785ca8a74381a2152edd9eb7b18f",
  },
  {
    title:
      "Exercise 3: Explain why the output from the circuit is XH∣ψ⟩, not HX∣ψ⟩",
    link: "https://www.notion.so/Exercise-3-be7f2c2b84fc46b499631df54ebcd754",
  },
  {
    title: "Exercise 4: Distinguish ∣+⟩ and ∣-⟩ using Hadamard gate",
    link: "https://www.notion.so/Exercise-4-633fbedace27453cb9b7128a932a4472",
  },
  {
    title: "Exercise 5: Show that X is unitary.",
    link: "https://www.notion.so/Exercise-5-9f4fdac4eeac44a5873d83e084eed253",
  },
  {
    title: "Exercise 6: Show that I is unitary.",
    link: "https://www.notion.so/Exercise-6-6203712f432c4dae919a2192483934f6",
  },
  {
    title:
      "Exercise 7: Can you find an example of a 2 X 2 matrix that is unitary, and is not I, X, or H?",
    link: "https://www.notion.so/Exercise-7-5e9cf513bb164a9eb410dc7af6779a8c",
  },
  {
    title:
      "Exercise 8: Show that the Y and Z matrices are unitary, and so legitimate quantum gates.",
    link: "https://www.notion.so/Exercise-8-af26f9ec53564d2b844fd5cb2b0576e7",
  },
  {
    title:
      "Exercise 9: Show that for any matrix M and vector ∣ψ⟩, the following identity holds",
    link: "https://www.notion.so/Exercise-9-da3b195e9dfb43b09bc96461e80ebe36",
  },
  {
    title: "Exercise 10: Show that M|e_k⟩ is the kth column of the matrix M",
    link: "https://www.notion.so/Exercise-10-d18ffa5478d0402993bb03b172314072",
  },
  {
    title:
      "Exercise 11: Can you find single-qubit states so that applying a CNOT to the combined state changes the first qubit, i.e., the control qubit?",
    link: "https://www.notion.so/Exercise-11-745e508866ad41cf86c1d2d58544cf95",
  },
  {
    title:
      "Exercise 12: Show that the inverse of the CNOT gate is just the CNOT gate.",
    link: "https://www.notion.so/Exercise-12-f3c3dcfcd625487e85b320bb07502300",
  },
  {
    title:
      "Exercise 13: Show that the product of two unitary matrices U and V is also unitary.",
    link: "https://www.notion.so/Exercise-13-07935417f1324bb7a353472738c1a857",
  },
  {
    title:
      "Exercise 14: What’s a quantum circuit that can compute the NAND gate?",
    link: "https://www.notion.so/Exercise-14-25a4fd3f98984e01b18c07a66be30cf6",
  },
  {
    title:
      "Exercise 15: Can you find a way of implementing a NAND gate using just a single Toffoli gate and no other quantum gates?",
    link: "https://www.notion.so/Exercise-15-8ad3206a21cb42828ead7709e08e7fcd",
  },
  {
    title:
      "Exercise 16: Show that the inverse of the Toffoli gate is just the Toffoli gate.",
    link: "https://www.notion.so/Exercise-16-e9fe7df3fb6845468e77a79d633ffc98",
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
        <p
          style={{
            paddingTop: 25,
            marginBottom: 0,
            marginTop: 0,
            paddingBottom: 25,
            borderBottom: "solid #BFD3D3D3 thin",
          }}
        >
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
