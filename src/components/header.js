import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImg from "./../images/icon-48x48.png"
import "../scss/navbar.scss"

// import { BsJustifyRight } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

const Header = ({ siteTitle, handleChange, open }) => {
  return (
    <header className="header-container">
      <div className="header">
        <Link to="/">
          <div className="logo">
            {/* <img src={LogoImg} alt="logo-image" /> */}
            <span>{"<"}</span>
            Wonde
            <span>{"/>"}</span>
          </div>
        </Link>

        <div className="navBar">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
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
            className="nav-link contact"
            activeClassName="active-link"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="nav-burger-close">
        {!open ? (
          <button onClick={handleChange}>
            {" "}
            <FaBars />
          </button>
        ) : (
          <button onClick={handleChange}>
            {" "}
            <CgClose />
          </button>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
