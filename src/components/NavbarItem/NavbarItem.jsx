import React from 'react'
import "./NavbarItem.css"
function NavbarItem({title}) {
  return (
    <a className="NavbarItem">
      {title}
    </a>
  )
}

export default NavbarItem
