import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoRecorder from './deviceCheck'
import AudioRecorder from './audioRecorder'
import Home from './home';
import VideoPlayer from './videoPlayer'
import Face from './FaceReco'

const App = () => {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/device-test" element={<Home />} />
          <Route path="/video" element={<VideoRecorder />} />
          <Route path="/audio" element={<AudioRecorder />} />
          <Route path="/playVideo" element={<VideoPlayer />} />
          <Route path="/face" element={<Face />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
