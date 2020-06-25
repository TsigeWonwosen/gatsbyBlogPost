import React from "react"
import "../scss/blog-post.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Template({ title, date, body, fluid, slug }) {
  return (
    <div className="blog-post-container">
      <Link to={`${slug}`}>
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
          {body && <p>{body}</p>}
          <Link to={`${slug}`} className="readMore">
            Read More
          </Link>
        </div>
      </Link>
    </div>
  )
}
