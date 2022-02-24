import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default Feed;
