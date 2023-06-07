import { styled } from "@mui/system";
import { IconButton, Box } from "@mui/material";

export const StyledIconButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});
export const StyledBox = styled(Box)({
  "& > *": {
    marginRight: "5px",
  },
});
