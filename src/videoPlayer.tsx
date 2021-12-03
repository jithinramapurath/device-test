import * as React from 'react';
import ReactPlayer from 'react-player'

import './App.css'

const VideoPlayer: React.FC = () => {
    return ( 
        <div className="App">
         <ReactPlayer
            url='https://www.youtube.com/watch?v=GCsxgn4j8ag'
            controls={true}
            width="300px"
            height="300px"
        />
        </div>
     );
}
 
export default VideoPlayer;