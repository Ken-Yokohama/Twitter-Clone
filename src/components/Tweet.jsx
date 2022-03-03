import { Avatar, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./tweet.css";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { Comments } from ".";
import { LoadingButton } from "@mui/lab";
import { FormHelperText } from "@mui/material";

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

    // Comments Modal Style
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        width: 600,
        height: "70%",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: "1rem",
        p: 1,
        outline: "none",
        overflow: "auto",
    };

    // Comments Firebase
    const [comments, setComments] = useState([]);

    const commentsCollectionRef = collection(db, "tweets", tweetId, "comments");
    const commentsQuery = query(
        commentsCollectionRef,
        orderBy("timestamp", "asc")
    );

    useEffect(() => {
        const unsub = onSnapshot(commentsQuery, (snapshot) => {
            setComments(
                snapshot.docs.map((comments) => ({
                    ...comments.data(),
                    id: comments.id,
                }))
            );
        });
        return unsub;
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [commentsInput, setCommentsInput] = useState("");
    const [loadCommentButton, setLoadCommentButton] = useState(false);
    const [commentError, setCommentError] = useState(null);

    const handleCommentButton = async () => {
        setLoadCommentButton(true);
        try {
            await addDoc(commentsCollectionRef, {
                author: auth?.currentUser?.email,
                text: commentsInput,
                timestamp: serverTimestamp(),
            });
            setCommentsInput("");
            setLoadCommentButton(false);
        } catch (err) {
            setCommentError(err.message);
            setLoadCommentButton(false);
        }
    };

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
                                {comments.length}
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
                        {/* Close Button */}
                        <Box>
                            <CloseIcon
                                onClick={handleClose}
                                sx={{
                                    fontSize: "2rem",
                                    borderRadius: "1rem",
                                    transition: "background 0.3s",
                                    ":hover": {
                                        bgcolor: "rgba(15, 20, 25, 0.1)",
                                    },
                                }}
                            />
                        </Box>
                        {/* Comments */}
                        {comments.map((comment) => (
                            <Comments key={comment.id} comment={comment} />
                        ))}
                        {/* Comments Input */}
                        <Box
                            sx={{
                                display: "flex",
                                padding: "4px 16px 8px 16px",
                                gap: "16px",
                            }}
                        >
                            <Avatar sx={{ marginTop: "3px" }} />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: "1",
                                    gap: "0.2rem",
                                }}
                            >
                                <Input
                                    id="outlined-multiline-flexible"
                                    placeholder="Tweet your reply"
                                    multiline
                                    fullWidth
                                    disableUnderline
                                    sx={{
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        color: "#0f1419",
                                    }}
                                    inputProps={{ maxLength: 280 }}
                                    onChange={(e) => {
                                        setCommentsInput(e.target.value);
                                    }}
                                    value={commentsInput}
                                />
                                <hr style={{ border: "1px solid #EFF3F4" }} />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div>
                                        <h3 style={{ fontWeight: "100" }}>
                                            Replying to{" "}
                                            <span
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#6ABDF5",
                                                }}
                                            >
                                                @testName
                                            </span>
                                        </h3>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <FormHelperText>
                                            {commentError && commentError}
                                        </FormHelperText>
                                        <LoadingButton
                                            variant="contained"
                                            sx={{
                                                bgcolor: "#1d9bf0",
                                                borderRadius: "30px",
                                                fontWeight: 600,
                                                "&:hover": {
                                                    bgcolor: "#1a8cd8",
                                                },
                                            }}
                                            disabled={
                                                commentsInput.length != 0
                                                    ? false
                                                    : true
                                            }
                                            onClick={handleCommentButton}
                                            loading={loadCommentButton}
                                        >
                                            Reply
                                        </LoadingButton>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Tweet;
