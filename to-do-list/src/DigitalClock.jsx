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
    function FormatTime() {
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours >= 12 ? "Pm" : "Am";

        hours = hours % 12  || 12;

        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridiem}`;
    }
    function padZero(number) {
        return (number < 10 ? "0" : "") + number; 
    }
    return (
    <>
      <div className="clock-container">
        <div className="clock">
            <span>{FormatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
