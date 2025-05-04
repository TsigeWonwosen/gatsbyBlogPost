import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../scss/blog-post.scss"
import { Ellipsis, MessageCircleMore, Sparkles, ThumbsUp } from "lucide-react"

export default function Post({ title, author, date, body, fluid, slug }) {
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
        <div className="post-data">
          <div className="user-avatar">
            <div className="avatar-initial">{author.charAt(0)}</div>
            <span>{author}</span>
          </div>
          <div className="post-title">
            <h3>{title}</h3>
          </div>
          <div>{body && <p>{body}</p>}</div>
          <div className="post-buttons">
            <section className="post-left">
              <Sparkles size={"16px"} style={{ color: "#FFEDBB" }} />
              <span>{date}</span>
              <div className="post-comment">
                <ThumbsUp size={"14px"} />
                <p className="post-like"> 1.2k</p>
              </div>
            </section>

            <button className="post-right">
              <MessageCircleMore size={"16px"} />
              <Ellipsis size={"15px"} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
