import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import StorefrontIcon from '@material-ui/icons/Storefront'
import '../css/nav.css'

function Navbar() {
    return (
        <div>
          <div className = "nav">
              <span>
                  <img src = "https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt = "logo" />
              </span>
              <span>Home</span>
              <span>TV Shows</span>
              <span>Movies</span>
              <span>Latest</span>
              <span>My List</span>
              <span>Kids</span>
              <span><SearchIcon /></span>
              <span><NotificationsIcon /></span>
              <span><StorefrontIcon /></span>
          </div>
        </div>
    )
}

export default Navbar