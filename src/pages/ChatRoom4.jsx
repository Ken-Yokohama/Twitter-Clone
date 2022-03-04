import React, { useState } from "react";
import { ChatData, ChatInput } from "../components";

function ChatRoom4(props) {
    return (
        <div>
            <div className="main-title">
                <h2>Chat Room 4</h2>
            </div>
            <ChatData />
            <ChatInput />
        </div>
    );
}

export default ChatRoom4;
