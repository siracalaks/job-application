import React, { useState } from "react";
import {
  StyledModal,
  StyledModalContent,
  StyledIconButton,
} from "./HeaderUi";
import {
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { initialState } from "./ModalData";
import ModalSkills from "./ModalSkills";
import ModalForm from "./ModalForm";

const HeaderModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) => {
    const isSkillIncluded = jobDetails.skills.includes(skill);

    if (isSkillIncluded) {
      setJobDetails((oldState) => ({
        ...oldState,
        skills: oldState.skills.filter((s) => s !== skill),
      }));
    } else {
      setJobDetails((oldState) => ({
        ...oldState,
        skills: [...oldState.skills, skill],
      }));
    }
  };

  const handleModalClose = () => {
    props.setModalOpen(false);
    setJobDetails(initialState);
  };

  console.log(jobDetails);

  const handleSubmit = async () => {
    for (const field in jobDetails) {
      if (typeof jobDetails[field] === "string" && !jobDetails[field]) return;
    }
    if (!jobDetails.skills.length) return;
    setLoading(true);
    await props.postJob(jobDetails);
    setLoading(false);
  };

  return (
    <div>
      <StyledModal
        open={props.modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <StyledModalContent>
          <StyledIconButton aria-label="close" onClick={handleModalClose}>
            <CloseIcon />
          </StyledIconButton>
          <Typography variant="h6" align="center">
            İş Ekleyin
          </Typography>
          <form>
            {/* ModalForm */}
           <ModalForm jobDetails={jobDetails} handleChange={handleChange}   />
            {/* Modal Skills */}
            <ModalSkills jobDetails={jobDetails} loading={loading} handleModalClose={handleModalClose} handleSubmit={handleSubmit} addRemoveSkill={addRemoveSkill} />
          </form>
        </StyledModalContent>
      </StyledModal>
    </div>
  );
};

export default HeaderModal;
