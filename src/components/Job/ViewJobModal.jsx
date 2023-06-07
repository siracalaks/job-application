import React from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { format } from "date-fns";
import { StyledBox, StyledIconButton } from "./ViewJobUi";

const ViewJobModal = (props) => {
  return (
    <Dialog open={Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <StyledIconButton aria-label="close" onClick={props.closeModal}>
            <CloseIcon />
          </StyledIconButton>
          <Typography variant="h6" align="center">
            {props.job.title} @ {props.job.companyName}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <StyledBox display="flex">
            <StyledBox variant="caption">Posted on: </StyledBox>
            <Typography variant="body2">
              {props.job.postedOn &&
                format(props.job.postedOn, "yyyy/MMM/dd HH:MM")}
            </Typography>
          </StyledBox>
          <StyledBox display="flex">
            <StyledBox variant="caption">Job Type: </StyledBox>
            <Typography variant="body2">{props.job.type}</Typography>
          </StyledBox>
          <StyledBox display="flex">
            <StyledBox variant="caption">Job Location: </StyledBox>
            <Typography variant="body2">{props.job.location}</Typography>
          </StyledBox>
          <StyledBox display="flex">
            <StyledBox variant="caption">Job Description: </StyledBox>
            <Typography variant="body2">{props.job.description}</Typography>
          </StyledBox>
          <StyledBox display="flex">
            <StyledBox variant="caption">Company Name: </StyledBox>
            <Typography variant="body2">{props.job.companyName}</Typography>
          </StyledBox>
          <StyledBox display="flex">
            <StyledBox variant="caption">Compant Website: </StyledBox>
            <Typography variant="body2">{props.job.companyUrl}</Typography>
          </StyledBox>
          <Box display="flex" flexDirection="column">
            <StyledBox variant="caption" my={1}>
              Job Type:{" "}
            </StyledBox>
            <Grid container alignItems="center">
              {props.job.skills &&
                props.job.skills.map((skill) => (
                  <StyledBox
                    item
                    marginRight={1}
                    bgcolor="black"
                    color="white"
                    borderRadius={2}
                    padding={0.5}
                    key={skill}
                  >
                    {skill}
                  </StyledBox>
                ))}
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          component="a"
          href={props.job.link}
          target="_blank"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewJobModal;
