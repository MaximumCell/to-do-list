import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]);
    function formatTime() {
        
    }
    return (
    <>
      <div className="clock-container">
        <div className="clock">
            <span>00:00:00</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
