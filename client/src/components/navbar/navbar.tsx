import { Stack, Typography } from "@mui/material";
import styles from "./navbar.module.css";
import ReceiptIcon from '@mui/icons-material/Receipt';
import React from "react";
import NavbarItems from "./navbar-items/navbar-items";
import ProfileBar from "./profile-bar/profile-bar";

const Navbar = () => {
  return (
    <Stack className={styles.container} color="theme.paper">
      <Stack>
        <Stack className={styles.logo_bar} direction={'row'}>
          <ReceiptIcon color="primary"/>
          <Typography variant="h5" sx={{fontWeight: '700'}}>Splitwise</Typography>
        </Stack>

        <NavbarItems />
      </Stack>

      <ProfileBar />
    </Stack>
  );
};

export default Navbar;
