import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            IntervalIdRef.current = setInterval(() => {
                setElapsTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(IntervalIdRef.current);
        } 
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsTime(0);
        setIsRunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let min = Math.floor(elapsedTime / (1000*60) % 60);
        let sec = Math.floor(elapsedTime / (1000)%60);
        let milSec = Math.floor(elapsedTime % 1000 / (10));

        hours = String(hours).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        milSec = String(milSec).padStart(2, "0");

        return `${hours}:${min}:${sec}:${milSec}`;
    }
    return (
        <div className="stop-watch-container">
        <div className="stopWatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
        </div>
    );
}

export default StopWatch;
