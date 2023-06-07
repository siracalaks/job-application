import React from 'react'
import {
    StyledFormControl,
    StyledTitleContainer,
  } from "./HeaderUi";
  import {
    TextField,
    Select,
    MenuItem,
    Grid,
    FormHelperText,
  } from "@mui/material";

const ModalForm = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="title"
            value={props.jobDetails.title}
            onChange={props.handleChange}
            label="İş Başlığı*"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledFormControl>
            {/* <InputLabel id="category-label">Kategori</InputLabel> */}
            <Select
              name="type"
              value={props.jobDetails.type}
              onChange={props.handleChange}
              labelId="category-label"
              fullWidth
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <FormHelperText>İşin kategorisini seçin.</FormHelperText>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="companyName"
            value={props.jobDetails.companyName}
            onChange={props.handleChange}
            label="Firma Adı*"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="companyUrl"
            value={props.jobDetails.companyUrl}
            onChange={props.handleChange}
            label="Firma URL*"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledFormControl>
            {/* <InputLabel id="location-label">Konum</InputLabel> */}
            <Select
              name="location"
              value={props.jobDetails.location}
              onChange={props.handleChange}
              labelId="location-label"
              fullWidth
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <FormHelperText>İşin konumunu seçin.</FormHelperText>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="link"
            value={props.jobDetails.link}
            onChange={props.handleChange}
            label="İş Linki"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <StyledTitleContainer>
        <TextField
          name="description"
          value={props.jobDetails.description}
          onChange={props.handleChange}
          label="İş Başlığı*"
          fullWidth
        />
      </StyledTitleContainer>
    </>
  );
}

export default ModalForm