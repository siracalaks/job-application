import React from "react";
import { differenceInMinutes } from "date-fns";
import {StyledBox, StyledButton, StyledHeader, StyledInfo, StyledLanguage, StyledLanguages} from './JobCardUi';


const JobCard = (props) => {
  return (
    <StyledBox>
      <StyledHeader my={2}>
        <span>{props.title}</span>
        <span>{props.companyName}</span>
      </StyledHeader>
      <StyledLanguages my={2}>
        <StyledLanguage>{props.skills[0]}</StyledLanguage>
        <StyledLanguage>{props.skills[1]}</StyledLanguage>
        <StyledLanguage>{props.skills[2]}</StyledLanguage>
      </StyledLanguages>
      <StyledInfo>
        <span>
          {differenceInMinutes(Date.now(), props.postedOn)} min ago |{" "}
          {props.type} | {props.location}
        </span>
        <StyledButton onClick={props.open} variant="contained">
          Detay
        </StyledButton>
      </StyledInfo>
    </StyledBox>
  );
};

export default JobCard;
