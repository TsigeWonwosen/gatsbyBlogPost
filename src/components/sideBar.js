import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Post from "./sideBarSinglePost"
import "../scss/side-post.scss"
const SideBar = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(sideBarQuery)
  return (
    <div className="side-bar">
      <h4>Recent Blogs</h4>

      <ul>
        {edges.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: {
                title,
                date,
                image: {
                  childImageSharp: { fluid },
                },
              },
            },
          }) => (
            <li key={id}>
              <Post title={title} date={date} fluid={fluid} slug={slug} />
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default SideBar
// allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, sort: {order: DESC}) {

export const sideBarQuery = graphql`
  query SideQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            image {
              childImageSharp {
                fluid {
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
