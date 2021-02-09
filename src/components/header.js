import { Link } from "gatsby"
import React, { useState } from "react"
// import { Location } from "@reach/router"

import Dropdown from "./dropDown/Dropdown"
import "../scss/navbar.scss"

import { IoIosArrowDropdown } from "react-icons/io"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

const Header = ({ handleChange, open }) => {
  const [dropdown, setDropdown] = useState(false)

  const url = typeof window !== "undefined" ? window.location.href : ""
  console.log("url : ", url)

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
        <Link to="/">
          <div className="logo">
            <span>{"{"}</span>
            Wonde
            <span>{"}"}</span>
          </div>
        </Link>

        <div className="navBar">
          <Link
            to="/"
            className="nav-link fromRight"
            activeClassName="active-link"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link fromRight"
            activeClassName="active-link"
          >
            About
          </Link>
          <Link
            to="/task"
            activeClassName="active-link "
            className="nav-link fromRight"
          >
            Tags
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
            <span className="menu open"> Menu</span>
            <button onClick={handleChange}>
              <FaBars />
            </button>
          </div>
        ) : (
          <div className="nav-burger-menu">
            <h4 className="menu close">Close</h4>
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
