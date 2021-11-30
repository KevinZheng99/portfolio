import React from "react";

import classes from "./Overlay.module.css";

export default function Overlay(props) {
  return (
    <div
      className={`${props.isOpen && classes.overlay}`}
      onClick={props.onCloseMenu}
    />
  );
}
