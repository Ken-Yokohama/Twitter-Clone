import React, { useEffect, useState } from "react";
import { ChatData, ChatInput } from "../components";

function Chatroom1(props) {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <>
            <div className="main-title">
                <h2>Chat Room 1</h2>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                }}
            >
                <h1>First Chat Data</h1>
                <ChatData />

                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <ChatData />
                <h1>Lastest Chat Data</h1>
            </div>

            <ChatInput />
        </>
    );
}

export default Chatroom1;
