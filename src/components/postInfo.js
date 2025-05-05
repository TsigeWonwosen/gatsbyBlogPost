import React from "react"
import { Ellipsis, MessageCircleMore, Sparkles, ThumbsUp } from "lucide-react"
import * as styles from "../scss/blogPost.module.scss"

function PostInfo({ date }) {
  return (
    <div className={styles.postInfoContainer}>
      <section className={styles.postLeft}>
        <Sparkles size={"16px"} style={{ color: "#FFC017" }} />
        <span>{date}</span>
        <div className={styles.postComment}>
          <ThumbsUp size={"14px"} />
          <p className={styles.postLike}> 1.2k</p>
        </div>
      </section>

      <button className={styles.postRight}>
        <MessageCircleMore size={"16px"} />
        <Ellipsis size={"15px"} />
      </button>
    </div>
  )
}

export default PostInfo
