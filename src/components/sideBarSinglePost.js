import React from "react"
import "../scss/blog-post.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function sideBarSinglePost({ title, date, fluid, slug }) {
  return (
    <Link to={`/posts${slug}`}>
      <div className="blog-post-container">
        <div className="Blog-post">
          <Img
            className="post-img"
            fluid={fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="computer"
          />
          <div className="sideBare-content">
            <div className="sideBare-title">
              <h3>{title}</h3>
              <span>{date}</span>
            </div>
            <button className="readMoreSide">Read More</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
