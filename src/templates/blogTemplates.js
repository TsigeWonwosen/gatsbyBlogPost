import React from "react"
import "../scss/blog-post.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Template({ title, date, body, fluid, path }) {
  return (
    <div className="blog-post-container">
      <Link to={path}>
        <div className="blog-post">
          <Img
            fluid={fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="computer"
          />
          <div className="post-title">
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <p>{body}</p>
          <Link to={path} className="readMore">
            Read More
          </Link>
        </div>
      </Link>
    </div>
  )
}
