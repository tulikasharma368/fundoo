import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./shownotes.css";
import "../dialogbox/dialogbox.css";
import Icons from "../icons/Icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

// import FormDialog from "../dialogbox/Dialogbox";

const ShowNotes = (props) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.info.title);
  const [description, setDescription] = React.useState(props.info.description);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onUpdate();
  }, []);

  const onUpdate = () => {
    let Data = {
      noteId: props.info.id,
      title: title,
      description: description,
    };
    obj
      .Updatenote(Data)
      .then((response) => {
        console.log(response);
        props.display();
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        handleClose();
      });
  };
  return (
    <div className="Note-mainContainer">
      <div
        className="note-testContainer"
        style={{ backgroundColor: props.info.color }}
      >
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            <div className="gapforicons">
              <h4>{props.info.title}</h4>
              <div className="note-paragraph"> {props.info.description}</div>
            </div>
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{ backgroundColor: props.info.color }}>
              <TextField
                margin="dense"
                id="title"
                placeholder="Title"
                type="text"
                fullWidth
                variant="standard"
                multiline
                InputProps={{ disableUnderline: true }}
                defaultValue={props.info.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="dense"
                id="description"
                placeholder="Description"
                type="text"
                fullWidth
                variant="standard"
                multiline
                InputProps={{ disableUnderline: true }}
                defaultValue={props.info.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </DialogContent>
            <div
              className="popup-bottom"
              style={{ backgroundColor: props.info.color }}
            >
              <Icons id={props.info.id} />
              <DialogActions>
                <Button style={{ color: "black" }} onClick={onUpdate}>
                  Close
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>

        <div className="shownotes-icons">
          <Icons id={props.info.id} display={props.display} />
        </div>
      </div>
    </div>
  );
};
export default ShowNotes;
