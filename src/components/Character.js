import React from "react";
import styled from "styled-components";
import Name from "../subcomponents/Name.js";
import Img from "../subcomponents/Img.js";
import Species from "../subcomponents/Species.js";
import Gender from "../subcomponents/Gender.js";
import Status from "../subcomponents/Status.js";
import Episodes from "../subcomponents/Episodes.js";
import Origin from "../subcomponents/Origin.js";
import LastKnown from "../subcomponents/LastKnown.js";

const StyledDiv = styled.div`
  color: white;
  padding-left: 30%;
  padding-right: 30%;
  border: 5px;
  border-style: inset;
  border-color: white;
`;

export default function Character(props) {
  return (
    <div>
      {props.charData.map((data) => (
        <StyledDiv className="container">
          <Img data={data} />
          <Name data={data} />
          <Species data={data} />
          <Gender data={data} />
          <Status data={data} />
          <Episodes data={data} />
          <Origin data={data} />
          <LastKnown data={data} />
        </StyledDiv>
      ))}
    </div>
  );
}
