import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoRecorder from './deviceCheck'
import AudioRecorder from './audioRecorder'
import Home from './home';
import VideoPlayer from './videoPlayer'

const App = () => {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/device-test" element={<Home />} />
          <Route path="/video" element={<VideoRecorder />} />
          <Route path="/audio" element={<AudioRecorder />} />
          <Route path="/playVideo" element={<VideoPlayer />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
