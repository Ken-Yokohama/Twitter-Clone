import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import {
    collection,
    getDocs,
    limit,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ExploreProfile } from ".";

function Explore(props) {
    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(async () => {
        const usersCollectionRef = collection(db, "users");
        const registeredUsersData = await getDocs(usersCollectionRef);
        setRegisteredUsers(
            registeredUsersData.docs.map((users) => ({ ...users.data() }))
        );
    }, []);

    const [selectedChoice, setSelectedChoice] = useState(null);

    const navigate = useNavigate();

    return (
        <div>
            <div className="main-title">
                <h2>Explore</h2>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "1rem",
                }}
            >
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    sx={{ width: "80%" }}
                    options={registeredUsers.map((option) => option.user)}
                    renderInput={(params) => (
                        <TextField {...params} label="Search User" />
                    )}
                    onChange={(e, value) => {
                        setSelectedChoice(value);
                    }}
                />
                <SearchIcon
                    sx={{
                        fontSize: "2.5rem",
                        padding: "0.4rem",
                        borderRadius: "2rem",
                        cursor: "pointer",
                        transition: "background 0.3s",
                        ":hover": {
                            backgroundColor: "#d8d8d8",
                        },
                    }}
                    onClick={() => {
                        selectedChoice && navigate(selectedChoice);
                    }}
                />
            </div>
            <Routes>
                {registeredUsers.map((user) => (
                    <Route
                        key={user.user}
                        path={user.user}
                        element={<ExploreProfile profileSearch={user.user} />}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default Explore;
