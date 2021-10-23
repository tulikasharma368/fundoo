import React from "react";
import { useState } from "react";
import "./shownotes.css";
import Icons from "../icons/Icons";

const ShowNotes = (props) => {
  return (
    <div className="Note-mainContainer">
      <div
        className="note-testContainer"
        style={{ backgroundColor: props.info.color }}
      >
        <h4>{props.info.title}</h4>
        <div className="note-paragraph"> {props.info.description}</div>

        <div className="shownotes-icons">
          <Icons id={props.info.id} display={props.display} />
        </div>
      </div>
    </div>
  );
};
export default ShowNotes;
