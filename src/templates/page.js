import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/sideBar"
import "../scss/singlePage.scss"

import Img from "gatsby-image"
import PostInfo from "../components/postInfo"
// import { authors } from "./authors"

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
      <Seo title={title} />
      <div className="row single-page-container">
        <div className="col1">
          <div className="title-singlePage">
            <h3>{title}</h3>
            <div className="blog-author">
              <div className="author-img">
                <span className="profile-img">{author.charAt(0)}</span>
                <span className="author">{author}</span>
                <button className="follow">Follow</button>
              </div>
              <div className="date-container">
                <span className="read-time">10 mins read.</span>
                <span className="date">{date}</span>
              </div>
            </div>
            <PostInfo date={date} />
          </div>
          <section className="single-post-container">
            <div className="single-post-img">
              <Img
                fluid={fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="computer"
                className={"post-hero-img"}
              />
              <p>Image from google.</p>
            </div>
            <div
              className="blogContainer"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html

      frontmatter {
        date(formatString: "MMM DD, YYYY")
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
