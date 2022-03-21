import React, { useState } from "react";
import "./widgetSection.css";
import { Widgets } from ".";
import { Box } from "@mui/material";
import portfolioImg from "../images/portfolio.JPG";

function WidgetSection(props) {
    return (
        <Box
            className="widgetContainer"
            sx={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                "@media(max-width: 1000px)": {
                    display: "none",
                },
            }}
        >
            <h2 style={{ marginTop: "1rem" }}>
                Thanks for visiting my twitter clone project!
            </h2>
            <h3 style={{ fontWeight: "100" }}>
                Please feel free to view my other projects:
            </h3>
            <Widgets
                projectName="Ken Yokohama - Portfolio"
                imageSrc={portfolioImg}
                projectLink="https://github.com/Ken-Yokohama"
            />
        </Box>
    );
}

export default WidgetSection;
