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

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== "top" || !prev);
    setPlacement(newPlacement);
  };

  // console.log(colorsarrfun);
  const items = colorsarrfun.map((t, idx) => (
    <div
      className="innercolor"
      onClick={() => {
        if (props.id == "") {
          props.setColor(t.clr);
        } else {
          let colorobj = {
            color: t.clr,
            noteIdList: [props.id],
          };
          obj
            .Changecolor(colorobj)
            .then((response) => {
              window.location.reload();
            })
            .catch((error) => console.log(error));
        }
      }}
      style={{ backgroundColor: t.clr }}
    ></div>
  ));

  return (
    <div>
      <div className="icons-comp">
        <AddAlertOutlined style={{ fontSize: "large" }}></AddAlertOutlined>
        <PersonAddOutlined style={{ fontSize: "large" }}></PersonAddOutlined>

        {/* colorpallete */}
        <div>
          <Box sx={{ width: 500 }}>
            <Popper
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
        <ArchiveOutlined style={{ fontSize: "large" }}></ArchiveOutlined>
        <MoreVertOutlined style={{ fontSize: "large" }}></MoreVertOutlined>
      </div>
    </div>
  );
};

export default Icons;
