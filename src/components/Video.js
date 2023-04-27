import React from 'react';
import ReactPlayer from 'react-player'
import './Video.css';
import Menu from '../Menu';
function Video(props) {

    const videoEnded = () => {
        alert("la video est terminée");
    }
    // const externalsource="https://www.youtube.com/watch?v=z5VwtC7Yvqo";
    const internalsource="assets/videos/Lacrim - Freestyle Act 6.mp4";
    return (
        <div className='player-wrapper'>
       <Menu/> 
            <ReactPlayer 
            url={internalsource}
            controls
            playingmuted
            width="60%"
            height="50%"
            className="player"
            onEnded={videoEnded}
            />
        </div>
    );
}

export default Video;
