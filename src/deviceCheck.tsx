import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from 'react-player'

import './App.css'

export default function VideoRecorder() {
    const [stream, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
    });

    const [recording, setRecording] = useState({
        active: false,
        available: false,
        url: ""
    });

    const chunks = useRef([]);
    const videoRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);


    let browser = window.navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

    console.log("browser", browser[1])
    const getMediaType = () => {
       if(browser[1] === 'Safari') return "video/mp4"
       else return "video/webm"
    }

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: { width: 300, height: 300 } })
            .then(stream => {
                let video = videoRef.current;
                // @ts-ignore
                video.muted = true;
                // @ts-ignore
                video.setAttribute("playsinline", true);
                // @ts-ignore
                video.srcObject = stream;
                // @ts-ignore
                video.play();
                let mediaRecorder;
                try {
                    mediaRecorder = new MediaRecorder(stream, {
                        mimeType: getMediaType()
                    });
                } catch (err) {
                    console.log(err);
                }

                // @ts-ignore
                const track = mediaRecorder.stream.getTracks()[0];
                track.onended = () => console.log("ended");

                // @ts-ignore
                mediaRecorder.onstart = function () {
                    console.log("Video recording started");
                    setRecording({
                        active: true,
                        available: false,
                        url: ""
                    });
                };

                // @ts-ignore
                mediaRecorder.ondataavailable = function (e) {
                    console.log("data available", e.data);
                    // @ts-ignore
                    chunks.current.push(e.data);
                };

                // @ts-ignore
                mediaRecorder.onstop = async function () {
                    console.log("stopped");

                    const url = URL.createObjectURL(chunks.current[0]);
                    console.log('url', url)
                    chunks.current = [];

                    setRecording({
                        active: false,
                        available: true,
                        url
                    });
                };

                setStream({
                    ...stream,
                    access: true,
                    // @ts-ignore
                    recorder: mediaRecorder
                });

            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    return (
        <div className="App">
            <div className="audio-container">
                <br />
                <br />
                <br />
                <button
                    disabled={recording.active}
                    // @ts-ignore
                    onClick={() => !recording.active && stream.recorder.start()}
                >
                    Start Recording
                </button>
                <br />
                <br />
                <br />
                <button disabled={!recording.active}
                    onClick={() =>
                        // @ts-ignore
                        stream.recorder.stop()}>Stop Recording</button>
                {/* {recording.available && <video controls src={recording.url} />} */}
                {recording.available && <ReactPlayer
                    url={recording.url}
                    controls={true}
                    width="300px"
                    height="300px"
                />}
            </div>
            <br />
            <br />
            <br />
    
            {/* <div className="control"><Switch {...label} defaultChecked size="small" /></div> */}
            <video id="player" ref={videoRef} />
        </div>
    );

}

