import React, { useState } from "react";
import "./widgetSection.css";
import { Widgets } from ".";

function WidgetSection(props) {
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
            <Widgets
                projectName="Ken Yokohama - Portfolio"
                imageSrc="https://www.mediabistro.com/wp-content/uploads/2016/02/tips-on-getting-your-copywriter-portfolio-started.jpg"
                projectLink="https://github.com/Ken-Yokohama/Twitter-Clone"
            />
        </div>
    );
}

export default WidgetSection;
