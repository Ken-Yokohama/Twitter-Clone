import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./tweet.css";

function Tweet(props) {
    return (
        <div>
            Tweets
            <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
                <Avatar />
                <div>
                    <div style={{ display: "flex" }}>
                        <h3>Name</h3>
                        <h3 style={{ fontWeight: "400" }}>@Name · Date</h3>
                    </div>
                    <h4 style={{ fontWeight: "400" }}>
                        Tweet Content Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ut non voluptates eveniet vero aliquam
                        facilis nam unde nobis necessitatibus. Possimus!
                    </h4>
                    <h1>Image if there is</h1>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        }}
                    >
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <CommentOutlinedIcon
                                    fontSize="small"
                                    sx={{ color: "#536471" }}
                                />
                            </div>
                            <h5
                                className="tweet-menu-count"
                                style={{ fontWeight: "100" }}
                            >
                                23
                            </h5>
                        </div>
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <AutorenewTwoToneIcon
                                    fontSize="small"
                                    sx={{ color: "#536471" }}
                                />
                            </div>
                            <h5
                                className="tweet-menu-count"
                                style={{ fontWeight: "100" }}
                            >
                                23
                            </h5>
                        </div>
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <FavoriteBorderTwoToneIcon
                                    fontSize="small"
                                    sx={{ color: "#536471" }}
                                />
                            </div>
                            <h5
                                className="tweet-menu-count"
                                style={{ fontWeight: "100" }}
                            >
                                23
                            </h5>
                        </div>
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <IosShareIcon
                                    fontSize="small"
                                    sx={{ visibility: "" }}
                                />
                                {/* hidden */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tweet;
