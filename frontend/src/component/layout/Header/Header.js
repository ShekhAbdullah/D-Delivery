import React from "react";
import {ReactNavbar} from "overlay-navbar" 
import logo from "../../../images/logo.png";

const Header = () => {
  return <ReactNavbar
  burgerColorHover= "#2dad4f"
  logo={logo}
  logoWidth= "20vmax"
  navColor1= "white"
  logoHoverSize= "10px"
  logoHoverColor="#2dad4f"
  link1Text= "Home"
  link2Text= "Product"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/product"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "1.3vmax"
  link1Color= "rgba(35, 35, 35,0.8)"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#2dad4f"
  link1Margin= "1vmax"
  // profileIconUrl= "/login"
  profileIconColor= "rgba(35, 35, 35,0.8)"
  searchIconColor= "rgba(35, 35, 35,0.8)"
  cartIconColor= "rgba(35, 35, 35,0.8)"
  profileIconColorHover= "#2dad4f"
  searchIconColorHover= "#2dad4f"
  cartIconColorHover= "#2dad4f"
  cartIconMargin= "1vmax"
  />;
};

export default Header;