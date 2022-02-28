import { bgcolor, Box } from "@mui/system";
import {
    collection,
    limit,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Tweet, TweetBox, TweetHeader } from "../components";
import { auth, db } from "../firebase-config";

function Main(props) {
    const likes = ["kenyo@gmail.com", "efknwenfwe", "wegnoiwehohie"];

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
            <TweetHeader />
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Tweet
                    key={tweet.id}
                    tweetCollectionRef={tweetCollectionRef}
                    tweetId={tweet.id}
                    fullNameEmail={tweet.author}
                    name={tweet.author.substring(
                        0,
                        tweet.author.lastIndexOf("@")
                    )}
                    date={tweet.date?.toDate()?.toDateString()}
                    tweetText={tweet.tweetText}
                    imgSrc={tweet.imgSrc}
                    likes={tweet.likes}
                />
            ))}
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

export default Main;
