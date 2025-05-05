import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/sideBar"
import * as styles from "../scss/singlePage.module.scss"

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
      <div className={styles.singlePageContainer}>
        <div className={styles.col1}>
          <div className={styles.titleSinglePage}>
            <h3>{title}</h3>
            <div className={styles.blogAuthorContainer}>
              <div className={styles.authorImg}>
                <span className={styles.profileImg}>{author.charAt(0)}</span>
                <span className={styles.author}>{author}</span>
                <button className={styles.follow}>Follow</button>
              </div>
              <div className={styles.dateContainer}>
                <span className={styles.readTime}>10 mins read.</span>
                <span className={styles.date}>{date}</span>
              </div>
            </div>
            <PostInfo date={date} />
          </div>
          <section className={styles.singlePostContainer}>
            <div className={styles.singlePostImg}>
              <Img
                fluid={fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="computer"
                className={styles.postHeroImg}
              />
              <p>Image from google.</p>
            </div>
            <div
              className={styles.blogContainer}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
        </div>
        <div className={styles.col2}>
          <div className={styles.popularBlog}>
            <SideBar />
          </div>
          <div className={styles.advert}>
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
