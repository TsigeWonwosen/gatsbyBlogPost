import React from "react"
import { Link } from "gatsby"
import SocialLink from "./socialLink"
import "../scss/side-menu.scss"
function sideMenu({ active, handleChange }) {
  return (
    <div className={`side-menu ${active ? "active" : ""}`}>
      <div className="sideBar-logo">
        <Link to="/">
          <span>Wonde</span>
        </Link>
        <div className="social-link-container">
          <SocialLink />
        </div>
      </div>
      <ul className="sideBar-nav-links" onClick={handleChange}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/team">Teams</Link>
        </li>
        <li>
          <Link to="/task">Tags</Link>
        </li>
        <li className="contact-sideMenu">
          {" "}
          <Link to="/contact"> 🇪🇹 Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default sideMenu
