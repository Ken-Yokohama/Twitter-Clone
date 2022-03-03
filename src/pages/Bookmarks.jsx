import {
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";

function Bookmarks({ userId }) {
    const [bookmarkedTweets, setBookmarkedTweets] = useState([]);

    useEffect(async () => {
        const usersCollectionRef = collection(db, "users");
        const usersQuery = query(
            usersCollectionRef,
            where("user", "==", auth?.currentUser?.email)
        );
        const registeredUsersData = await getDocs(usersQuery);
        const userId = registeredUsersData.docs.map((users) => ({
            ...users.data(),
            id: users.id,
        }));
        const bookmarkCollectionRef = collection(
            db,
            "users",
            userId[0]?.id,
            "bookmarks"
        );
        const unsub = onSnapshot(bookmarkCollectionRef, (snapshot) => {
            setBookmarkedTweets(
                snapshot.docs.map((bookmarks) => ({
                    ...bookmarks.data(),
                    id: bookmarks.id,
                }))
            );
        });
        return unsub;
    }, []);

    return (
        <div>
            <div className="main-title">
                <h2>Bookmarks</h2>
                {bookmarkedTweets.map((bookmark) => (
                    <div key={bookmark.id}>
                        <h3>Author: {bookmark.author}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bookmarks;
