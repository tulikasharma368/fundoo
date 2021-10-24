import * as React from "react";
import "./dashboard.css";
import Home from "../../components/home/Home";
import Archive from "../../components/archive/Archive";
import Delete from "../../components/delete/delete";
import keep from "./keep.png";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElperson, setAnchorElperson] = React.useState(null);
  const [openperson, setOpenperson] = React.useState(false);
  const [placementperson, setPlacementperson] = React.useState();

  const handleClickperson = (newPlacement) => (event) => {
    setAnchorElperson(event.currentTarget);
    setOpenperson((prev) => placementperson !== "top" || !prev);
    setPlacementperson(newPlacement);
  };

  const handleDrawerOpen = () => {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const redirecttonotes = () => {
    window.location = "/dashboard";
  };

  const redirecttoarchive = () => {
    window.location = "/dashboard/archive";
  };

  const redirecttodelete = () => {
    window.location = "/dashboard/delete";
  };

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src={keep} className="keep_logo" alt="keep image" />
            <Typography
              classname="fundooheader"
              variant="h6"
              noWrap
              component="div"
            >
              Fundoo Notes
            </Typography>
            <box className="searchbox">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className="searchicon" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </box>
            <div className="dashboardIcons">
              <RefreshIcon />
              <ViewStreamSharpIcon />
              <SettingsIcon />
            </div>
            <div className="appsicon">
              <AppsIcon />
              {/* person............................................................ */}
              <div>
                <Box sx={{ width: 500 }}>
                  <Popper
                    className="popperlogout"
                    open={openperson}
                    anchorEl={anchorElperson}
                    placement={placementperson}
                    transition
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper className="logout-content">
                          <div>
                            <AccountCircleIcon className="logouticoninpopper" />
                            <h3>
                              {localStorage.getItem("fname")} <span> </span>
                              {localStorage.getItem("fname")}
                            </h3>
                            <p>{localStorage.getItem("email")}</p>
                            <button className="logoutbutton" onClick={logout}>
                              Sign out
                            </button>
                          </div>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                  <AccountCircleIcon onClick={handleClickperson("bottom")} />
                </Box>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>

          <List>
            {["Notes", "Reminders", "Edit Labels", "Archive", "Bin"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index <= 0 ? (
                      <LightbulbOutlinedIcon onClick={redirecttonotes} />
                    ) : <InboxIcon /> && index <= 1 ? (
                      <NotificationsNoneIcon />
                    ) : <InboxIcon /> && index <= 2 ? (
                      <ModeEditOutlineOutlinedIcon />
                    ) : <InboxIcon /> && index <= 3 ? (
                      <ArchiveOutlinedIcon onClick={redirecttoarchive} />
                    ) : <InboxIcon /> && index <= 4 ? (
                      <DeleteOutlineOutlinedIcon onClick={redirecttodelete} />
                    ) : (
                      <InboxIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>

      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/dashboard/archive" component={Archive} />
        <Route exact path="/dashboard/delete" component={Delete} />
      </Switch>

      {/* <Home/> */}
    </div>
  );
}
