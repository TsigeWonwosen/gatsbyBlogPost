import React, { useEffect } from "react"
import { graphql } from "gatsby"
// import { Location } from "@reach/router"

import Layout from "../components/layout"
import SideBar from "../components/sideBar"
import SEO from "../components/seo"
import Post from "../components/post.js"
import Hero from "../components/hero/hero.js"

import AOS from "aos"
import "aos/dist/aos.css"

import "../scss/social-link.scss"

import { AnimatePresence } from "framer-motion"

import "./../scss/blog-post.scss"
const IndexPage = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  }, [])

  const { allMarkdownRemark } = data

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        <SEO title="Home" />
        <Hero />
        <section className="container">
          <div id="home" className="home-title-1">
            <h2>Home</h2>
            <div className="underline"></div>
          </div>
          <div className="row">
            <div className="col1">
              <h4>New Blogs</h4>
              <ul style={{ listStyle: "none" }}>
                {allMarkdownRemark.edges.map(
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
                    <li key={id} data-aos="zoom-in-up" data-aos-duration="1000">
                      <Post
                        title={title}
                        date={date}
                        body={excerpt}
                        slug={slug}
                        fluid={fluid}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col2" data-aos="fade-left" data-aos-duration="750">
              <div className="popular-blog">
                <SideBar />
              </div>
              <div className="advert">
                <h4>Advertisement </h4>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </AnimatePresence>
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
