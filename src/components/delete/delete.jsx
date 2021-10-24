import React from "react";
import { useEffect } from "react";
import "../archive/archive.css";
import Icons from "../icons/Icons";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

function Delete() {
  const [del, setDel] = React.useState([]);

  React.useEffect(() => {
    desplaydel();
  }, []);

  const desplaydel = () => {
    obj
      .DeletedNotesList()
      .then((response) => {
        console.log(response.data.data);
        setDel(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delitems = [];
  for (let i = 0; i < del.length; i++) {
    delitems.push(
      <div className="archiveblock" style={{ backgroundColor: del[i].color }}>
        <h4>{del[i].title}</h4>
        <p>{del[i].description}</p>
        <Icons id={del[i].id} disdel={desplaydel} mode={"delete"} />
      </div>
    );
  }
  console.log(del);

  return (
    <div className="archivediv">
      <div className="inner-archive">{delitems}</div>
    </div>
  );
}

export default Delete;
