import React, { useState, useRef } from "react";

export default function AudioRecorder() {
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

    const checkPermission = () => {

        const constraints = {
            'audio': true
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(
                tream => {
                    alert("Got permission")
                    getAccess()
                })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });
    }

    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            devices.forEach(function (device) {
                console.log(device.kind + ": " + device.label +
                    " id = " + device.deviceId);
            });
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });

        let browser = window.navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

        console.log("browser", browser[1])
        const getMediaType = () => {
           if(browser[1] === 'Safari') return "audio/mp4"
           else return "audio/webm"
        }

    function getAccess() {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((mic) => {
                let mediaRecorder;

                try {
                    mediaRecorder = new MediaRecorder(mic, {
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
                    setRecording({
                        active: true,
                        available: false,
                        url: ""
                    });
                };

                // @ts-ignore
                mediaRecorder.ondataavailable = function (e) {
                    console.log("data available");
                    // @ts-ignore
                    chunks.current.push(e.data);
                };

                // @ts-ignore
                mediaRecorder.onstop = async function () {
                    console.log("stopped");

                    const url = URL.createObjectURL(chunks.current[0]);
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
            .catch((error) => {
                console.log(error);
                setStream({ ...stream, error });
            });
    }

    return (
        <div className="App">
            <br />
            <br />
            <br />
            {stream.access ? (
                <div className="audio-container">
                    <button
                        // @ts-ignore
                        className={recording.active ? "active" : null}
                        disabled={recording.active}
                        // @ts-ignore
                        onClick={() => !recording.active && stream.recorder.start()}
                    >
                        Start Recording
                    </button>

                    {recording.active && <p>Recording in progress </p>}
                    <br />
                    <br />
                    <br />
                    <button
                        disabled={!recording.active}
                        onClick={() =>
                            // @ts-ignore
                            stream.recorder.stop()}>Stop Recording</button>
                    {recording.available && <audio controls src={recording.url} />}
                </div>
            ) : (
                <button onClick={checkPermission}>Geta Mic Access</button>
            )}
        </div>
    );

}
