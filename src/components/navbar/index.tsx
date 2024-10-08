import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import NavLink from "../controls/link";
import "./style.scss";

type Navigation = {
  label: string;
  anchor: string;
};

const Navbar = () => {
  const [navigation, setNavigation] = useState<Navigation[]>([]);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const navigations = [
      {
        label: "О нас",
        anchor: "#about",
      },
      {
        label: "Оборудование",
        anchor: "#tech",
      },
      {
        label: "Забронировать",
        anchor: "#register",
      },
    ];

    setNavigation(navigations);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        zIndex: "99",
      }}
      className={scrolling ? "navbar-scroll" : ""}
    >
      <Container component={"header"} maxWidth={"xl"}>
        {!scrolling && (
          <ul className="commerce-contacts">
            <li className="commerce-phone">+7 778 291 71 74</li>
            <li className="commerce-phone">
              Камали Дюсембекова 84/2, Karaganda
            </li>
            <li className="commerce-phone">Круглосуточно</li>
          </ul>
        )}
        <Box sx={{ p: "32px 0" }} className="commerce-navbar">
          <div className="commerce-logo">{"LOW GROUND"}</div>
          <div className="commerce-links">
            {navigation.map((nav, index) => (
              <NavLink {...nav} key={nav.label + index} />
            ))}
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
