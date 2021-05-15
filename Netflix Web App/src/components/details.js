import React, { useState } from 'react'
import Trailer from '../components/trailer'
import '../css/detail.css'

function Details({ title, image, description, videoID }) {

    const [trailer, setTrailer] = useState(false);

    const handleClick = () => {
        setTrailer(!trailer);
    }

    return(
        <div>
            <div className = "info">
                <div className = "background">
                    <div className = "shadow"></div>
                    <img className = "image" src = { image } alt = "" />
                </div>
                <div className = "details">
                    <div className = "container">
                        <div className = "title">{ title }</div>
                        <div className = "description">{ description }</div>
                    </div>
                    <button className = "trailer" onClick = { handleClick }>Trailer</button>
                    {
                        trailer ? (
                            <Trailer videoID = { videoID }></Trailer>
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Details;