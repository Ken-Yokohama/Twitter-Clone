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
import { Button } from "@mui/material";

function Sidebar(props) {
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
    };

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
            <button onClick={logout}>SignOut</button>
        </div>
    );
}

export default Sidebar;
