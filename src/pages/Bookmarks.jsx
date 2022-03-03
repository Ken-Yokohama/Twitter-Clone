import { Avatar } from "@mui/material";
import {
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
    doc,
    deleteDoc,
    orderBy,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";

function Bookmarks({}) {
    const [bookmarkedTweets, setBookmarkedTweets] = useState([]);
    const [userId, setUserId] = useState(null);

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
        const bookmarkQuery = query(
            bookmarkCollectionRef,
            orderBy("dateBookmarked", "desc")
        );
        setUserId(userId[0]?.id);
        const unsub = onSnapshot(bookmarkQuery, (snapshot) => {
            setBookmarkedTweets(
                snapshot.docs.map((bookmarks) => ({
                    ...bookmarks.data(),
                    id: bookmarks.id,
                }))
            );
        });
        return unsub;
    }, []);

    const handleDeleteButton = async (id) => {
        const targetTweetRef = doc(db, "users", userId, "bookmarks", id);
        await deleteDoc(targetTweetRef);
    };

    const handleOpen = () => {};

    const handleLikeButton = () => {};

    const handlePopover = () => {};

    return (
        <div>
            <div className="main-title">
                <h2>Bookmarks</h2>
            </div>
            {bookmarkedTweets.map((bookmark) => (
                <div
                    style={{ display: "flex", padding: "1rem", gap: "1rem" }}
                    key={bookmark.id}
                >
                    <Avatar />
                    <div style={{ flex: "1" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div style={{ display: "flex" }}>
                                <h3>
                                    {bookmark.author.substring(
                                        0,
                                        bookmark.author.lastIndexOf("@")
                                    )}
                                </h3>
                                <h3 style={{ fontWeight: "400" }}>
                                    @
                                    {bookmark.author.substring(
                                        0,
                                        bookmark.author.lastIndexOf("@")
                                    )}{" "}
                                    · {bookmark.date}
                                </h3>
                            </div>
                            <DeleteForeverTwoToneIcon
                                fontSize="small"
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                    handleDeleteButton(bookmark.id);
                                }}
                            />
                        </div>
                        <h4
                            style={{
                                fontWeight: "400",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {bookmark.tweetText}
                        </h4>
                        {bookmark.imgSrc && (
                            <img
                                width={"100%"}
                                src={bookmark.imgSrc}
                                alt=""
                                style={{ borderRadius: "1rem" }}
                            />
                        )}

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            }}
                        >
                            {/* Comments */}
                            <div className="tweet-menu" onClick={handleOpen}>
                                <div className="tweet-menu-icons">
                                    <CommentOutlinedIcon
                                        fontSize="small"
                                        sx={{ color: "#536471" }}
                                    />
                                </div>
                                <h5
                                    className="tweet-menu-count"
                                    style={{ fontWeight: "100" }}
                                >
                                    N/A
                                </h5>
                            </div>
                            {/* Retweets */}
                            <div className="tweet-menu">
                                {/* style={{display: "hidden"}} */}
                                <div className="tweet-menu-icons">
                                    <AutorenewTwoToneIcon
                                        fontSize="small"
                                        sx={{ color: "#536471" }}
                                    />
                                </div>
                                <h5
                                    className="tweet-menu-count"
                                    style={{ fontWeight: "100" }}
                                >
                                    N/A
                                </h5>
                            </div>
                            {/* Likes */}
                            <div
                                className="tweet-menu"
                                onClick={handleLikeButton}
                            >
                                <div className="tweet-menu-icons">
                                    <FavoriteBorderTwoToneIcon
                                        fontSize="small"
                                        sx={{
                                            color: "#536471",
                                            color:
                                                bookmark.likes.includes(
                                                    auth?.currentUser?.email
                                                ) && "red",
                                        }}
                                    />
                                </div>
                                <h5
                                    className="tweet-menu-count"
                                    style={{
                                        fontWeight: "100",
                                        color:
                                            bookmark.likes.includes(
                                                auth?.currentUser?.email
                                            ) && "red",
                                    }}
                                >
                                    {bookmark.likes.length}
                                </h5>
                            </div>
                            {/* Share Button */}
                            <div className="tweet-menu">
                                <div
                                    className="tweet-menu-icons"
                                    onClick={handlePopover}
                                >
                                    <IosShareIcon
                                        fontSize="small"
                                        sx={{ visibility: "" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bookmarks;
