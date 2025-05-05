import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SideBar from "../components/sideBar.js"
import Seo from "../components/seo"
import Post from "../components/post.js"
import Hero from "../components/hero/hero.js"

import AOS from "aos"
import "aos/dist/aos.css"

import "../scss/social-link.scss"

import { AnimatePresence } from "framer-motion"

import * as styles from "./../scss/blogPost.module.scss"
import RecommendedTopic from "../components/recommendedTopic.js"
import FollowSuggestions from "../components/FollowSuggestions.js"
const IndexPage = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  }, [])

  const { allMarkdownRemark } = data

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Seo title="Home" />
      <Hero />
      <section className={styles.container}>
        <div id="home" className={styles.homeTitle1}>
          <h2>Home</h2>
          <div className="underline"></div>
        </div>
        <div className={styles.row}>
          <div className={styles.col1}>
            <ul className={styles.blogPostContainer}>
              {allMarkdownRemark.edges.map(
                ({
                  node: {
                    excerpt,
                    id,
                    fields: { slug },
                    frontmatter: {
                      title,
                      date,
                      author,
                      image: {
                        childImageSharp: { fluid },
                      },
                    },
                  },
                }) => (
                  <li key={id}>
                    <Post
                      title={title}
                      date={date}
                      body={excerpt}
                      slug={slug}
                      fluid={fluid}
                      author={author}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className={styles.col2}>
            <div className={styles.popularBlog}>
              <SideBar />
            </div>
            <div className={styles.advert}>
              <RecommendedTopic />
            </div>
            <div className={styles.followSuggestionsContainer}>
              <FollowSuggestions />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query FirstQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
