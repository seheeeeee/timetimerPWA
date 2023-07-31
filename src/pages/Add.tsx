import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Timer, TimeInput } from "../components";

function Add() {
  const [time, setTime] = useState({ hours: 0, minutes: 0 });
  return (
    <div css={addPage}>
      <TimeInput time={time}></TimeInput>
      <Timer
        getSetTime={(newTime: any) => {
          setTime((prevTime) => ({ ...prevTime, ...newTime }));
        }}
      ></Timer>
    </div>
  );
}

const addPage = css``;

export default Add;
