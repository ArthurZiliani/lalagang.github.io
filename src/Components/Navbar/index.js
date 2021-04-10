/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../image/logo1.png"
import Icon from "../icons";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/" />

        <IconButton id="menuToggle" onClick={() => setActive(!active)}>
          <i className={active ? "fas fa-times" : "fas fa-bars"} />
        </IconButton>
        <img id="croco" src={logo} alt="" />
        <NavMenu className={active ? "nav active" : "nav"}>
          <NavLink to="/" activeStyle>
            <Icon className="fas fa-home " />  Inicio
          </NavLink>
          <NavLink to="/Sobre" activeStyle>
            <Icon className="fas fa-book " />Sobre
          </NavLink>
          <NavLink to="/Formulário" activeStyle>
            <Icon className="fas fa-clipboard-list" />Formulário
          </NavLink>
          <NavLink to="/Loja" activeStyle>
            <Icon className="fas fa-shopping-basket " /> Loja
          </NavLink>
          <NavLink to="/Contatos" activeStyle>
            <Icon className="fas fa-comment-alt " />Contatos
          </NavLink>

        </NavMenu>
      </Nav>
      <div className="orange" />
    </>
  );
};

export default Navbar;
