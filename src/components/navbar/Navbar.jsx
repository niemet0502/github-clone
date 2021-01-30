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
        <input type="text" placeholder=""/>
        I'm Navbar
      </div>
      <div className="Navbar_icons_container">
        <NotificationsNoneIcon />
        <AddIcon />
      </div>
    </div>
  )
}

export default Navbar
