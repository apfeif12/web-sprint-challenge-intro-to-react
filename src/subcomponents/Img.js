import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  padding-top: 5%;
`;

export default function Img(props) {
  const { data } = props;
  return (
    <div>
      <StyledImg src={data.image} alt="char img"></StyledImg>
    </div>
  );
}
