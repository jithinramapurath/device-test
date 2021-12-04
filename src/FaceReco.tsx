import * as React from 'react';

import './App.css'

require('tracking')
require('tracking/build/data/face')

const FaceReco: React.FC = () => {

    const videoRef = React.useRef(null);

    React.useEffect(() => {
        captureImage()
        getVideo()
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 350, height: 350 } })
            .then(stream => {
                let video = videoRef.current;
                // @ts-ignore
                video.muted = true;
                // @ts-ignore
                video.srcObject = stream;
                // @ts-ignore
                video.setAttribute('playsinline', '');
                // @ts-ignore
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    const captureImage = () => {
        const videos = document.getElementById('video')
        const canvas = document.getElementById('canvas')
        // @ts-ignore
        const context = canvas.getContext('2d');
         // @ts-ignore
        const tracker = new tracking.ObjectTracker('face')
         // @ts-ignore
        tracking.track("#video", tracker, { camera: true })
         // @ts-ignore
        tracker.on('track', event => {
            // console.log(event)
            context.clearRect(0, 0, "350", "350")
             // @ts-ignore
            event.data.forEach(rect => {
                context.strokeStyle = "#ff0000"
                context.lineWidth = 2
                context.strokeRect(rect.x,rect.y,rect.width,rect.height)
            })
        })
    }

    return (
        <div className="Container">
            <br /><br /><br />
            {/* <button onClick={captureImage}>Capture image</button> */}
            <video id="video" ref={videoRef} width="350px" height="350px" />
            <canvas id="canvas" width="350px" height="350px" />
        </div>
    )
}

export default FaceReco;