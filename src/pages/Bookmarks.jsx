import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";

function Bookmarks({ userId }) {
    const testUserId = () => {
        console.log(userId);
    };

    return (
        <div>
            <div className="main-title">
                <h2>Bookmarks</h2>
                <button onClick={testUserId}>UserId</button>
            </div>
        </div>
    );
}

export default Bookmarks;
