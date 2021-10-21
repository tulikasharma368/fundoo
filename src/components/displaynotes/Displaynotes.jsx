import React from "react";
// import { useEffect } from "react";
import "./displaynotes.css";
import Shownotes from "./Shownotes";
import Userservice from "../../services/Userservice";
// const obj = new Userservice();

const Displaynotes = (props) => {
  //   const [noteArray, setnoteArray] = React.useState([]);
  //   useEffect(() => {
  //     obj
  //       .Displaynotes()
  //       .then((response) => {
  //         // console.log(response);
  //         setnoteArray(response.data.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  const noteList = props.notesArr.map((info) => <Shownotes info={info} />);

  return (
    <div className="displaynotes">
      <div className="inner-display">{noteList}</div>
    </div>
  );
};

export default Displaynotes;
