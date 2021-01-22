import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function Status(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>STATUS: </StyledSpan>
      {data.status}
    </h4>
  );
}

