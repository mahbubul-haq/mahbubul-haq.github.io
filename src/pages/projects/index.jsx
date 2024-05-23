import { portfolioProjects, otherProjects } from "../../data/data";
import Box from "@mui/material/Box";
import ProjectCard from "../../components/ProjectCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useEffect } from "react";
import Contact from "../../components/Contact";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

const Projects = () => {
  const isMobileScreens = useMediaQuery("(max-width: 600px)");
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const maxWidth700 = useMediaQuery("(max-width: 700px)");
  const { setPage } = useContext(MainContext);

  const theme = useTheme();

  useEffect(() => {
    setPage("projects");
    document.querySelector(".app-container").scrollTo(0, 0);
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let el = entry.target;
          if (entry.isIntersecting) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0) translateX(0)";
          }
        });
      },
      {
        threshold: 0,
      }
    );

    let els = document.querySelectorAll(".projects-element");

    els.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      els.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: 2000,
          mx: "auto",
          mb: isNonMobileScreens ? "10rem" : "5rem",
          px: isNonMobileScreens
            ? "64px"
            : isMobileScreens
              ? "16px"
              : "32px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isMobileScreens ? "1rem" : "3rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mt: "5rem",
              mb: "1rem",
              opacity: 0,
              transform: "translateY(4rem)",
              transition: "all 0.4s ease-out",
            }}
            className="projects-element"
          >
            Web Projects
          </Typography>
          {portfolioProjects.map((projectInfo, index) => (
            <Box
              className={`projects-element projects-portfolios-${index}`}
              key={index}
              sx={{
                width: "100%",
                opacity: 0,
                transform: "translateY(4rem)",
                transition: "opacity 0.7s ease-out 0.2s , transform 0.7s ease-out 0.2s, box-shadow 0.3s ease-out 0s",
              }}
              // onMouseEnter={
              //   (e) => handleHover(e, `projects-portfolios-${index}`)
              // }
              // onMouseLeave={(e) => handleLeave(e, `projects-portfolios-${index}`)}
            >
              <ProjectCard
                projectInfo={projectInfo}
                projectsPage={true}
                embed={true}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isMobileScreens ? "1rem" : "3rem",
            mt: "5rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mt: "5rem",
              mb: "1rem",
              opacity: 0,
              transform: "translateY(4rem)",
              transition: "all 0.4s ease-out",
            }}
            className="projects-element"
          >
            Other Projects
          </Typography>
          {otherProjects.map((projectInfo, index) => (
            <Box
              className={`projects-element projects-other-${index}`}
              key={index}
              sx={{
                width: "100%",
                opacity: 0,
                transform: "translateY(4rem)",
                transition: "opacity 0.7s ease-out 0.2s , transform 0.7s ease-out 0.2s, box-shadow 0.3s ease-out 0s",
              }}
              // onMouseEnter={
              //   (e) => handleHover(e, `projects-other-${index}`)
              // }
              // onMouseLeave={(e) => handleLeave(e, `projects-other-${index}`)}
            >
              <ProjectCard
                projectInfo={projectInfo}
                projectsPage={true}
                embed={true}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        id="contact"
        sx={{
          width: "100%",
          background: theme.palette.background.dark,
          py: isNonMobileScreens ? "3rem" : "3rem",
          // pb: isNonMobileScreens ? "10rem" : "5rem",
          borderTopLeftRadius: maxWidth700 ? "2rem" : "4rem",
          borderTopRightRadius: maxWidth700 ? "2rem" : "4rem",
        }}>
        <Box sx={{
          mx: "auto",
          maxWidth: 2000,
          px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
        }}
        >

          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
