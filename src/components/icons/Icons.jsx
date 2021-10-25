import React from "react";
import AddAlertOutlined from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined";
import ColorLensOutlined from "@mui/icons-material/ColorLensOutlined";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import "./colorpallete/colorpallete.css";
import "./icons.css";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const colorsarrfun = [
  { clr: "#FFFFFF" },
  { clr: "#f28b82" },
  { clr: "#fbbc04" },
  { clr: "#fff475" },
  { clr: "#ccff90" },
  { clr: "#a7ffeb" },
  { clr: "#cbf0f8" },
  { clr: "#aecbfa" },
  { clr: "#d7aefb" },
  { clr: "#fdcfe8" },
  { clr: "#e6c9a8" },
  { clr: "#e8eaed" },
];

const Icons = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const [anchorElmenu, setAnchorElmenu] = React.useState(null);
  const [openmenu, setOpenmenu] = React.useState(false);
  const [placementmenu, setPlacementmenu] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== "top" || !prev);
    setPlacement(newPlacement);
  };

  const handleClickmenu = (newPlacement) => (event) => {
    console.log(event);
    setAnchorElmenu(event.currentTarget);
    setOpenmenu((prev) => placementmenu !== "bottom-start" || !prev);
    setPlacementmenu(newPlacement);
  };

  //color pallete functionality..............................................................
  const items = colorsarrfun.map((t, idx) => (
    <div
      className="innercolor"
      onClick={() => {
        if (props.mode == "create") {
          props.setColor(t.clr);
          // this.handleClick("top");
        } else {
          console.log(props);
          let colorobj = {
            color: t.clr,
            noteIdList: [props.id],
          };
          obj
            .Changecolor(colorobj)
            .then((response) => {
              console.log(response);
              if (props.mode == "archive") {
                props.disarc();
              } else if (props.mode == "delete") {
                props.disdel();
              } else {
                props.display();
              }

              // this.handleClick("top");
            })
            .catch((error) => console.log(error));
        }
      }}
      style={{ backgroundColor: t.clr }}
    ></div>
  ));

  //archive functionality...................................................
  const archivefunction = () => {
    if (props.mode == "create") {
      props.setArchive();
    } else {
      let archiveobj = {
        noteIdList: [props.id],
        isArchived: true,
      };
      obj
        .Archive(archiveobj)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // delete functionality......................................................
  const deletefunction = () => {
    if (props.mode == "create") {
      props.setDelete();
    } else {
      let archiveobj = {
        noteIdList: [props.id],
        isDeleted: true,
      };
      obj
        .Delete(archiveobj)
        .then((response) => {
          console.log(response);
          props.display();
          props.disarc();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="icons-comp">
        <AddAlertOutlined style={{ fontSize: "large" }}></AddAlertOutlined>
        <PersonAddOutlined style={{ fontSize: "large" }}></PersonAddOutlined>

        {/* colorpallete */}
        <div>
          <Box sx={{ width: 500 }}>
            <Popper
              className="poppopmenu"
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <div className="colorpallete-box">{items}</div>
                  </Paper>
                </Fade>
              )}
            </Popper>
            <ColorLensOutlined
              onClick={handleClick("top")}
              style={{ fontSize: "large" }}
            ></ColorLensOutlined>
          </Box>
        </div>
        {/* colorpallete */}

        <ImageOutlined style={{ fontSize: "large" }}></ImageOutlined>
        <ArchiveOutlined
          onClick={archivefunction}
          style={{ fontSize: "large" }}
        ></ArchiveOutlined>
        <div>
          <Box>
            <Popper
              className="poppopmenu"
              open={openmenu}
              anchorEl={anchorElmenu}
              placement={placementmenu}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <div className="menupoppper">
                      <div
                        onClick={deletefunction}
                        style={{ cursor: "pointer" }}
                      >
                        Delete Note
                      </div>
                      <div>Add Label</div>
                      <div>Add Drawing</div>
                      <div>Make a Copy</div>
                      <div>Show Checkboxes</div>
                      <div>Copy to Google Docs</div>
                    </div>
                  </Paper>
                </Fade>
              )}
            </Popper>
            <MoreVertOutlined
              onClick={handleClickmenu("bottom-start")}
              style={{ fontSize: "large", cursor: "pointer" }}
            ></MoreVertOutlined>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Icons;
