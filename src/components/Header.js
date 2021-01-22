import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-decoration: underline;
  color: white;
`;

export default function Header() {
  return (
    <div>
      <StyledH1 className="Header">Rick and Morrrrrrrrty Characters!</StyledH1>
    </div>
  );
}
