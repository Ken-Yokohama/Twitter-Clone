import React, { useState } from "react";
import { signOut } from "firebase/auth";
import "./sidebar.css";
import { auth } from "../firebase-config";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";

function Sidebar(props) {
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <div className="twitterLogo">
                    <div
                        className="sidebarOption"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <TwitterIcon
                            className="sidebarIcon"
                            sx={{ fontSize: "30px" }}
                        />
                    </div>
                </div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <HomeIcon className="sidebarIcon" />
                        <h2>Home</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <TagIcon className="sidebarIcon" />
                        <h2>Explore</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/notifications"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <NotificationsIcon className="sidebarIcon" />
                        <h2>Notifications</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <MailOutlineIcon className="sidebarIcon" />
                        <h2>Messages</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/bookmarks"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <BookmarkBorderIcon className="sidebarIcon" />
                        <h2>Bookmarks</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/lists"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <ListAltIcon className="sidebarIcon" />
                        <h2>Lists</h2>
                    </div>
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive
                            ? "activeSidebarOptionContainer"
                            : "sidebarOptionContainer"
                    }
                >
                    <div className="sidebarOption">
                        <PermIdentityIcon className="sidebarIcon" />
                        <h2>Profile</h2>
                    </div>
                </NavLink>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: "30px",
                        height: "50px",
                        backgroundColor: "#1d9bf0",
                        "&:hover": {
                            backgroundColor: "#1a8cd8",
                        },
                        "@media (min-width: 800px)": {
                            display: "inline",
                        },
                    }}
                >
                    Tweet
                </Button>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <div
                    className="sidebar-account"
                    style={{ padding: "1rem", marginBottom: "-0.5rem" }}
                >
                    <Avatar />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "0.75rem",
                            marginTop: "-0.5rem",
                        }}
                    >
                        <h4>{auth?.currentUser?.email}</h4>
                        <h5 style={{ fontWeight: "400" }}>
                            @{auth?.currentUser?.email}
                            {auth?.currentUser?.email.length > 12 && "..."}
                        </h5>
                    </div>
                </div>
                <Typography
                    sx={{ p: 2, cursor: "pointer" }}
                    className="sidebarOption"
                    onClick={logout}
                    style={{ borderRadius: "0" }}
                >
                    Log out {auth?.currentUser?.email}
                </Typography>
            </Popover>
            <div
                className="sidebar-profile-container sidebarOption"
                aria-describedby={id}
                onClick={handlePopover}
            >
                <div className="sidebar-account">
                    <Avatar />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "0.75rem",
                            marginTop: "-0.5rem",
                        }}
                    >
                        <h4>
                            {auth?.currentUser?.email.substring(0, 12)}
                            {auth?.currentUser?.email.length > 12 && "..."}
                        </h4>
                        <h5 style={{ fontWeight: "400" }}>
                            @{auth?.currentUser?.email.substring(0, 12)}
                            {auth?.currentUser?.email.length > 12 && "..."}
                        </h5>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
        </div>
    );
}

export default Sidebar;
