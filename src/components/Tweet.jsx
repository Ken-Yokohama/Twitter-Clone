import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./tweet.css";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Tweet({
    tweetCollectionRef,
    tweetId,
    name,
    date,
    imgSrc,
    tweetText,
    likes,
}) {
    const handleLikeButton = async () => {
        const targetTweetRef = doc(db, "tweets", tweetId);
        if (likes.includes(auth?.currentUser?.email)) {
            const newLikes = likes.filter((like) => {
                return like != auth?.currentUser?.email;
            });
            await updateDoc(targetTweetRef, { likes: newLikes });
        } else {
            const newLikes = [...likes, auth?.currentUser?.email];
            await updateDoc(targetTweetRef, { likes: newLikes });
        }
    };

    return (
        <div>
            <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
                <Avatar />
                <div style={{ flex: "1" }}>
                    <div style={{ display: "flex" }}>
                        <h3>{name}</h3>
                        <h3 style={{ fontWeight: "400" }}>
                            @{name} · {date}
                        </h3>
                    </div>
                    <h4
                        style={{
                            fontWeight: "400",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {tweetText}
                    </h4>
                    {imgSrc && (
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
                        <div className="tweet-menu" onClick={handleLikeButton}>
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
