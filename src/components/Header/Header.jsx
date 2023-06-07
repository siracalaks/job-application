import React, { useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { StyledAppBar, StyledTypography } from "./HeaderModal/HeaderUi";
import HeaderModal from "./HeaderModal/HeaderModal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography variant="h6">İş Arama Platformu</StyledTypography>
          <Button color="inherit" onClick={handleModalOpen}>
            İş Ekle
          </Button>
        </Toolbar>
      </StyledAppBar>
      <HeaderModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        postJob={props.postJob}
      />
    </div>
  );
};

export default Header;
