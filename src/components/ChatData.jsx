import { Avatar, Paper } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase-config";

function ChatData({ chat }) {
    return (
        <div style={{ padding: "1rem" }}>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent:
                        chat.author == auth?.currentUser?.email && "flex-end",
                }}
            >
                {chat.author !== auth?.currentUser?.email && <Avatar />}
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems:
                            chat.author == auth?.currentUser?.email
                                ? "flex-end"
                                : "flex-start",
                    }}
                >
                    <Paper
                        sx={{
                            borderRadius: "1rem",
                            backgroundColor:
                                chat.author == auth?.currentUser?.email
                                    ? "orange"
                                    : "#D6D6D6",
                            padding: "0.75rem",
                        }}
                    >
                        <h3 style={{ fontWeight: "400" }}>{chat.text}</h3>
                    </Paper>
                    <h6>{chat.author} - Test time</h6>
                </div>
            </div>
        </div>
    );
}

export default ChatData;
