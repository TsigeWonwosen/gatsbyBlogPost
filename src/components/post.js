import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import * as styles from "../scss/blogPost.module.scss"
import PostInfo from "./postInfo"

export default function Post({ title, author, date, body, fluid, slug }) {
  return (
    <Link to={`/posts${slug}`}>
      <div className={styles.BlogPost}>
        <Img
          className={styles.postImg}
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="computer"
        />
        <div className={styles.postData}>
          <div className={styles.userAvatar}>
            <div className={styles.avatarInitial}>{author.charAt(0)}</div>
            <span>{author}</span>
          </div>
          <div className={styles.postTitle}>
            <h3>{title}</h3>
          </div>
          <div>{body && <p>{body}</p>}</div>
          <PostInfo date={date} />
        </div>
      </div>
    </Link>
  )
}
