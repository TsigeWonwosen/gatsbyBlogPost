import { Link } from "gatsby"
import React, { useState } from "react"
import Dropdown from "./dropDown/Dropdown"
import { IoIosArrowDropdown } from "react-icons/io"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

import "../scss/navbar.scss"
import Logo from "./logo"
const Header = ({ handleChange, open }) => {
  const [dropdown, setDropdown] = useState(false)

  const url = typeof window !== "undefined" ? window.location.href : ""

  let headerStyle = ""
  if (
    url === "http://localhost:8000/" ||
    url === "https://wonde-blog.netlify.app/"
  ) {
    headerStyle = "header-container"
  } else {
    headerStyle = "header-container2"
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  return (
    <header className={headerStyle}>
      <div className="header">
        <Logo />

        <div className="navBar">
          <Link
            to="/"
            className="nav-link fromRight"
            activeClassName="active-link"
          >
            Home
          </Link>

          <Link
            to="/team"
            className="nav-link fromRight"
            activeClassName="active-link"
          >
            Teams
          </Link>
          <Link
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            to="#"
            className="nav-link nav-item"
            activeClassName="active-link"
          >
            Services{" "}
            <span className="dropdown">
              <IoIosArrowDropdown />{" "}
            </span>
            {dropdown && <Dropdown />}
          </Link>
          <Link
            to="/about"
            className="nav-link fromRight"
            activeClassName="active-link"
          >
            About
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
          <div className="nav-burger-menu">
            <button onClick={handleChange}>
              <FaBars />
            </button>
          </div>
        ) : (
          <div className="nav-burger-menu">
            <button onClick={handleChange}>
              <CgClose />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
