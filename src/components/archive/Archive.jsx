import React from "react";
import { useEffect } from "react";
import "./archive.css";
import Icons from "../icons/Icons";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

function Archive() {
  const [archivearr, setArchive] = React.useState([]);

  React.useEffect(() => {
    displayarch();
  }, []);

  const displayarch = () => {
    obj
      .ArchiveNotesList()
      .then((response) => {
        setArchive(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const items = [];
  for (let i = 0; i < archivearr.length; i++) {
    items.push(
      <div
        className="archiveblock"
        style={{ backgroundColor: archivearr[i].color }}
      >
        <h4>{archivearr[i].title}</h4>
        <p>{archivearr[i].description}</p>
        <Icons id={archivearr[i].id} disarc={displayarch} mode={"archive"} />
      </div>
    );
  }
  console.log(archivearr);

  // return <ul>{items}</ul>;
  return (
    <div className="archivediv">
      <div className="inner-archive">{items}</div>
    </div>
  );
}

export default Archive;
