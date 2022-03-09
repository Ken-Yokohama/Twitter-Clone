import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import { Box, FormHelperText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Lists(props) {
    const [loading, setLoading] = useState(false);

    const [input, setInput] = useState("");
    const [sendError, setSendError] = useState("");

    const usersListCollectionRef = collection(
        db,
        "users",
        auth?.currentUser?.uid,
        "lists"
    );

    const handleSendButton = async () => {
        setLoading(true);
        try {
            await addDoc(usersListCollectionRef, {
                text: input,
                uid: auth?.currentUser?.uid,
                timestamp: serverTimestamp(),
            });
            setInput("");
            setSendError("");
            setLoading(false);
        } catch (err) {
            setSendError("Error Sending Message PLease Try Again");
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="main-title">
                <h2>Reminders Lists</h2>
            </div>
            <Box sx={{ display: "flex", padding: "1rem", gap: "1rem" }}>
                <Box sx={{ width: "100%" }}>
                    <Input
                        multiline
                        placeholder="Enter Text"
                        fullWidth
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input}
                    />
                    {sendError && (
                        <FormHelperText error>{sendError}</FormHelperText>
                    )}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LoadingButton
                        onClick={handleSendButton}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </LoadingButton>
                </Box>
            </Box>
            <FormGroup sx={{ padding: "1rem" }}>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Things I have to Do"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Things I have to Do"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Things I have to Do"
                />
            </FormGroup>
        </div>
    );
}

export default Lists;
