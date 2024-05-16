export const themeSettings = (mode) => {
    return {

        //preserve default theme settings

        // add necessary code to preserve default theme settings



        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        darker: "#0F661C",
                       
                    },
                    text: {
                       
                    },
                    neutral: {
                       
                    },
                    background: {
                       
                    },
                }
                : {
                    primary: {
                        light: "#FFC96A",
                        main: "#FF8943",
                        dark: "#FF6A12",

                    },
                    secondary: {
                        light: "#e4ff6a",
                        link: "#BEFE4D",
                        main: "#5CDB95",   // not used


                    },
                    text: {
                        primary: "#fff",
                        secondary: "#E2E2E2",
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
                        secondary: "#062E5F",
                        btnSecondary: "#000",
                        bubbleTop: "#E4D6FF",
                        bubbleBottom: "#5F29D1",
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
                        400: "#9CA3AF",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#1F2937",
                        900: "#111827",
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