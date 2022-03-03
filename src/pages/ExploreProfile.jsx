import { Box } from "@mui/material";
import {
    collection,
    limit,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

function ExploreProfile({ profileSearch }) {
    const [tweets, setTweets] = useState([]);

    const [queryLimit, setQueryLimit] = useState(10);

    const tweetCollectionRef = collection(db, "tweets");
    const q = query(
        tweetCollectionRef,
        orderBy("date", "desc"),
        limit(queryLimit)
    );

    useEffect(() => {
        const unsub = onSnapshot(q, (snapshot) => {
            setTweets(
                snapshot.docs.map((tweets) => ({
                    ...tweets.data(),
                    id: tweets.id,
                }))
            );
        });
        return unsub;
    }, [queryLimit]);

    return (
        <div>
            {profileSearch}
            {tweets.map((tweet) => (
                <div key={tweet.id}>{tweet.author}</div>
            ))}

            {/* Show More Button */}
            {tweets.length + 1 > queryLimit && (
                <Box
                    onClick={() => {
                        setQueryLimit((prevValue) => prevValue + 10);
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "75px",
                        cursor: "pointer",
                        color: "#43ABF2",
                        transition: "background 0.25s",
                        "&:hover": {
                            backgroundColor: "rgb(29,155,240, .1)",
                        },
                    }}
                >
                    Show More
                </Box>
            )}
        </div>
    );
}

export default ExploreProfile;
