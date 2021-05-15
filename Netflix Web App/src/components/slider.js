import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import Details from '../components/details'
import Carousel from 'react-elastic-carousel'
import { movies } from '../data/movies.js'
import '../css/slider.css'

function Slider() {

    const [buttonBool, setButtonBool] = useState(false);
    const [play, setPlay] = useState();

    useEffect(() => {
        setPlay(play);
    }, [play]);    
    
    const handleClick = (index, event) => { 
        setPlay(index);
        setButtonBool(!buttonBool);
    }    

    const movieToPlay = play;

    const movieForTrailer = [
        movies[movieToPlay]
    ];
    
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 500, itemsToShow: 3 },
        { width: 780, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <div>
            <div className = "slide">
                <Carousel breakPoints = { breakPoints }>
                    {
                        movies.map((movie, index) => (
                            <span key = { index }>
                                <button onClick = { handleClick.bind(this, index) }>
                                    <Card data = { movie }></Card>
                                </button>
                            </span>
                        ))
                    }
                </Carousel>
                
                {
                    buttonBool && movieForTrailer.map((movie, index) => (
                        <span key = { index }>
                            <Details title = { movie.title }  image = { movie.imageBg } description = { movie.description } videoID = { movie.videoId }></Details>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider