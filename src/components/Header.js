import React, { useEffect, useState } from "react";
import {Button, Stack, Typography} from '@mui/material';

const Header = () => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <header className={`header ${ small ? "small" : ""}`} >

      <div className="header-grid">
        <div></div>
        <div className="nav-wrapper">
          <Typography className="bot-title-show font-subheader" to="/btc-bot/"  sx={{ marginLeft: "30px" }}>
            <span className="highlight-title font-header">
              BTC
            </span> 
              bot
          </Typography>
          <Stack spacing={2} direction="row" sx={{ alignItems: "center", marginLeft: "30px", display: `${small ? "flex" : "none"}`, marginRight: "30px" }}>
            <Button variant="contained" sx={{ color: "#31DA00", boxShadow: "0px 0px 10px #31DA0080", borderRadius: "20px", height: "30px" }}>
              Outlined
            </Button>
            <Button variant="contained" sx={{ color: "#31DA00", boxShadow: "0px 0px 10px #31DA0080", borderRadius: "20px", height: "30px" }}>
              Outlined
            </Button>
          </Stack>
        </div>
        <div></div>
      </div>

    </header>
  );
};

export default Header;
