import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, Input } from "@mui/material";
import React, { useState } from "react";

function TweetBox(props) {
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
                    />
                    <hr style={{ border: "1px solid #EFF3F4" }} />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button>Media</Button>
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
                            loading={true}
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
