import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase-config";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

function Comments(props) {
    const name = "testName";
    const date = "testDate";
    const fullNameEmail = "testFullNameEmail";
    const tweetId = "testTweetId";
    const tweetText =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem nisi tempora tempore iste nemo eaque vero suscipit expedita ipsam.";

    const handleDeleteButton = async () => {};

    return (
        <div>
            <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
                <Avatar />
                <div style={{ flex: "1" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            <h3>{name}</h3>
                            <h3 style={{ fontWeight: "400" }}>
                                @{name} · {date}
                            </h3>
                        </div>
                        {auth?.currentUser?.email == fullNameEmail && (
                            <DeleteForeverTwoToneIcon
                                fontSize="small"
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                    handleDeleteButton(tweetId);
                                }}
                            />
                        )}
                        {/* <DeleteForeverTwoToneIcon fontSize="small" /> */}
                    </div>
                    <h4
                        style={{
                            fontWeight: "400",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {tweetText}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Comments;
