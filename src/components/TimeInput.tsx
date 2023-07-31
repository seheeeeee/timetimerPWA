import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface timeInputType {
  time: { hours: number; minutes: number };
}
function TimeInput({ time }: timeInputType) {
  const [hours, setHours] = useState(time.hours);
  const [minutes, setMinutes] = useState(time.minutes);
  useEffect(() => {
    const { hours: h, minutes: m } = time;
    setHours(h);
    setMinutes(m);
  }, [time]);
  return (
    <div css={inputBox}>
      <input
        type="number"
        value={hours}
        onChange={(e) => {
          setHours(parseInt(e.target.value));
        }}
      />
      &nbsp; : &nbsp;
      <input
        type="number"
        value={minutes}
        onChange={(e) => {
          setMinutes(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

const inputBox = css`
  margin: 50px 0 0 0;
  text-align: center;
`;

export default TimeInput;
