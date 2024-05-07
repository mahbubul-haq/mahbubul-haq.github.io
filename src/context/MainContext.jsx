import { createContext } from "react";
import React from "react";

export const MainContext = createContext();

export const MainState = (props) => {
    const [page, setPage] = React.useState("home-page");
    const [mode, setMode] = React.useState("light");

    return (
        <MainContext.Provider value={{ page, setPage, mode, setMode }}>
            {props.children}
        </MainContext.Provider>
    );
}
