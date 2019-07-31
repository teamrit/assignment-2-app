import React from "react";
import image from "../incible-logo.png";

export const CenteredLogo = () => {
  return (<div className="d-flex justify-content-center">
      <img src={image}
           title="Incible: Invincible Incident Management"
           alt="Incible: Invincible Incident Management"
           className="logo mb-3 border rounded" />

  </div>);
};