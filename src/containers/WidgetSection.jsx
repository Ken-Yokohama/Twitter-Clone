import { Box } from "@mui/material";
import React, { useState } from "react";
import "./widgetSection.css";

function WidgetSection(props) {
    const handleClickPortfolio = () => {
        window.open("https://github.com/Ken-Yokohama/Twitter-Clone");
    };

    return (
        <div
            className="widgetContainer"
            style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <h2>Thanks for visiting my twitter clone project!</h2>
            <h3 style={{ fontWeight: "100" }}>
                Please feel free to view my other projects:
            </h3>
            <Box
                sx={{
                    backgroundColor: "#F7F9F9",
                    borderRadius: "1rem",
                    cursor: "pointer",
                    ":hover": {
                        bgcolor: "#F2F4F4",
                    },
                    padding: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
                onClick={handleClickPortfolio}
            >
                <h4>Ken Yokohama - Portfolio</h4>
                <img
                    src="https://www.mediabistro.com/wp-content/uploads/2016/02/tips-on-getting-your-copywriter-portfolio-started.jpg"
                    alt="portfolio-img"
                    style={{ width: "100%", borderRadius: "1rem" }}
                />
            </Box>
        </div>
    );
}

export default WidgetSection;
