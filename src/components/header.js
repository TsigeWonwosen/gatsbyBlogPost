import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../scss/blog-post.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(90deg, rgba(50,60,200,1) 0%,rgba(200,90,110,0.7) 50%, rgba(60,150,200,0.5) 100%`,
      marginBottom: `0.2rem`,
      height: "50px",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0.1rem 1rem`,
        display: `flex`,
        height: `100%`,
        textAlign: `center`,
        alignItems: "center",
        justifyContent: `space-between`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `#F4F4F4`,
            textDecoration: `none`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            height:"100%",
            maxHeight: `40%`,
            fontSize:"1.08rem",
            fontFamily:"bold"
          }}
        >
          {siteTitle}
        </Link>
     

      <div className="navBar">
        <Link to="/about" className="nav-link" activeClassName="active-link">
          About
        </Link>
        <Link to="/task" activeClassName="active-link" className="nav-link">
          Tags
        </Link>
        <Link to="/team" className="nav-link" activeClassName="active-link">
          Teams
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
