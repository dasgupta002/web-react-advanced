import React from 'react';

export default function SingleVideo({ videoDetail }) {
    return (
        <div>
          { videoDetail && (
             <div>
                <iframe width = "600" 
                        height = "350"  
                        src = { `https://www.youtube.com/embed/${videoDetail.id}` }
                        title = "random video searched from youtube"
                        frameborder = "0" 
                        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style = {{ paddingBottom: 30, paddingTop: 30 }}
                >
                </iframe>
                <p>
                  <strong style = {{ fontSize: 22 }}>{ videoDetail.title }</strong>
                  <h4>{ videoDetail.description }</h4>
                </p>
             </div>
          )}
        </div>
    )
}
