import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as styles from "../scss/sidePost.module.scss"

import SideBarCard from "./sideBarCard"
const SideBar = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(sideBarQuery)
  return (
    <div className={styles.side_bar}>
      <h4>Recent Blogs</h4>

      <ul className={styles.side_bar_list}>
        {edges.map(
          ({
            node: {
              excerpt,
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
              <SideBarCard
                title={title}
                date={date}
                fluid={fluid}
                slug={slug}
                body={excerpt}
              />
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
      sort: { frontmatter: { date: DESC } }
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
