import * as React from 'react';
// import * as blazeface from '@tensorflow-models/blazeface';

import './App.css'

const FaceDetection: React.FC = () => {

    // // constar canvas = document.getElementById('canvas'),
    // // context = canvas.getContext('2d'),
    // // video = document.getElementById('webcam');

    // const [stream, setStream] = React.useState({
    //     access: false,
    //     recorder: null,
    //     error: ""
    // });

    // const [recording, setRecording] = React.useState({
    //     active: false,
    //     available: false,
    //     url: ""
    // });

    // const chunks = React.useRef([]);
    // const videoRef = React.useRef(null);

    // React.useEffect(() => {
    //     getVideo();
    // }, [videoRef]);

    // const captureImage = async() => {
    //     const player = document.getElementById('webcam');
    //     const canvas = document.getElementById('canvas');
    //     // @ts-ignore
    //     const context = canvas!.getContext('2d');
    //     context.drawImage(player,0,0,"350","350");
    //     const model = await blazeface.load();
    //     const returnTensors = false;
    //     // @ts-ignore
    //     const predictions = await model.estimateFaces(player, returnTensors);
    //     if (predictions.length > 0)
    //       {
    //        console.log(predictions);
    //        for (let i = 0; i < predictions.length; i++) {
    //        const start = predictions[i].topLeft;
    //        const end = predictions[i].bottomRight;
    //        var probability = predictions[i].probability;
    //        // @ts-ignore
    //        const size = [end[0] - start[0], end[1] - start[1]];
    //        // Render a rectangle over each detected face.
    //        context.beginPath();
    //        context.strokeStyle="green";
    //        context.lineWidth = "4";
    //        // @ts-ignore
    //        context.rect(start[0], start[1],size[0], size[1]);
    //        context.stroke();
    //        // @ts-ignore
    //        var prob = (probability[0]*100).toPrecision(5).toString();
    //        var text = prob+"%";
    //        context.fillStyle = "red";
    //        context.font = "13pt sans-serif";
    //        // @ts-ignore
    //        context.fillText(text,start[0]+5,start[1]+20);
    //         }
    //        }
    // }

    // const getVideo = () => {
    //     navigator.mediaDevices
    //         .getUserMedia({ audio: true, video: { width: 350, height: 350 } })
    //         .then(stream => {
    //             let video = videoRef.current;
    //             // @ts-ignore
    //             video.muted = true;
    //             // @ts-ignore
    //             video.srcObject = stream;
    //             // // @ts-ignore
    //             // video.setAttribute('playsinline', '');
    //             // @ts-ignore
    //             video.play();

    //             let mediaRecorder;
    //             try {
    //                 mediaRecorder = new MediaRecorder(stream, {
    //                     mimeType: "video/webm"
    //                 });
    //             } catch (err) {
    //                 console.log(err);
    //             }

    //             // @ts-ignore
    //             const track = mediaRecorder.stream.getTracks()[0];
    //             track.onended = () => console.log("ended");
    //         })
    //         .catch(err => {
    //             console.error("error:", err);
    //         });
    // };

    return (
        <div className="App">
            {/* <br /><br /><br />
            <button onClick={captureImage}>Capture image</button>
            <video id="webcam" ref={videoRef} />
            <canvas id="canvas" width="350px" height="350px" /> */}
        </div>
    );
}

export default FaceDetection;