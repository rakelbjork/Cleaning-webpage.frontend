import { Outlet, Link } from "react-router-dom";
import Navbar from "../frontPage/Navbar";
import React from "react";

const Kontakt = () => {
  return (
    <>
<div> 
  Kontakta oss:
</div>
      <Outlet />
    </>
  )
};

export default Kontakt;