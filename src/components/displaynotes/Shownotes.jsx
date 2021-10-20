import React from "react";
import { useState } from "react";
import "./shownotes.css";
import Icons from "../icons/Icons";

const ShowNotes = (props) => {
  const showicons = () => {
    return (
      <div className="shownotes-icons">
        <Icons />
      </div>
    );
  };

  return (
    <div className="Note-mainContainer">
      <div className="note-testContainer">
        <h4>{props.info.title}</h4>
        <div className="note-paragraph"> {props.info.description}</div>
        {showicons()}
      </div>
    </div>
  );
};
export default ShowNotes;
