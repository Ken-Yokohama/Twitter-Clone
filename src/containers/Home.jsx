import { Container } from "@mui/material";
import React, { useState } from "react";
import { Feed, Sidebar, WidgetSection } from ".";
import "./home.css";

function Home(props) {
    return (
        <Container>
            <div className="home-container">
                <Sidebar />
                <Feed />
                <WidgetSection />
            </div>
        </Container>
    );
}

export default Home;
