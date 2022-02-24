import React, { useState } from "react";
import { Tweet, TweetBox, TweetHeader } from "../components";

function Main(props) {
    return (
        <div>
            <TweetHeader />
            <TweetBox />
            <Tweet />
        </div>
    );
}

export default Main;
