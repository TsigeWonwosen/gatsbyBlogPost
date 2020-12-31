import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Post from "./sideBarSinglePost"

const SideBar = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(sideBarQuery)
  return (
    <div className="side-bar">
      <h4>Recent Blogs</h4>

      <ul
        style={{
          listStyle: "none",
          width: "90%",
          padding: "0.2rem",
          margin: "0.2rem auto",
        }}
      >
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

export const sideBarQuery = graphql`
  query SideQuery {
    allMarkdownRemark(
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
            # slug
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