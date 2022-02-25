import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./tweet.css";

function Tweet({ name, date, imgSrc, tweetText, likes }) {
    const imageExists = true;

    return (
        <div>
            Tweets
            <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
                <Avatar />
                <div>
                    <div style={{ display: "flex" }}>
                        <h3>{name}</h3>
                        <h3 style={{ fontWeight: "400" }}>
                            @{name} · {date}
                        </h3>
                    </div>
                    <h4 style={{ fontWeight: "400" }}>{tweetText}</h4>
                    {imageExists && (
                        <img
                            width={"100%"}
                            src={imgSrc}
                            alt=""
                            style={{ borderRadius: "1rem" }}
                        />
                    )}

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        }}
                    >
                        {/* Comments */}
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
                        {/* Retweets */}
                        <div className="tweet-menu">
                            {/* style={{display: "hidden"}} */}
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
                        {/* Likes */}
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
                                {likes.length}
                            </h5>
                        </div>
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <IosShareIcon
                                    fontSize="small"
                                    sx={{ visibility: "" }}
                                />
                                {/* Add 2 options for sharing: 
                                    - Copy to Clipboard the Text Content
                                    - Copy to Clipboard the Image Source
                                 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tweet;
