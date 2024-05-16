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

     els1.childNodes[i].style.transitionDelay = `${ 0.2}s`;
      
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
          display: "grid",
          gridTemplateColumns: minWidth1400 ? "repeat(3, 1fr)" : maxwidth900 ? "1fr" : "repeat(2, 1fr)",
          gap: "2rem",

        }}>
        {portfolioProjects.map((projectInfo, index) => (
          <Box key={index} sx={{
            height: "100%",
            width: "100%",
            opacity: 0,
            transform: maxwidth900 ? "translateY(4rem)" : !minWidth1400 ? (index % 2 === 0? "translateX(-16rem)" : "translateX(16rem)") :
              ((index - 1) % 3 == 0 ? "translateY(4rem)" : (index % 3 == 0 ? "translateX(-8rem)" : "translateX(8rem)")),
            transition: "opacity 0.5s, transform 0.7s ease-out",
          }}>
            <ProjectCard projectInfo={projectInfo}

            />
          </Box>
        ))}
      </Box>

    </Box>
  )
}

export default PortfolioProjects