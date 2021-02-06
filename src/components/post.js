import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../scss/blog-post.scss"

export default function Post({ title, date, body, fluid, slug }) {
  return (
    <Link to={`/posts${slug}`} className="readMore">
      <div className="blog-post-container">
        <div className="Blog-post">
          <Img
            className="post-img"
            fluid={fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="computer"
          />
          <div className="post-title">
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <div>{body && <p>{body}</p>}</div>
        </div>
        <button className="readMore">Read More</button>
      </div>
    </Link>
  )
}
