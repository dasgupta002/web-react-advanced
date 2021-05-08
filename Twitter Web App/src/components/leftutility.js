import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiHomeCircle, BiBell, BiHash } from 'react-icons/bi'
import { MdMailOutline, MdBookmarkBorder } from 'react-icons/md'
import { BsCardText } from 'react-icons/bs'
import { FaUserCircle, FaEllipsisH } from 'react-icons/fa'
import '../css/leftbar.css'

function LeftUtilityBar() {
    return (
        <div>
         <div className = "leftbar">
           <div className = "twitter">
             <AiOutlineTwitter color = "#1DA1F2" fontSize = "2.3rem" />
           </div>
           <div className = "icons">
             <BiHomeCircle color = "#1DA1F2" fontSize = "2rem" />
             <div>Home</div>
           </div>
           <div className = "icons">  
             <BiHash color = "#1DA1F2" fontSize = "2rem" />
             <div>Explore</div>
           </div>
           <div className = "icons">  
             <BiBell color = "#1DA1F2" fontSize = "2rem" />
             <div>Notifications</div>  
           </div>
           <div className = "icons">  
             <MdMailOutline color = "#1DA1F2" fontSize = "2rem" />
             <div>Messages</div>  
           </div>
           <div className = "icons">  
             <MdBookmarkBorder color = "#1DA1F2" fontSize = "2rem" />
             <div>Bookmarks</div>  
           </div>
           <div className = "icons">  
             <BsCardText color = "#1DA1F2" fontSize = "2rem" />
             <div>Lists</div>  
           </div>
           <div className = "icons">  
             <FaUserCircle color = "#1DA1F2" fontSize = "2rem" />
             <div>Profiles</div>  
           </div>
           <div className = "icons">  
             <FaEllipsisH color = "#1DA1F2" fontSize = "2rem" />
             <div>More</div>  
           </div>
           <div className = "icons">  
             <button>Tweet</button> 
           </div>
         </div>
        </div>
    )
}

export default LeftUtilityBar
