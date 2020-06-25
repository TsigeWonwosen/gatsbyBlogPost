import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/sideBar"
import "../scss/singlePage.scss"

import Img from "gatsby-image"

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    date,
    author,
    image: {
      childImageSharp: { fluid },
    },
  } = frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className="row">
        <div className="col1">
          <div className="title-singlePage">
            <h3>Single Post : {title}</h3>
            <div className="blog-author">
              <span>By - {author}</span>
              <span>{date}</span>
            </div>
          </div>
          <section className="single-product">
            <article>
              <Img
                fluid={fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="computer"
              />
            </article>
            <article>
              <div
                className="blog-post-container"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </article>
          </section>
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
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default PageTemplate
