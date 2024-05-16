import Box from "@mui/material/Box";
import { useEffect } from "react";
import GradientBall from "../../components/GradientBall";
import useTheme from "@mui/material/styles/useTheme";
import "./Home.css";

const HeroImage = () => {
    const theme = useTheme();
    useEffect(() => {
        let el = document.querySelector(".app-container");
        let el1 = document.querySelector(".hero-image-background");
        let el2 = document.querySelector(".hero-image-container");

        let event = el.addEventListener("scroll", () => {
            el1.style.transform = `rotate(${
                (Math.min(200, el.scrollTop) * 10) / el1.clientHeight
            }deg)`;
            el2.style.transform = `translateX(-${
                (Math.min(200, el.scrollTop) * 20) / el2.clientHeight
            }px)`;
        });

        return () => {
            el.removeEventListener("scroll", event);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                //ratio 1:1
                height: "100%",
                transition: "all 0.3s ease-out",
                // "&:hover": {
                //     transform: "scale(1.05)",
                //     boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)",
                // },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    left: "-50px",
                    bottom: -50,
                }}
            >
                <GradientBall
                    width="150px"
                    height="150px"
                    background={`radial-gradient( circle at 10% 50%, ${theme.palette.background.bubbleTop} 10%, ${theme.palette.background.bubbleBottom} 100%)`}
                />
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    right: "-20px",
                    bottom: -20,
                }}
            >
                <GradientBall
                    width="50px"
                    height="50px"
                    background={`radial-gradient( circle at 10% 50%, ${theme.palette.background.bubbleTop} 10%, ${theme.palette.primary.dark} 100%)`}
                />
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    left: "-80px",
                    top: -30,
                }}
            >
                <GradientBall
                    width="100px"
                    height="100px"
                    background={`radial-gradient( circle at 10% 50%, ${theme.palette.background.bubbleTop} 10%, ${theme.palette.secondary.main} 100%)`}
                />
            </Box>
            {/* dummy element with position fixed */}
            <svg className="clipper">
                <defs>
                    <clipPath
                        id="clipper-path"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path
                            d="M0.0156348 0.0903604C0.00776257 0.0448633 0.0453224 0.00434173 0.0912851 0.00874479L0.854546 0.0818625C0.887913 0.085059 0.914331 0.111461 0.917548 0.144826L0.992378 0.920945C0.996423 0.9629 0.962745 0.998889 0.920614 0.997632L0.225879 0.976911C0.192624 0.975919 0.164663 0.951658 0.15899 0.918877L0.0156348 0.0903604Z"
                            fill="#D9D9D9"
                        />
                    </clipPath>
                </defs>
            </svg>

            <Box
                className="hero-image-background"
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    rotate: "3deg",
                    // transition: 'all 0.1s ease-in',
                    transition: "all 0.3s linear",
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 457 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25.6318 62.9465C26.6967 45.5637 40.3796 31.6084 57.738 30.2011L418.51 0.952089C439.449 -0.745458 457.155 16.2552 456.31 37.2453L440.44 431.505C439.751 448.618 426.78 462.719 409.784 464.831L39.704 510.819C17.9639 513.521 -0.886212 495.813 0.453347 473.946L25.6318 62.9465Z"
                        fill="#FFBE4C"
                    />
                </svg>
            </Box>
            <Box
                className="hero-image-container"
                sx={{
                    position: "absolute",
                    width: "104%",
                    height: "100%",
                    bottom: "0.4rem",
                    left: "-2.5rem",
                    transition: "all 0.3s ease-out",
                    // "&:hover": {
                    //     transform: "scale(1.05)",
                    //     //background blur
                    //     //backdropFilter: "blur(5px)",
                    //     "&::before": {
                    //         content: "''",
                    //         position: "absolute",
                    //         width: "110%",
                    //         height: "110%",
                    //         top: "-5%",
                    //         left: "-5%",
                    //         filter: "blur(10px)",
                    //         background: "rgba(0,0,0,0.1)",
                    //     },
                    // },
                }}
            >
                <img
                    className="hero-image-img"
                    src="https://source.unsplash.com/random?Profile&Darkbackground"
                    alt="myImage"
                    style={{
                        width: "103%",
                        height: "100%",
                        objectFit: "cover",
                        clipPath: "url(#clipper-path)",
                        transition: "all 0.3s ease-out",
                        // overflow: "visible",
                    }}
                    loading="lazy"
                />
            </Box>
        </Box>
    );
};

export default HeroImage;
