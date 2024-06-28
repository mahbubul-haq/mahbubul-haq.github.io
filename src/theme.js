export const themeSettings = (mode) => {
    return {

        //preserve default theme settings

        // add necessary code to preserve default theme settings



        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        light: "#FFC96AFA",
                        mainLight: "#FFB082",
                        main: "#FF8943FA",
                        dark: "#FF6A12FA",

                    },
                    secondary: {
                        light: "#e4ff6a",
                        link: "#BEFE4D",
                        main: "#5CDB95",   // not used
                        linkHover: "#58E117",
                        main70: "#5CDB95B3",
                        main40: "#5CDB9540",
                        dark: "#2DA540",
                        darker: "#063D04",

                    },
                    text: {
                        primary: "#f2f2f2",
                        // secondary: "#E2E2E2",
                        secondary: "#bbb",
                        btnPrimary: "#000",
                        tertiary: "#ddd",
                    },
                    shadow: {
                        btnPrimary: "rgba(0, 0, 0, 0.25)",
                    },
                    neutral: {
                        
                    },
                    background: {
                        nav: 'rgba(50, 50, 50, 0.6)',
                        skillChip: 'rgba(100, 100, 100, 0.2)',
                        default: "#121212",
                        alt: "#141414",
                        dark: "#252525",
                        // dark: "rgba(0, 0, 0, 0.2)",
                        secondary: "#062E5F",
                        btnSecondary: "#000",
                        bubbleTop: "#E4D6FF",
                        bubbleBottom: "#5F29D1",
                        homeCompetitive: "rgba(50, 50, 50, 0.9)",
                        codeforcesPurple: "#b200aa",
                        contactLink: "#374151",
                        contactLinkHover: "#303844",
                    },
                    common: {
                        black: "#000",
                        white: "#fff",
                    },
                    // add all grey colors
                    grey: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        350: "#B8C2CC",
                        400: "#9CA3AF",
                        450: "#82909E",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#1F2937",
                        900: "#111827",
                        1000: "#0F0F0F",
                    },

                    error : {
                        main: "#880B0B",
                        background: "#F8AC82",
                    },
                   
                }
                : {
                    primary: {
                        light: "#FFC96A",
                        mainLight: "#FFB082",
                        main: "#FF8943",
                        dark: "#FF6A12",

                    },
                    secondary: {
                        light: "#e4ff6a",
                        link: "#BEFE4D",
                        main: "#5CDB95",   // not used
                        linkHover: "#58E117",
                        main70: "#5CDB95B3",
                        main40: "#5CDB9540",
                        dark: "#2DA540",
                        darker: "#063D04",
                    },
                    text: {
                        primary: "#fff",
                        // secondary: "#E2E2E2",
                        secondary: "#ddd",
                        tertiary: "#E2E2E2",
                        btnPrimary: "#000",
                    },
                    shadow: {
                        btnPrimary: "rgba(0, 0, 0, 0.25)",
                    },
                    neutral: {
                        
                    },
                    background: {
                        nav: 'rgba(143, 95, 240, 0.6)',
                        skillChip: 'rgba(43, 245, 221, 0.2)',
                        default: "#6939D9",
                        alt: "#915AFF",
                        dark: "#062E5F",
                        // dark: "rgba(0, 0, 0, 0.2)",
                        secondary: "#062E5F",
                        btnSecondary: "#000",
                        bubbleTop: "#E4D6FF",
                        bubbleBottom: "#5F29D1",
                        homeCompetitive: "rgba(6, 46, 95, 0.7)",
                        codeforcesPurple: "#b200aa",
                        contactLink: "#5E22D9",
                        contactLinkHover: "#4413A7",
                    },
                    common: {
                        black: "#000",
                        white: "#fff",
                    },
                    // add all grey colors
                    grey: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        350: "#B8C2CC",
                        400: "#9CA3AF",
                        450: "#82909E",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#1F2937",
                        900: "#111827",
                        1000: "#0F0F0F",
                    },

                    error : {
                        main: "#880B0B",
                        background: "#F8AC82",
                    },
                   
                }),
        },

        typography: {
            fontFamily: "Poppins, sans-serif",
            display1: {
                fontSize: "4rem",
                fontWeight: 700,
            },
            display2: {
                fontSize: "3rem",
                fontWeight: 700,
            },
            h1: {
                fontSize: "2.5rem",
                fontWeight: 700,
            },
            h2: {
                fontSize: "2rem",
                fontWeight: 700,
            },
            h3: {
                fontSize: "1.5rem",
                fontWeight: 700,
            },
            h4: {
                fontSize: "1.25rem",
                fontWeight: 700,
            },
            h5: {
                fontSize: "1rem",
                fontWeight: 700,
            },
            h6: {
                fontSize: "0.875rem",
                fontWeight:400,
            },
            menu: {
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
            },
            body1: {
                fontSize: "1rem",
                fontWeight: 400,
            },
            body2: {
                fontSize: "0.875rem",
                fontWeight: 400,
            },
            button: {
                fontFamily: "Inter, sans-serif", 
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                whiteSpace: "nowrap",
                
            },
        },
    };
}