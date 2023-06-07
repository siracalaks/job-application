import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  CircularProgress,
} from "@mui/material";
export const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

export const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
});

export const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledModalContent = styled(Box)({
  backgroundColor: "white",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  padding: "20px",
  outline: "none",
  width: "80%",
  maxWidth: 700,
});

export const StyledIconButton = styled(IconButton)({
  position: "absolute",
  // top: 10,
  // right: 50,
});

export const StyledFormControl = styled(FormControl)({
  marginBottom: 5,
  minWidth: "100%",
});

export const StyledButtonContainer = styled(Box)({
  marginTop: 10,
  display: "flex",
  justifyContent: "space-between",
});

export const StyledSkillsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2), // Responsive margin bottom
  flexWrap: "wrap", // Elemanları sığacak şekilde wrap yapar
}));

export const StyledSkillButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1), // Responsive margin right
  marginTop: theme.spacing(1), // Responsive margin top
  flexShrink: 0, // Elemanların küçülürken küçülmemesi için
  minWidth: "auto", // Button boyutunun içeriğe bağlı olarak otomatik ayarlanması
}));

export const StyledTitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: 16,
});
