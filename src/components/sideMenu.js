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
      <ul className="sideBar-nav-links">
        {navLists.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>
                <button
                  type="button"
                  onClick={handleChange}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleChange()
                      e.preventDefault()
                    }
                  }}
                  className="nav-link-button"
                >
                  {item.name}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default sideMenu

const navLists = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/team", name: "Teams" },
  { url: "/task", name: "Tags" },
]
