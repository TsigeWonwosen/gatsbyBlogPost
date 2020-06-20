import React from "react"
import "../scss/footer.scss"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="address">
        <Link to="/about/">Go to About</Link>
        <Link to="/task/">Go to Task</Link>
      </div>
      <div className="copyRight">
        © {new Date().getFullYear()}, Built with
        {"   "}
        <a href="https://www.gatsbyjs.org">{"  "}Wondeshi</a>
      </div>
    </footer>
  )
}
