import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "#FFFFFF" }}
            >
              <img
                src="/logo-lider.png
              "
                alt="logo"
                width="30%"
                height="30%"
              />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#FFFFFF" }}
            >
              News
            </Typography>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Home
            </Button>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Frota
            </Button>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Infraestrutura
            </Button>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Serviços
            </Button>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Nossa História
            </Button>
            <Button sx={{ color: "#000000", textTransform: "none" }}>
              Trabalhe conosco
            </Button>
            <Button
              sx={{ color: "#000000", textTransform: "none", mr: "8rem" }}
            >
              Contato
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
