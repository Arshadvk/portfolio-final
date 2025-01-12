import React from "react";
import Div from "../Div";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <h2>Arshad</h2>
      <p>{text}</p>
    </Div>
  );
}
