import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Vanilla", href: "/" },
  { name: "Library", href: "/react-form-hook" },
];

const Navbar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          react-form-hook demo
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href}>
              <Button sx={{ color: "#fff" }}>
                {item.name}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
