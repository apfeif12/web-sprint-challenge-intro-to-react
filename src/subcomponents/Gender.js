import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function Gender(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>GENDER: </StyledSpan>
      {data.gender}
    </h4>
  );
}
