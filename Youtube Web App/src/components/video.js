import React, { useEffect, useState } from 'react';
import Youtube from 'simple-youtube-api';
import SingleVideo from './singlevideo.js';
import Suggestions from './suggestions.js';
import { Col, Alert } from 'react-bootstrap';
import config from '../utils/config.js';

const youtube = new Youtube(config.apiKey);

export default function Video({ query }) {
    
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
      callYoutubeAPI();
    }, [query]);

    const callYoutubeAPI = async () => {
      const response = await youtube.searchVideos(query, 4);
      if (response.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setSelectedVideo(response[0]);
      setVideoList(response);
    }

    const selectedVideoCallback = (newVideoData) => {
      setSelectedVideo(newVideoData);
    }

    return (
        <React.Fragment>
          { error ? (
            <Col xs = {12} md = {8}> 
             <Alert variant = "dark" style = {{ fontSize: 14 }}>Something went wrong! Try again.</Alert>
            </Col>) : (
             <Col xs = {12} md = {8}>
               <SingleVideo videoDetail = { selectedVideo }></SingleVideo>
             </Col>
          )}
          { error ? null : (
             <Col xs = {12} md = {4}>
               <strong style = {{ fontSize: 30, paddingBottom: 60 }}>Suggestions</strong>
               <Suggestions videoData = { videoList } 
                            newVideo = { selectedVideoCallback }
                            selectedVideoId = { selectedVideo.id }             
               ></Suggestions>
             </Col>
          )}
        </React.Fragment>
    )
}