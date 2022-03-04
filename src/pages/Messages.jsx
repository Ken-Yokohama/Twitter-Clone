import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ChatRoom1, ChatRoom2, ChatRoom3, ChatHome } from ".";

function Messages(props) {
    return (
        <div>
            <div className="main-title">
                <h2>Chat Rooms</h2>
            </div>
            <Routes>
                <Route path="/" element={<ChatHome />} />
                <Route path="/ChatRoom1" element={<ChatRoom1 />} />
                <Route path="/ChatRoom2" element={<ChatRoom2 />} />
                <Route path="/ChatRoom3" element={<ChatRoom3 />} />
            </Routes>
        </div>
    );
}

export default Messages;
