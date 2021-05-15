import React from 'react'
import YouTube from 'react-youtube'
import '../css/trailer.css'

function Trailer({ videoID }) {

    const options = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    return (
        <div>
            <div>
                <YouTube className = "video" videoId = { videoID } opts = { options } />
            </div>
        </div>
    )
}

export default Trailer