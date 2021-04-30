import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Suggestions({ videoData, newVideo, selectedVideoId }) {
    
    const changeFrameVideo = (data) => {
      newVideo(data);
    }
    
    return (
        <React.Fragment>
          { videoData.length > 0 && 
            videoData.map((data) => {
              if (data.id !== selectedVideoId) {
                return(
                  <ListGroup.Item onClick = { () => changeFrameVideo(data) } style = {{ cursor: 'pointer' }}>
                    <div style = {{ marginBottom: 10, padding: 10, display: "flex" }}>
                      <div>
                        <img src = { data.thumbnails.medium.url } height = "80px" alt = "listgroup video snap"/>
                      </div>
                      <div style = {{ paddingLeft: 5 }}>
                        <div className = "sugg-title">{ data.title }</div>
                        <div className = "sugg-channel">{ data.channel.title }</div>
                      </div>
                    </div>
                  </ListGroup.Item>
                 );
              }   
            }  
          )}
        </React.Fragment>
    )
}
