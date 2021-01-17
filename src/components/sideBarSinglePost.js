import React from "react"
import "../scss/blog-post.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function sideBarSinglePost({ title, date, fluid, slug }) {
  return (
    <div className="blog-post-container">
      <div className="Blog-post">
        <Img
          className="post-img"
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="computer"
        />
        <div className="sideBare-title">
          <h3>{title}</h3>
          <span>{date}</span>
        </div>

        <Link to={`/posts${slug}`} className="readMoreSide">
          Read More
        </Link>
      </div>
    </div>
  )
}
