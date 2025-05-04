import React from "react"
import { Ellipsis, MessageCircleMore, Sparkles, ThumbsUp } from "lucide-react"
// import "../scss/blog-post.scss"

function PostInfo({ date }) {
  return (
    <div className="post-buttons">
      <section className="post-left">
        <Sparkles size={"16px"} style={{ color: "#FFC017" }} />
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
  )
}

export default PostInfo
