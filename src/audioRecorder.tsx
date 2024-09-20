// @ts-nocheck
import React, { useState, useRef } from "react";

export default function AudioRecorder() {
    const [streamAccess, setStreamAccess] = useState(false);
    const [recording1, setRecording1] = useState({
        active: false,
        available: false,
        url: ""
    });

    const [recording2, setRecording2] = useState({
        active: false,
        available: false,
        url: ""
    });

    const chunks1 = useRef([]);
    const chunks2 = useRef([]);
    const mediaRecorder1 = useRef(null);
    const mediaRecorder2 = useRef(null);
    const audioStream = useRef(null);

    const checkPermission = async () => {
        const constraints = { audio: true };

        try {
            audioStream.current = await navigator.mediaDevices.getUserMedia(constraints);
            alert("Got permission");
            setupRecorders();
            setStreamAccess(true);
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    };

    const getMediaType = () => {
        const browser = window.navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return browser[1] === 'Safari' ? "audio/mp4" : "audio/webm";
    };

    const setupRecorders = () => {
        mediaRecorder1.current = new MediaRecorder(audioStream.current, { mimeType: getMediaType() });
        mediaRecorder2.current = new MediaRecorder(audioStream.current, { mimeType: getMediaType() });

        mediaRecorder1.current.ondataavailable = (e) => {
            chunks1.current.push(e.data);
        };

        mediaRecorder1.current.onstop = () => {
            const url = URL.createObjectURL(new Blob(chunks1.current));
            chunks1.current = [];
            setRecording1({ active: false, available: true, url });
        };

        mediaRecorder2.current.ondataavailable = (e) => {
            chunks2.current.push(e.data);
        };

        mediaRecorder2.current.onstop = () => {
            const url = URL.createObjectURL(new Blob(chunks2.current));
            chunks2.current = [];
            setRecording2({ active: false, available: true, url });
        };
    };

    const startRecording = (recorder, setRecording) => {
        chunks1.current = []; // Clear previous chunks for each recording
        recorder.start();
        setRecording({ active: true, available: false, url: "" });
    };

    return (
        <div className="App">
            <br />
            <br />
            <br />
            {streamAccess ? (
                <div className="audio-container">
                    <h2>Recording 1</h2>
                    <button
                        className={recording1.active ? "active" : null}
                        disabled={recording1.active}
                        onClick={() => startRecording(mediaRecorder1.current, setRecording1)}
                    >
                        Start Recording 1
                    </button>
                    {recording1.active && <p>Recording in progress</p>}
                    <button
                        disabled={!recording1.active}
                        onClick={() => {
                            mediaRecorder1.current.stop();
                        }}
                    >
                        Stop Recording 1
                    </button>
                    {recording1.available && <audio controls src={recording1.url} />}

                    <h2>Recording 2</h2>
                    <button
                        className={recording2.active ? "active" : null}
                        disabled={recording2.active}
                        onClick={() => startRecording(mediaRecorder2.current, setRecording2)}
                    >
                        Start Recording 2
                    </button>
                    {recording2.active && <p>Recording in progress</p>}
                    <button
                        disabled={!recording2.active}
                        onClick={() => {
                            mediaRecorder2.current.stop();
                        }}
                    >
                        Stop Recording 2
                    </button>
                    {recording2.available && <audio controls src={recording2.url} />}
                </div>
            ) : (
                <button onClick={checkPermission}>Get Mic Access</button>
            )}
        </div>
    );
}
