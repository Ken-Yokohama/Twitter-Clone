import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ChatInput(props) {
    return (
        <div
            style={{
                position: "sticky",
                bottom: "0",
                padding: "1rem",
                backgroundColor: "white",
                display: "flex",
                gap: "1rem",
            }}
        >
            <Input placeholder="Type your message" fullWidth multiline />
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                        backgroundColor: "#1d9bf0",
                        ":hover": {
                            backgroundColor: "#1a8cd8",
                        },
                    }}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

export default ChatInput;
