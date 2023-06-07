import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    background: "#E1F5FE",
    borderRadius: 5,
    minWidth: "200px",
    maxWidth: "700px",
    margin: "0 auto",
    border: "1px solid green",
    marginBottom: "10px",
    marginTop: "18px"
  });
  
  export const StyledHeader = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5,
    background: "#03A9F4",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
  });
  
  export const StyledLanguages = styled(Box)({
    display: "flex",
    justifyContent: "center",
    marginBottom: 5,
  });
  
  export const StyledLanguage = styled("span")({
    background: "#000",
    color: "#fff",
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
  });
  
  export const StyledInfo = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  });
  
  export const StyledButton = styled(Button)({
    background: "#4CAF50",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
  });