import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth, db } from "../firebase-config";
import {
    Bookmarks,
    Explore,
    Lists,
    Main,
    Messages,
    Notifications,
    Profile,
} from "../pages";

function Feed(props) {
    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(async () => {
        const usersCollectionRef = collection(db, "users");
        const usersQuery = query(
            usersCollectionRef,
            where("user", "==", auth?.currentUser?.email)
        );
        const registeredUsersData = await getDocs(usersQuery);
        setRegisteredUsers(
            registeredUsersData.docs.map((users) => ({
                ...users.data(),
                id: users.id,
            }))
        );
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route
                    path="/bookmarks"
                    element={<Bookmarks userId={registeredUsers[0]?.id} />}
                />
                <Route path="/lists" element={<Lists />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default Feed;
