import React, { useState } from "react";
import { ChatData, ChatInput } from "../components";

function ChatRoom2(props) {
    return (
        <>
            <div className="main-title">
                <h2>Chat Room 2</h2>
            </div>
            <ChatData />
            <ChatInput />
        </>
    );
}

export default ChatRoom2;