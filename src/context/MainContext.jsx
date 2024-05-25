import { createContext } from "react";
import React from "react";

export const MainContext = createContext();

export const MainState = (props) => {
    const [page, setPage] = React.useState("home-page");
    const [mode, setmode] = React.useState(localStorage.getItem("mode") || "light");

    const setMode = (mode) => {
        localStorage.setItem("mode", mode);
        setmode(mode);
    };

    return (
        <MainContext.Provider value={{ page, setPage, mode, setMode }}>
            {props.children}
        </MainContext.Provider>
    );
}
