import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

function Notifications(props) {
    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(async () => {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, orderBy("timestamp", "desc"));

        const registeredUsersData = await getDocs(q);
        setRegisteredUsers(
            registeredUsersData.docs.map((users) => ({ ...users.data() }))
        );
    }, []);

    return (
        <div>
            <div className="main-title">
                <h2>Notifications</h2>
            </div>
            <div
                className="main-title"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                <h4>All Latest Registered Users</h4>
            </div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    "@media(max-width: 700px)": { gap: "0.5rem" },
                    "@media(max-width: 500px)": { gap: "2rem" },
                    "@media(max-width: 400px)": { gap: "3rem" },
                }}
            >
                {registeredUsers.map((user) => (
                    <div
                        key={user.user}
                        style={{
                            height: "4rem",
                            display: "flex",
                            alignItems: "center",
                            padding: "0.5rem 1rem",
                            gap: "1rem",
                        }}
                    >
                        <TwitterIcon
                            sx={{ fontSize: "2rem", color: "#1D9BF0" }}
                        />
                        <h4 style={{ fontWeight: "400" }}>
                            There was a new user created with an account name{" "}
                            <span
                                style={{
                                    fontWeight: "400",
                                    color: "#6ABDF5",
                                }}
                            >
                                @
                                {user.user.substring(
                                    0,
                                    user.user.lastIndexOf("@")
                                )}{" "}
                            </span>
                            on {user.timestamp?.toDate()?.toDateString()}{" "}
                        </h4>
                        {/* <h2>
                            {user.timestamp?.toDate()?.toDateString()} - {user.user}
                        </h2> */}
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default Notifications;
