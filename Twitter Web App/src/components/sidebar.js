import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import '../css/sidebar.css'

function Sidebar() {
    return (
        <div>
          <div className = "sidebar">
            <div className = "search">
              <AiOutlineSearch fontSize = "1.5rem" style = {{ paddingLeft: "2px", borderRadius: "50%" }} />
              <div className = "input">
                <input type = "search" placeholder = "Search Twitter . ." />
              </div>
            </div>
            <br></br>
            <div className = "container">
              <div className = "trends">
                <div className = "foryou">
                  Trends For You
                </div>
                <div className = "settings">
                  <BsGear fontSize = "1.5rem" style = {{ padding: "0.4rem" }} color = "#1DA1F2" />
                </div>
              </div>
              <div className = "worldwide">
                <div className = "shows">
                  Trending Worldwide 
                </div>
                <div className = "tag">
                  #worldnews
                </div>
                <div className = "people">
                  122k
                </div>
                <div className = "tweetmass">
                  5,097 people are tweeting this
                </div>
              </div>
              <div className = "worldwide">
                <div className = "shows">
                  Trending Worldwide 
                </div>
                <div className = "tag">
                  #covid19
                </div>
                <div className = "people">
                  227k
                </div>
                <div className = "tweetmass">
                  14,067 people are tweeting this
                </div>
              </div>
              <div className = "worldwide">
                <div className = "shows">
                  Trending Worldwide 
                </div>
                <div className = "tag">
                  #bidenvisa
                </div>
                <div className = "people">
                  547k
                </div>
                <div className = "tweetmass">
                  67,011 people are tweeting this
                </div>
              </div>
              <div className = "more">See more . .</div>
            </div>
          </div>            
        </div>
    )
}

export default Sidebar