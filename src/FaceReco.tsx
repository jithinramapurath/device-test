import * as React from 'react';

import './App.css'

require('tracking')
require('tracking/build/data/face')
// require('tracking/build/data/eye')

const FaceReco: React.FC = () => {

    const [imageCaptured, setImageCaptured] = React.useState(false)

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
        const tracker = new tracking.ObjectTracker(['face'])
        tracking.track("#video", tracker, {})
        tracker.on('track', event => {
            console.log(event)
            context.clearRect(0, 0, "350", "350")
            event.data.forEach(rect => {
                console.log("react value ", rect)
                context.strokeStyle = "#F8E71C"
                context.lineWidth = 2     
                // setTimeout(() => {
                    context.strokeRect(rect.x,rect.y,"162","162")
                    if(rect.x > 110 && rect.x < 190 && rect.y > 110 && rect.y < 190) {
                    context.drawImage(videos, 0, 0, "350", "350");
                    // @ts-ignore
                   var dataURI = canvas.toDataURL('image/jpeg');
                   console.log(dataURI);
                   tracker.removeAllListeners()
                // @ts-ignore
                   setImageCaptured(true)
                    }
                //   }, 500);
            })
        })
    }

    return (
        <div className="Container">
            <br /><br /><br />
            <video id="video" ref={videoRef} width="350px" height="350px" />
            <canvas id="canvas" width="350px" height="350px" />
        </div>
    )
}

export default FaceReco;
