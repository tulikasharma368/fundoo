import React, { Component } from "react";
import "./takeanote.css";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlined from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlined from "@mui/icons-material/InsertPhotoOutlined";
import UndoOutlined from "@mui/icons-material/UndoOutlined";
import RedoOutlined from "@mui/icons-material/RedoOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { Snackbar, IconButton } from "@mui/material";
import Icons from "../icons/Icons";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

class Takeanote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      hide: false,
      title: "",
      description: "",
      snackbarmsg: "",
      color: "#ffffff",
      snackbaropen: false,
      isArchived: false,
    };
  }

  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };

  close = () => {
    // this.setState({
    //   show: true,
    //   hide: false,
    // });

    let notesobj = {
      title: this.state.title,
      description: this.state.description,
      color: this.state.color,
      isArchived: this.state.isArchived,
    };
    console.log(notesobj);
    obj
      .Addnote(notesobj)
      .then((response) => {
        console.log(response);
        this.props.display();
        // this.props.display();
        this.setState({
          snackbaropen: true,
          show: true,
          hide: false,
          title: "",
          description: "",
          color: "#ffffff",
          snackbarmsg: "Note added successfully",
          isArchived: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          snackbaropen: true,
          snackbarmsg: "Failed to add note",
        });
      });
  };

  expand = () => {
    this.setState({
      show: false,
      hide: true,
    });
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  setColors = (val) => {
    // console.log(val);
    this.setState({
      color: val,
    });
  };

  setArchive = () => {
    this.setState({
      isArchived: true,
    });
  };

  render() {
    return (
      <div className="takeanote">
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.snackbaropen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span id="message_id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />
        {this.state.show && (
          <form id="form1" onClick={this.expand}>
            <input
              className="forminput2"
              aria-label="empty textarea"
              placeholder="Take a note..."
            />
            <div>
              <IconButton size="large">
                <CheckBoxOutlined className="check" />
              </IconButton>
              <IconButton size="large">
                <BrushOutlined className="brush" />
              </IconButton>
              <IconButton size="large">
                <InsertPhotoOutlined className="image" />
              </IconButton>
            </div>
          </form>
        )}
        {this.state.hide && (
          <form id="form2" style={{ backgroundColor: this.state.color }}>
            <div className="title-pin">
              <input
                className="title"
                aria-label="empty textarea"
                placeholder="Title"
                name="title"
                onChange={(e) => this.change(e)}
              />
              <div className="pin-icon">
                <PushPinOutlinedIcon />
              </div>
            </div>
            <div className="hide-takenote">
              <input
                className="forminput2"
                name="description"
                aria-label="empty textarea"
                placeholder="Take a note..."
                onChange={(e) => this.change(e)}
              />
            </div>
            <div id="icons">
              <div className="icons-takenote">
                <Icons
                  setColor={this.setColors}
                  setArchive={this.setArchive}
                  mode={"create"}
                />
              </div>
              <div className="undoredo">
                <UndoOutlined style={{ fontSize: "large" }}></UndoOutlined>
                <RedoOutlined style={{ fontSize: "large" }}></RedoOutlined>
              </div>
              <div className="button">
                <p onClick={this.close}>Close</p>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Takeanote;
