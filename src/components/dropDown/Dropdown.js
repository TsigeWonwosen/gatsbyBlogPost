import React, { useState } from "react"
import { MenuItems } from "./menuItems"
import "./dropdown.scss"
import { Link } from "gatsby"

function Dropdown() {
  const [click, setClick] = useState(true)

  const handleClick = () => setClick(prevState => !prevState)

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {click &&
        MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default Dropdown
