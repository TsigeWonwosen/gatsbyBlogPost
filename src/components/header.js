import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../scss/navbar.scss"

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <div
      className="hea"
      style={{
        margin: `0 auto`,
        maxWidth: "1000px",
        height: `100%`,
        display: `flex`,
        textAlign: `center`,
        alignItems: "center",
        justifyContent: `space-between`,
      }}
    >
      <Link to="/" className="logo">
        {siteTitle.substring(0, 6).toUpperCase()}
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
        <Link
          to="/contact"
          className="nav-link btn"
          activeClassName="active-link"
        >
          Contact
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
