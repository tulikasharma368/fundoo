import React from "react";
import Takeanote from "../takeanote/Takeanote";
import Displaynotes from "../displaynotes/Displaynotes";
import { useEffect } from "react";
import Userservice from "../../services/Userservice";
const obj = new Userservice();

const Home = () => {
  const [noteArray, setnoteArray] = React.useState([]);
  useEffect(() => {
    obj
      .Displaynotes()
      .then((response) => {
        // console.log(response);
        setnoteArray(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   const display = () => {
  //     obj
  //       .Displaynotes()
  //       .then((response) => {
  //         // console.log(response);
  //         setnoteArray(response.data.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <div>
      <Takeanote />
      <Displaynotes notesArr={noteArray} />
    </div>
  );
};

export default Home;
