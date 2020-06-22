import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(90deg, rgba(118,129,250,1) 0%, rgba(200,150,200,0.5) 100%`,
      marginBottom: `0.2rem`,
      height: "50px",
      // border: `1px solid #333`,
    }}
  >
    <div
      style={{
        // border: `1px solid #ee3`,

        margin: `0 auto`,
        maxWidth: 1000,
        padding: `0.1rem 1rem`,
        display: `flex`,
        height: `100%`,
        textAlign: `center`,
        justifyContent: `space-between`,
      }}
    >
      <h4 style={{ margin: 0, height: `100%` }}>
        <Link
          to="/"
          style={{
            padding: `1rem`,
            color: `#F4F4FE`,
            textDecoration: `none`,
            // border: `1px solid #222`,
            display: `flex`,
            textAlign: `center`,
            justifyContent: `center`,
            height: `100%`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>

      <div
        style={{
          width: "30%",
          display: "flex",
          // border: `1px solid #f8f8fe`,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
        >
          <h5>About</h5>
        </Link>
        <Link
          to="/task"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
        >
          <h5>Tags</h5>
        </Link>
        <Link
          to="/team"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
        >
          <h5>Teams</h5>
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
