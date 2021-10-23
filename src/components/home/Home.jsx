import React from "react";
import Takeanote from "../takeanote/Takeanote";
import Displaynotes from "../displaynotes/Displaynotes";
import { useEffect } from "react";
import Userservice from "../../services/Userservice";
const obj = new Userservice();

const Home = () => {
  const [noteArray, setnoteArray] = React.useState([]);
  useEffect(() => {
    display();
  }, []);

  const display = () => {
    obj
      .Displaynotes()
      .then((response) => {
        // console.log(response);
        let temparr = [];
        response.data.data.data.filter((val) => {
          if (val.isArchived == false && val.isDeleted == false) {
            temparr.push(val);
          }
        });
        // console.log(temparr);
        setnoteArray(temparr);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Takeanote display={display} />
      <Displaynotes notesArr={noteArray} display={display} />
    </div>
  );
};

export default Home;
