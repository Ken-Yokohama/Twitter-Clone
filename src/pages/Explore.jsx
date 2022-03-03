import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function Explore(props) {
    const [registeredUsers, setRegisteredUsers] = useState([
        { user: "kenyo1" },
        { user: "kenyo2" },
    ]);

    const [selectedChoice, setSelectedChoice] = useState(null);

    return (
        <div>
            <div className="main-title">
                <h2>Explore</h2>
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
                    />
                </div>
                <h1>{selectedChoice && selectedChoice}</h1>
            </div>
        </div>
    );
}

export default Explore;
