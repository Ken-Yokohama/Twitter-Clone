import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, Input } from "@mui/material";
import React, { useState, useRef } from "react";
import FormHelperText from "@mui/material/FormHelperText";

function TweetBox(props) {
    // Ref to File Input
    const hiddenFileInput = React.useRef(null);

    const handleMediaButton = () => {
        // Call File Input
        hiddenFileInput.current.click();
    };

    const [file, setFile] = useState(null);
    const [fileSelectError, setFileSelectError] = useState(null);

    const handleSelectedFile = (e) => {
        const selectedFile = e.target.files[0];
        const allowedFileTypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/gif",
        ];
        // 1mb = 100,000 bytes
        const allowedFileSize = Number("500000");
        if (
            selectedFile &&
            allowedFileTypes.includes(selectedFile.type) &&
            allowedFileSize > selectedFile.size
        ) {
            setFile(selectedFile);
            setFileSelectError(null);
        } else if (allowedFileTypes.includes(selectedFile.type) == false) {
            setFile(null);
            setFileSelectError(
                "Please upload an image of proper format (jpg, jpeg, png or gif)"
            );
        } else {
            setFile(null);
            setFileSelectError(
                "Please upload an image file size less than 5mb"
            );
        }
    };

    const [tweetInput, setTweetInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTweetButton = async () => {};

    return (
        <div>
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
                        placeholder="What's Happening?"
                        multiline
                        fullWidth
                        disableUnderline
                        sx={{
                            fontSize: "20px",
                            lineHeight: "24px",
                            color: "#0f1419",
                        }}
                        onChange={(e) => {
                            setTweetInput(e.target.value);
                        }}
                    />
                    <hr style={{ border: "1px solid #EFF3F4" }} />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <input
                            type="file"
                            style={{ display: "none" }}
                            ref={hiddenFileInput}
                            onChange={handleSelectedFile}
                        />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Button onClick={handleMediaButton}>Media</Button>
                            {file && (
                                <FormHelperText>{file.name}</FormHelperText>
                            )}
                            {fileSelectError && (
                                <FormHelperText error>
                                    {fileSelectError}
                                </FormHelperText>
                            )}
                        </div>
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
                            onClick={handleTweetButton}
                            loading={loading}
                        >
                            Tweet
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default TweetBox;
