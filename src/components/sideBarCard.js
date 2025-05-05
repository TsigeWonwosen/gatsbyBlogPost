import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import * as styles from "../scss/sidePost.module.scss"

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
      <div className={styles.post_card}>
        <Img
          className={styles.post_img}
          fluid={fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="computer"
        />
        <div className={styles.post_date}>
          <div className={styles.post_title}>
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <div className={styles.post_description}>
            <div>{body && <p>{body}</p>}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
