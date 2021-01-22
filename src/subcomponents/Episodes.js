import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function Episodes(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>EPISODES: </StyledSpan>
      {data.episode.length}
    </h4>
  );
}
