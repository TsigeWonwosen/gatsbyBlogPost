import React from "react"
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
    <footer className="footer">
      <div className="address">
        <Link to="/about/">Go to About</Link>
        <Link to="/task/">Go to Task</Link>
      </div>
      <div className="copyRight">
          © {new Date().getFullYear()}, Built with
          {"   "}
          <span>{data.site.siteMetadata.author}</span>
        <span>{data.site.siteMetadata.title}</span>
        
      </div>
    </footer>
  )
}
