import { Button, Grid, Select } from "@mui/material";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 35,
  // border: '1px solid #ccc',
  borderRadius: 5,
  padding: 2,
  margin: "auto",
  marginTop: "17px",
});

export const StyledSelect = styled(Select)({
  backgroundColor: "white",
  color: "blue",
  marginRight: 5,
  border: "1px solid #ccc",
  borderRadius: 2,
  padding: 2,
  minHeight: "auto",
  minWidth: "auto",
});

export const StyledButton = styled(Button)({
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: 2,
  padding: 17,
  minHeight: "auto",
  minWidth: "auto",
});
