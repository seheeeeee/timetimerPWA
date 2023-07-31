import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TimerType {
  getSetTime: Function;
}
const Timer = ({ getSetTime }: TimerType) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0 });

  const handleTouchMove = (event: any) => {
    const touches = event.touches as TouchList;
    const { clientX, clientY } = touches[0];
    const clockContainer = document.getElementById("clock-container");
    const clockRect = clockContainer
      ? clockContainer.getBoundingClientRect()
      : { left: 0, top: 0, width: 0, height: 0 };
    const centerX = clockRect.left + clockRect.width / 2;
    const centerY = clockRect.top + clockRect.height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // 시침의 각도를 계산합니다.
    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    const hour = Math.floor(((angle + 360) % 360) / 30);
    const minute = Math.floor(((angle + 360) % 30) * 2);

    setTime((prevTime) => ({ ...prevTime, hours: hour, minutes: minute }));
  };

  const getCirclePath = (radius: number, angle: number) => {
    const centerX = 110;
    const centerY = 110;
    const startAngle = 0;
    const endAngle = angle;
    const startRadians = (startAngle - 90) * (Math.PI / 180);
    const endRadians = (endAngle - 90) * (Math.PI / 180);
    const x1 = centerX + radius * Math.cos(startRadians);
    const y1 = centerY + radius * Math.sin(startRadians);
    const x2 = centerX + radius * Math.cos(endRadians);
    const y2 = centerY + radius * Math.sin(endRadians);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const pathData = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;

    return pathData;
  };

  const calculateCirclePath = () => {
    const radius = 110;
    const angle = (time.hours % 12) * 30 + time.minutes / 2;

    return getCirclePath(radius, angle);
  };
  useEffect(() => {
    getSetTime(time);
  }, [time]);
  return (
    <div css={timerStyle}>
      <div className="clock-timer-container">
        <div
          id="clock-container"
          className="clock"
          onTouchMove={handleTouchMove}
        >
          <div
            className="hour-hand"
            style={{
              transform: `rotate(${time.hours * 30 + time.minutes / 2}deg)`,
            }}
          />
          <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg">
            {/* <path fill="#f0f0f0" d={calculateCirclePath()} /> */}
            <path fill="#ff0000" d={calculateCirclePath()} />
          </svg>
        </div>
        <div className="timer-display">
          <span>{time.hours.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{time.minutes.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

const timerStyle = css`
  margin-top: 20px;
  .clock-timer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
  }

  .clock {
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: #f0f0f0;
    margin-bottom: 20px;
  }

  .hour-hand {
    position: absolute;
    left: 50%;
    bottom: 50%;
    width: 1px;
    height: 110px;
    background-color: black;
    transform-origin: bottom;
  }
`;

export default Timer;
