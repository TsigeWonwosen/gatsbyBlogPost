import React from "react"
import { graphql } from "gatsby"

import BlogTemplate from "../templates/blogTemplates.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout style={{ height: "100%" }}>
      <SEO title="Home" />

      <div style={{ maxWidth: `300px`, marginBottom: `1rem`, margin: `auto` }}>
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col1">
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
        </div>
        <div className="col2">
          <div className="popular-blog">
            {" "}
            <img
              src="https://via.placeholder.com/270x400/0000FF/FFFFFFF?Text=wondeshi.com"
              alt="placeholder"
            />
          </div>
          <div className="advert">
            <h4>Advertisement </h4>
          </div>
        </div>
      </div>
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
                fluid(maxWidth: 200, maxHeight: 150) {
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
