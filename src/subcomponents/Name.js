import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  text-decoration: underline;
`;
const StyledSpan = styled.span`
  color: red;
`;
export default function Name(props) {
  const { data } = props;
  return (
    <div>
      <StyledH2>
        <StyledSpan>NAME: </StyledSpan>
        {data.name}
      </StyledH2>
    </div>
  );
}
