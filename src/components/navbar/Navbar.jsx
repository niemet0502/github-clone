import React from 'react'
import "./Navbar.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_items_container">
        <GitHubIcon className="Navbar__GithubIcon" />
        <input type="text" placeholder="Search or jump to..." className="header_search_input" />
        <img src="https://github.githubassets.com/images/search-key-slash.svg" className="github_svg" alt=""/>
       
      </div>
      <div className="Navbar_icons_container">
        <NotificationsNoneIcon />
        <AddIcon />
      </div>
    </div>
  )
}

export default Navbar
