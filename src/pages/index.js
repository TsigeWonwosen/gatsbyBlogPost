import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import BlogTemplate from "../templates/blogTemplates.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div> */}
      <ul style={{ listStyle: "none" }}>
        {allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <BlogTemplate
              title={post.node.frontmatter.title}
              path={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              body={post.node.excerpt}
              fluid={post.node.frontmatter.image.childImageSharp.fluid}
            />
          </li>
        ))}
      </ul>
      <Link to="/about/">Go to About</Link> <br />
      <Link to="/task/">Go to Task</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query FirstQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
