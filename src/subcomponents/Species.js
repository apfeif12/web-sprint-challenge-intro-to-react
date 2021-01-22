import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function Species(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>SPECIES: </StyledSpan>
      {data.species}
    </h4>
  );
}

// test