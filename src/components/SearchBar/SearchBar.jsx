import React, { useState } from 'react';
import {  MenuItem, CircularProgress } from '@mui/material';
import { StyledButton, StyledGrid, StyledSelect } from './SearchUi';

const SearchBar = (props) => {
  const [loading, setLoading] = useState(false);
  const [jobSearch, setJobSearch] = useState({
    type: "Full Time",
    location: "Remote"
  });

  const handleChange = (e) => {
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(jobSearch)
  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
  }

  return (
    <StyledGrid container>
      <StyledSelect onChange={handleChange} value={jobSearch.type} name='type' disableUnderline variant='filled'>
        <MenuItem p={0} my={0} value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </StyledSelect>
      <StyledSelect onChange={handleChange} value={jobSearch.location} name='location' disableUnderline variant='filled'>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </StyledSelect>
      <StyledButton onClick={search} disabled={loading} variant="outlined">
      {loading ? (<CircularProgress color="secondary" size={22}  />) : ("Search") }
      </StyledButton>
    </StyledGrid>
  );
};

export default SearchBar;
