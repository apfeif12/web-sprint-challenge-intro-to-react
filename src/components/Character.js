import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: white;
  padding-left: 30%;
  padding-right: 30%;
  border: 5px;
  border-style: inset;
  border-color: white;
`;

const StyledImg = styled.img`
  padding-top: 5%;
`;

const StyledSpan = styled.span`
  color: red;
`;

const StyledH2 = styled.h2`
  text-decoration: underline;
`;

export default function Character(props) {
  return (
    <div>
      {props.charData.map((data) => (
        <StyledDiv className="container">
          <StyledImg src={data.image} alt="char img"></StyledImg>
          <StyledH2>
            <StyledSpan>Name: </StyledSpan>{data.name}
          </StyledH2>
          <h4>
            <StyledSpan>Species: </StyledSpan>{data.species}
          </h4>
          <h4>
            <StyledSpan>Gender: </StyledSpan>{data.gender}
          </h4>
          <h4>
            <StyledSpan>Status: </StyledSpan>{data.status}
          </h4>
          <h4>
            <StyledSpan>Episodes: </StyledSpan>{data.episode.length}
          </h4>
          <h3>
            <StyledSpan>Origin: </StyledSpan>{data.origin.name}
          </h3>
          <h3>
            <StyledSpan>LAST KNOWN LOCATION: </StyledSpan> <br></br>
            {data.location.name}
          </h3>
        </StyledDiv>
      ))}
    </div>
  );
}
