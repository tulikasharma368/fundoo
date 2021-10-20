import React from "react";
import { useEffect } from "react";
import "./displaynotes.css";
import Shownotes from "./Shownotes";
import Userservice from "../../services/Userservice";
const obj = new Userservice();

const Displaynotes = () => {
  const [noteArray, setnoteArray] = React.useState([]);
  useEffect(() => {
    obj
      .Displaynotes()
      .then((response) => {
        setnoteArray(response.data.data.data);
        // console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const noteList = noteArray.map((info) => <Shownotes info={info} />);

  return (
    <div className="displaynotes">
      <div className="inner-display">{noteList}</div>
    </div>
  );
};

export default Displaynotes;
