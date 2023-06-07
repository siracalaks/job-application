import React from 'react'
import { skillsData } from "./ModalData";
import {
    StyledButtonContainer,
    StyledSkillsContainer,
    StyledSkillButton,
  } from "./HeaderUi";
  import {
    Typography,
    Button,
    CircularProgress,
  } from "@mui/material";

const ModalSkills = (props) => {
  return (
    <>
        <Typography variant="h6" align="center" gutterBottom>
              Skills
            </Typography>
            <StyledSkillsContainer>
              {skillsData.map((skill) => (
                <StyledSkillButton
                  onClick={() => props.addRemoveSkill(skill)}
                  key={skill}
                  sx={{
                    backgroundColor: props.jobDetails.skills.includes(skill)
                      ? "red"
                      : "green",
                    // Diğer stil özelliklerini burada belirleyebilirsiniz
                  }}
                  variant="contained"
                >
                  {skill}
                </StyledSkillButton>
              ))}
            </StyledSkillsContainer>

            <Typography variant="body2" color="error" align="center">
              Lütfen en az bir adet yeteneğinizi seçiniz!
            </Typography>
            <StyledButtonContainer>
              <Button
                disabled={props.loading}
                onClick={props.handleSubmit}
                variant="contained"
                color="secondary"
              >
                {props.loading ? (
                  <CircularProgress color="secondary" size={22} />
                ) : (
                  "İş Ekle"
                )}
              </Button>
              <Button variant="contained" onClick={props.handleModalClose}>
                Vazgeç
              </Button>
            </StyledButtonContainer>
    </>
  )
}

export default ModalSkills