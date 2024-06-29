import { createContext } from "react";
import React from "react";

export const MainContext = createContext();

export const MainState = (props) => {
    const [page, setpage] = React.useState(localStorage.getItem("page") || "home-page");
    const [mode, setmode] = React.useState(localStorage.getItem("mode") || "dark");

    const setMode = (mode) => {
        localStorage.setItem("mode", mode);
        setmode(mode);
    };
    const setPage = (page) => {
        localStorage.setItem("page", page);
        setpage(page);
    };

    const scrollToContact = () => {
        let container = document.querySelector(".app-container");
        let contact = document.querySelector("#contact");
    
        container.scrollTo({
          top: contact.offsetTop - 100,
          behavior: "smooth",
        });
      };

    return (
        <MainContext.Provider value={{ page, setPage, mode, setMode, scrollToContact }}>
            {props.children}
        </MainContext.Provider>
    );
}
