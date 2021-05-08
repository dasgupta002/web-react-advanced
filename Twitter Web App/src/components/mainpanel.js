import React from 'react'
import { AiTwotoneStar, AiOutlinePicture, AiOutlineFileGif, AiOutlineAlignLeft, AiOutlineSmile, AiOutlineDown } from 'react-icons/ai'
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { BsUpload } from 'react-icons/bs'
import '../css/mainpane.css'

function MainUserPanel() {
    return (
        <div>
          <div className = "mainsegment">
            <div className = "home">
              <div className = "top">
                Home
              </div>
              <div className = "star">
                <AiTwotoneStar color = "#1DA1F2" fontSize = "2rem" />
              </div>
            </div>  
            <br></br>
            <div className = "create">
              <div className = "text">
                <div className = "profile">
                  <img src = "./images/profile_pic.jpg" style = {{ height: "35px", width: "35px", borderRadius: "50%" }} alt = "" />  
                </div>
                <input type = "post" placeholder = "What's happening . ." />
              </div>
              <div className = "buttonbar">
              <div className = "icon">
                <div className = "buttonicon">
                  <AiOutlinePicture fontSize = "1.5rem" color = "#1DA1F2" />
                </div>
                <div className = "buttonicon">
                  <AiOutlineFileGif fontSize = "1.5rem" color = "#1DA1F2" />
                </div>
                <div className = "buttonicon">
                  <AiOutlineAlignLeft fontSize = "1.5rem" color = "#1DA1F2" />
                </div>
                <div className = "buttonicon">
                  <AiOutlineSmile fontSize = "1.5rem" color = "#1DA1F2" />
                </div>
              </div>
              <button className = "tweet">Tweet</button>
            </div>
            </div>
            <div className = "posts">
              <div className = "tray">
                <div className = "user">
                  <img src = "./images/profile_pic.jpg" style = {{height: "30px", width: "30px", borderRadius: "50%"}} alt = "" />
                  <div className = "name">John Stones</div>
                  <div className = "twitterid">@ggstones</div>
                </div>
                <div className = "dropdown">
                  <AiOutlineDown fontSize = "1rem" />
                </div>
              </div>
              <div className = "quotes">
                If life were predictable it would cease to be life, and be without flavor.  
              </div>
              <br></br>
              <div className = "images">
                <img src = "./images/post.jpeg" style = {{ width: "100%", height: "18rem", objectFit: "fill" }} alt = "" />
              </div>
              <div className = "comment"> 
                <div className = "write">
                  <FaRegComment fontSize = "1.4rem" />
                </div>
                <div className = "write">
                  <FaRetweet fontSize = "1.4rem" />
                </div>
                <div className = "write">
                  <FaRegHeart fontSize = "1.4rem" />
                </div>
                <div className = "write">
                  <BsUpload fontSize = "1.4rem" />
                </div>
              </div>
            </div>  
          </div>       
        </div>
    )
}

export default MainUserPanel
