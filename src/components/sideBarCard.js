import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../scss/blog-post.scss"
import { Ellipsis, MessageCircleMore, Sparkles, ThumbsUp } from "lucide-react"

export default function SideBarCard({
  title,
  author,
  date,
  body,
  fluid,
  slug,
}) {
  return (
    <Link to={`/posts${slug}`}>
      <div className="Blog-post">
        <Img
          className="post-img"
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="computer"
        />
        <div className="post-date">
          <div className="post-title">
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <div className="post-buttons">
            <div>{body && <p>{body}</p>}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
