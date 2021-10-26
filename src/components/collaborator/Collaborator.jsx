import * as React from "react";
import "./collaborator.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { Paper, Menu } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [collabarr, setcollabarr] = React.useState([]);
  const [collabdataarr, setcollabdataarr] = React.useState([
    {
      firstName: localStorage.getItem("fname"),
      lastName: localStorage.getItem("lname") + "(Owner)",
      email: localStorage.getItem("email"),
      userId: localStorage.getItem("id"),
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setcollabarr([]);
  };

  const handleshare = (e) => {
    let data = {
      searchWord: e.target.value,
    };
    if (e.target.value == "") {
      setcollabarr([]);
    } else {
      obj
        .Collaborate(data)
        .then((response) => setcollabarr(response.data.data.details))
        .catch((error) => console.log(error));
    }
  };

  const userDetails = (val) => {
    console.log(val);
    var newArray = collabdataarr.slice();
    newArray.push(val);
    // console.log(newArray);
    setcollabarr([]);
    setcollabdataarr(newArray);
  };

  const userData = collabarr.map((values) => {
    return (
      <MenuItem onClick={() => userDetails(values)}>{values.email}</MenuItem>
    );
  });

  const userList = collabdataarr.map((val) => {
    return (
      <div className="collabcollab">
        <Avatar
          style={{ backgroundColor: "brown", textTransform: "capitalize" }}
        >
          {val.firstName.charAt(0)}
        </Avatar>
        <div className="data">
          <h3 style={{ marginBottom: "0%" }}>
            {val.firstName} {val.lastName}
          </h3>
          <p>{val.email}</p>
        </div>
      </div>
    );
  });

  const handleSave = () => {
    let displayarr = collabdataarr.slice(1);
    // console.log(displayarr);
    props.displaycollabnotes(displayarr);
    setOpen(false);
    setcollabarr([]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.collaborator}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Collaborators</DialogTitle>
        {userList}
        <div className="sharediv">
          <PersonAddRoundedIcon />
          <TextField
            className="shareinput"
            margin="dense"
            id="share"
            placeholder="Person or email to share with"
            type="text"
            variant="standard"
            multiline
            fullWidth
            InputProps={{ disableUnderline: true }}
            onChange={handleshare}
          />
        </div>

        <Stack direction="row" spacing={2}>
          <Paper>
            <MenuList
              id="composition-menu"
              aria-labelledby="composition-button"
              className="email_list"
            >
              {userData}
            </MenuList>
          </Paper>
        </Stack>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
