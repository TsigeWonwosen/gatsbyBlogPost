import React from "react"
import SocialLink from "./socialLink"
import { AiOutlineUpCircle } from "react-icons/ai"
import "../scss/footer.scss"

import { Link, useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div className="footer">
        <div className="address">
          <SocialLink />
        </div>
        <div className="copyRight">
          <div className="footer-left">
            <span>{data.site.siteMetadata.title}</span>
            <span>
              © {new Date().getFullYear()}, Built with{" "}
              <span>{data.site.siteMetadata.author}</span>
            </span>
          </div>
          <div className="footer-left">
            <Link to="/about/">Go to About</Link>
            <Link to="/task/">Go to Task</Link>
          </div>
        </div>
      </div>
      <div className="hero-upArrow">
        <a href="#home">
          <AiOutlineUpCircle />
        </a>
      </div>
    </footer>
  )
}
