import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SideBar from "../components/sideBar"
import Seo from "../components/seo"
import Post from "../components/post.js"
import Hero from "../components/hero/hero.js"

import AOS from "aos"
import "aos/dist/aos.css"

import "../scss/social-link.scss"

import { AnimatePresence } from "framer-motion"

import "./../scss/blog-post.scss"
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
      <section className="container">
        <div id="home" className="home-title-1">
          <h2>Home</h2>
          <div className="underline"></div>
        </div>
        <div className="row">
          <div className="col1">
            <ul className="blog-post-container">
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
          <div className="col2">
            <div className="popular-blog">
              <SideBar />
            </div>
            <div className="advert">
              <RecommendedTopic />
            </div>
            <div className="follow-suggestions-container">
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
