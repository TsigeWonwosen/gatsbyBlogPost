import React from "react"
import { Link } from "gatsby"

import * as styles from "../scss/logo.module.scss"
function Logo() {
  return (
    <Link to="/" className={styles.coffeeLogo}>
      <div className={styles.logoText}>
        <span className={styles.primary}>The</span>
        <span className={styles.secondary}>Ethiopian</span>
      </div>
    </Link>
  )
}

export default Logo
