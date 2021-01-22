import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function Origin(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>ORIGIN: </StyledSpan>
      {data.origin.name}
    </h4>
  );
}

// test