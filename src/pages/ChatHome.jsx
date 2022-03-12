import { Box } from "@mui/material";
import React, { useState } from "react";
import { ChatRoomOptions } from "../components";

function ChatHome(props) {
    return (
        <>
            <div className="main-title">
                <h2>Chat Rooms</h2>
            </div>
            <Box
                sx={{
                    padding: "1rem",
                    gap: "1rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    "@media(max-width: 600px)": {
                        gridTemplateColumns: "1fr",
                    },
                }}
            >
                <ChatRoomOptions
                    chatRoomNumber="1"
                    chatName="Ukrane"
                    backgroundImg="https://api.time.com/wp-content/uploads/2022/02/ukraine-russia-war.jpg"
                    route="/messages/chatroom1"
                />
                <ChatRoomOptions
                    chatRoomNumber="2"
                    chatName="Dev Chat"
                    backgroundImg="https://images.barrons.com/im-353649?width=1280&size=1"
                    route="/messages/chatroom2"
                />
                <ChatRoomOptions
                    chatRoomNumber="3"
                    chatName="Productivity Chat"
                    backgroundImg="https://media.istockphoto.com/photos/businessman-working-with-financial-report-charts-business-analytics-picture-id1199010148?k=20&m=1199010148&s=612x612&w=0&h=RS2ruAFzT_iWgIWiLT_IrwBig9EuUon11MRUKp83b8Y="
                    route="/messages/chatroom3"
                />
                <ChatRoomOptions
                    chatRoomNumber="4"
                    chatName="Jokes Chat"
                    backgroundImg="https://static01.nyt.com/images/2017/11/26/arts/26comedycrash-illo/26comedycrash-illo-jumbo.gif"
                    route="/messages/chatroom4"
                />
            </Box>
        </>
    );
}

export default ChatHome;
