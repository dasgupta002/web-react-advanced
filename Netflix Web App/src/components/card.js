import React from 'react'
import '../css/card.css'

function Card({ data }) {
    return(
        <div>
            <div className = "card">
                <img src = { data.image } alt = "" />
            </div>
        </div>
    );
}

export default Card;