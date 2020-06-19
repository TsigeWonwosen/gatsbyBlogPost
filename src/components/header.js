import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `0.2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0.1rem 1rem`,
        display: `flex`,
        textAlign: `center`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            padding: `1rem`,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `1rem`,
        }}
      >
        <h4>About</h4>
      </Link>
      <Link
        to="/task"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `1rem`,
        }}
      >
        <h4>Tags</h4>
      </Link>
      <Link
        to="/team"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `1rem`,
        }}
      >
        <h4>Teams</h4>
      </Link>
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
