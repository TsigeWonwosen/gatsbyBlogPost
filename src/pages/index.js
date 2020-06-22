import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SideBar from "../components/sideBar"
import SEO from "../components/seo"
import BlogTemplate from "../templates/blogTemplates.js"

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
            {allMarkdownRemark.edges.map(
              ({
                node: {
                  excerpt,
                  id,
                  frontmatter: {
                    title,
                    slug,
                    date,
                    image: {
                      childImageSharp: { fluid },
                    },
                  },
                },
              }) => (
                <li key={id}>
                  <BlogTemplate
                    title={title}
                    path={slug}
                    date={date}
                    body={excerpt}
                    fluid={fluid}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="col2">
          <div className="popular-blog">
            <SideBar />
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
