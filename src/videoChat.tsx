import React, { useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';

import './App.css'

const VideoChat = () => {
    const videoHeight = 480
    const videoWidth = 640
    const [initalizing, setInitalizing] = useState(false)
    const videoRef = useRef
    const canvasRef = useRef

    useEffect(() => {
        const loadmodels = async () => {
            const MODEL_URL = "../public/models"
            setInitalizing(true)
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)

            ]).then(startVideo)
        }
        loadmodels()
    }, [])

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {}
            // @ts-ignore
        }, stream => videoRef.current.srcObject = stream)
    }

    const handleVideoOnPlay = () => {
        setInterval(async () => {
            if (initalizing) {
                setInitalizing(false);
            }
            // @ts-ignore
            const detection = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            console.log(detection)
        }, 100)

    }

    return (
        <div className="App">
            <video ref={videoRef} autoPlay height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} />
            <canvas ref={canvasRef} />
        </div>
    );
}

export default VideoChat;
