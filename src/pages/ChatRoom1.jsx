import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ChatData, ChatInput } from "../components";
import { db } from "../firebase-config";

function Chatroom1(props) {
    const [chat, setChat] = useState([]);

    const chatCollectionsRef = collection(db, "chatroom1");

    useEffect(() => {
        const unsub = onSnapshot(chatCollectionsRef, (snapshot) => {
            setChat(
                snapshot.docs.map((chat) => ({ ...chat.data(), id: chat.id }))
            );
        });
        window.scrollTo(0, document.body.scrollHeight);
        return unsub;
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
                }}
            >
                <h1>First Chat Data</h1>
                {chat.map((chat) => (
                    <div>
                        <ChatData chat={chat} key={chat.id} />
                    </div>
                ))}
                <h1>Lastest Chat Data</h1>
            </div>

            <ChatInput />
        </>
    );
}

export default Chatroom1;
