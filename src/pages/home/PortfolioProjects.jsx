import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectCard from '../../components/ProjectCard';

import { portfolioProjects } from '../../data/data';
import { useEffect } from 'react';


const PortfolioProjects = () => {

  const isMobileScreens = useMediaQuery("(max-width: 600px)");
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const maxwidth900 = useMediaQuery('(max-width: 900px)');
  const minWidth1400 = useMediaQuery('(min-width: 1400px)');


  useEffect(() => {

    let observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        let el = entry.target;
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0) translateX(0)";
        }
      });
    }, {
      threshold: 0
    });

    let els1 = document.querySelector(".portfolio-projects-cards");




    for (let i = 0; i < els1.childNodes.length; i++) {
      if (maxwidth900) break;

      els1.childNodes[i].style.transitionDelay = `${0.2}s`;

    }

    els1.childNodes.forEach(el => {
      observer1.observe(el);
    });

    return () => {
      els1.childNodes.forEach(el => {
        observer1.unobserve(el);
      });
    }
  }
    , []);

  const handleHover = (e, index) => {
    let els = document.querySelector(".portfolio-projects-cards");
    for (let i = 0; i < els.childNodes.length; i++) {
      if (i !== index) {
        //add after psuedo element

        els.childNodes[i].childNodes[1].style.zIndex = 10;
        els.childNodes[i].childNodes[1].style.opacity = 1;


      }
      else {
        els.childNodes[i].childNodes[0].style.transform = "scale(1.02) translateY(-0.25rem)";
        els.childNodes[i].childNodes[0].style.boxShadow = "0 4px 8px rgba(0, 0, 0, 1)";
      }
    }
  }

  const handleLeave = (index) => {
    let els = document.querySelector(".portfolio-projects-cards");
    for (let i = 0; i < els.childNodes.length; i++) {
      //remove after psuedo element
      els.childNodes[i].childNodes[1].style.zIndex = -1;
      els.childNodes[i].childNodes[1].style.opacity = 0;
      if (i === index) {
        els.childNodes[i].childNodes[0].style.transform = "scale(1) translateY(0)";
        els.childNodes[i].childNodes[0].style.boxShadow = "none";
      }
    }

  }

  return (
    <Box>
      <Typography variant="h4" sx={{
        fontSize: isNonMobileScreens ? "2rem" : isMobileScreens ? "1.5rem" : "1.8rem",
        mb: isNonMobileScreens ? "4rem" : "2rem",
      }}>
        Portfolio Projects

      </Typography>
      <Box
        className="portfolio-projects-cards"
        sx={{
          // display: "grid",
          // gridTemplateColumns: minWidth1400 ? "repeat(3, 1fr)" : maxwidth900 ? "1fr" : "repeat(2, 1fr)",
          display: "flex",
          justifyContent: "center",
          gap: isMobileScreens ? "1rem" : "2rem",
          flexWrap: "wrap",
          width: "100%",

        }}>
        {portfolioProjects.map((projectInfo, index) => (
          <Box key={index} sx={{
            // height: "100%",
            // width: "100%",
            opacity: 0,
            borderRadius: "0.6rem",

            width: maxwidth900 ? "100%" : minWidth1400 ? 'calc(33.33% - 1.34rem)' : 'calc(50% - 1rem)',
            transform: maxwidth900 ? "translateY(4rem)" : !minWidth1400 ? (index % 2 === 0 ? index == 4 ? "translateY(4rem)" : "translateX(-16rem)" : "translateX(16rem)") :
              ((index - 1) % 3 == 0 ? index == 4 ? "translateX(8rem)" : "translateY(4rem)" : (index % 3 == 0 ? "translateX(-8rem)" : "translateX(8rem)")),
            transition: "opacity 0.5s, transform 0.7s ease-out, box-shadow 0.5s",
            position: "relative",
          }}
            onMouseEnter={(e) => handleHover(e, index)}
            onMouseLeave={() => handleLeave(index)}

          >

            <ProjectCard projectInfo={projectInfo}

            />
            <Box sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
              opacity: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              transition: "all 0.5s",
              borderRadius: "0.6rem",
            }}> </Box>
          </Box>
        ))}
      </Box>

    </Box>
  )
}

export default PortfolioProjects