import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header css={headerStyle}>
      <button>setting</button>
      <h1>TimeTimer</h1>
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        add
      </button>
    </header>
  );
}

const headerStyle = css`
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background-color: palegreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
export default Header;
