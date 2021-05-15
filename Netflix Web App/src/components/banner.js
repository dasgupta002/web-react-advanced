import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import '../css/banner.css'

function Banner() {
    return (
        <div>
          <div className = "banner">
            <img src = "https://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2018/08/Dark-German-series-Netflix.jpg?fit=1800,720&ssl=1" alt = "dark" />
            <h3>NETFLIX<small>ORIGINAL</small></h3>
            <h1>DARK</h1>
            <div className = "button_tray">
              <button className = "play">
                <PlayArrowIcon style = {{ fontSize: 22 }} />
              </button>
              <button className = "add">
                <AddIcon style = {{ fontSize: 22 }} />
              </button>
            </div>
            <div className = "intro">
              <p>
                Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese.
              </p>  
            </div>
          </div>    
        </div>
    )
}

export default Banner