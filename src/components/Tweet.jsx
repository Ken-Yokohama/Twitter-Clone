import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./tweet.css";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

function Tweet({
    tweetCollectionRef,
    fullNameEmail,
    tweetId,
    name,
    date,
    imgSrc,
    tweetText,
    likes,
}) {
    const handleLikeButton = async () => {
        const targetTweetRef = doc(db, "tweets", tweetId);
        if (likes.includes(auth?.currentUser?.email)) {
            const newLikes = likes.filter((like) => {
                return like != auth?.currentUser?.email;
            });
            await updateDoc(targetTweetRef, { likes: newLikes });
        } else {
            const newLikes = [...likes, auth?.currentUser?.email];
            await updateDoc(targetTweetRef, { likes: newLikes });
        }
    };

    const handleDeleteButton = async (id) => {
        const targetTweetRef = doc(db, "tweets", id);
        await deleteDoc(targetTweetRef);
    };

    // Comments Modal
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
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
                            <h3>{name}</h3>
                            <h3 style={{ fontWeight: "400" }}>
                                @{name} · {date}
                            </h3>
                        </div>
                        {auth?.currentUser?.email == fullNameEmail && (
                            <DeleteForeverTwoToneIcon
                                fontSize="small"
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                    handleDeleteButton(tweetId);
                                }}
                            />
                        )}
                        {/* <DeleteForeverTwoToneIcon fontSize="small" /> */}
                    </div>
                    <h4
                        style={{
                            fontWeight: "400",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {tweetText}
                    </h4>
                    {imgSrc && (
                        <img
                            width={"100%"}
                            src={imgSrc}
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
                                23
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
                                23
                            </h5>
                        </div>
                        {/* Likes */}
                        <div className="tweet-menu" onClick={handleLikeButton}>
                            <div className="tweet-menu-icons">
                                <FavoriteBorderTwoToneIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#536471",
                                        color:
                                            likes.includes(
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
                                        likes.includes(
                                            auth?.currentUser?.email
                                        ) && "red",
                                }}
                            >
                                {likes.length}
                            </h5>
                        </div>
                        <div className="tweet-menu">
                            <div className="tweet-menu-icons">
                                <IosShareIcon
                                    fontSize="small"
                                    sx={{ visibility: "" }}
                                />
                                {/* Add 2 options for sharing: 
                                    - Copy to Clipboard the Text Content
                                    - Copy to Clipboard the Image Source
                                 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography>
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                        >
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Tweet;
