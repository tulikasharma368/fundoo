import * as React from "react";
import "./collaborator.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { Paper, Menu } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [collab, setcollab] = React.useState("");
  const [collabarr, setcollabarr] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setcollab("");
    setcollabarr([]);
  };

  const handleshare = (e) => {
    setcollab(e.target.value);
    let data = {
      searchWord: e.target.value,
    };
    if (e.target.value !== "") {
      obj
        .Collaborate(data)
        .then((response) => setcollabarr(response.data.data.details))
        .catch((error) => console.log(error));
    }
  };

  const userData = collabarr.map((values) => {
    return <MenuItem>{values.email}</MenuItem>;
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.collaborator}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Collaborators</DialogTitle>
        <DialogContent>
          <h3 style={{ marginBottom: "0%" }}>
            {localStorage.getItem("fname")} <span> </span>
            {localStorage.getItem("fname")}
          </h3>
          <p style={{ marginTop: "0%" }}>{localStorage.getItem("email")}</p>
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
          <div>
            <Paper elevation={1}>
              <MenuList className="email_list">{userData}</MenuList>
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
