import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: red;
`;
export default function LastKnown(props) {
  const { data } = props;
  return (
    <h4>
      <StyledSpan>
        LAST KNOWN LOCATION: <br></br>{" "}
      </StyledSpan>
      {data.location.name}
    </h4>
  );
}
