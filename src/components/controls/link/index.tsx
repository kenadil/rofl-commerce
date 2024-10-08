import { Link } from "@mui/material";
import React from "react";

interface LinkProps {
  label: string;
  anchor: string;
}

const NavLink: React.FC<LinkProps> = ({ label, anchor }) => {
  return (
    <Link href={anchor} underline="none">
      {label}
    </Link>
  );
};

export default NavLink;
