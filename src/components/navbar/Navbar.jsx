import React from 'react'
import "./Navbar.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import NavbarItem from "../NavbarItem/NavbarItem"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import profil from "../../assets/images/profil.jpg"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_items_container">
        <GitHubIcon className="Navbar__GithubIcon" />
        <input type="text" placeholder="Search or jump to..." className="header_search_input" />
        <img src="https://github.githubassets.com/images/search-key-slash.svg" className="github_svg" alt=""/>
        <div className="NavbarItem__container">
          <NavbarItem title="Pull requests" />
          <NavbarItem title="Issues" />
          <NavbarItem title="Marketplace" />
          <NavbarItem title="Explore" />
        </div>
      </div>
      <div className="Navbar_icons_container">
        <NotificationsNoneIcon className="Right_Icon" />
        <AddIcon className="Right_Icon" />
        <ArrowDropDownIcon className=" ArrowIcon" />
        <img src="https://avatars.githubusercontent.com/u/62050249?s=460&u=0e0a1c398dac0b29e7283b2626b7f5b71fbddd0f&v=4" alt="" className="header_profil"/>
        <ArrowDropDownIcon className=" ArrowIcon" />
      </div>
    </div>
  )
}

export default Navbar
