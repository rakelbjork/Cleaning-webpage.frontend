import { Outlet, Link } from "react-router-dom";
import Navbar from "../frontPage/Navbar";
import React from "react";

const Layout = () => {
  return (
    <>
<div> 
  Kontakta oss:
</div>
      <Outlet />
    </>
  )
};

export default Layout;