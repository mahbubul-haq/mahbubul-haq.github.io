import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPython, SiExpress, SiMui, SiBootstrap, SiRedux, SiSocketdotio, SiDjango, SiMongodb, SiPostgresql, SiOracle, SiThealgorithms, SiGoogledataflow, SiUml } from 'react-icons/si';
import { FaJava, FaNodeJs, FaGitAlt, FaFigma, FaRegObjectUngroup } from 'react-icons/fa';
import { GrReactjs, GrCycle } from 'react-icons/gr';
import { BsStripe } from 'react-icons/bs';
import { GiCheckboxTree } from 'react-icons/gi';
import { TbInputSearch, TbSchema } from 'react-icons/tb';
import { FaGear } from 'react-icons/fa6';
import { CgIfDesign } from 'react-icons/cg';


const icons = {
    "JavaScript": {
        icon: <SiJavascript />,
        color: "#D2B700",
    },
    "TypeScript": {
        icon: <SiTypescript />,
        color: "#007ACC",
    },
    "HTML": {
        icon: <SiHtml5 />,
        color: "#E98E75",
    },
    "CSS": {
        icon: <SiCss3 />,
        color: "#3298E3",
    },
    "Python": {
        icon: <SiPython />,
        color: "#3776AB",
    },
    "C++": {
        //icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px" clipRule="evenodd"><path fill="#1199EF" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd" /><path fill="#1199EF" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd" /><path fill="#DADADA" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd" /><path fill="#1199EF" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd" /><path fill="#DADADA" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd" /><path fill="#DADADA" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd" /></svg>,
        icon: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px" clipRule="evenodd"><path fill="#00549d" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"/><path fill="#0086d4" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"/><path fill="#bdbdbd" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"/><path fill="#0075c0" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd"/></svg>,
        color: "#1199EF",
    },
    "Java": {
        icon: <FaJava />,
        color: "#A8EAFF",
    },
    "ReactJs": {
        icon: <GrReactjs />,
        color: "#61DAFB",
    },
    "Express": {
        icon: <SiExpress />,
        color: "#000000",
    },
    "NodeJs": {
        icon: <FaNodeJs />,
        color: "#3C873A",
    },
    "Material UI": {
        icon: <SiMui />,
        color: "#0081CB",
    },
    "Bootstrap": {
        icon: <SiBootstrap />,
        color: "#7952B3",
    },
    "Redux": {
        icon: <SiRedux />,
        color: "#764ABC",
    },
    "socket.io": {
        icon: <SiSocketdotio />,
        color: "#010101",
    },
    "Django": {
        icon: <SiDjango />,
        color: "#092E20",
    },
    "DRF": {
        icon: <SiDjango />,
        color: "#092E20",
    },
    "JavaFX": {
        icon: <FaJava />,
        color: "#A8EAFF",
    },
    "MongoDB": {
        icon: <SiMongodb />,
        color: "#13AA52",
    },
    "PostgreSQL": {
        icon: <SiPostgresql />,
        color: "#489FE6",
    },
    "Oracle": {
        icon: <SiOracle />,
        color: "#FF6D6D",
    },
    "REST API": {
        icon: <FaGear />,
        color: "#000000",
    },
    "Git": {
        icon: <FaGitAlt />,
        color: "#FF927E",
    },
    "Figma": {
        icon: <FaFigma />,
        color: "#FF997B",
    },
    "Stripe": {
        icon: <BsStripe />,
        color: "#6772E5",
    },
    "Algorithms": {
        icon: <SiThealgorithms />,
        color: "#000000",
    },
    "Data Structures": {
        icon: <SiGoogledataflow />,
        color: "#000000",
    },
    "Problem Solving": {
        icon: <TbInputSearch />,
        color: "#FFA116",
    },
    "OOP": {
        icon: <FaRegObjectUngroup />,
        color: "#000000",
    },
    "Schema Design": {
        icon: <TbSchema />,
        color: "#13AA52",
    },
    "Design Patterns": {
        icon: <GiCheckboxTree />,
        color: "#000000",
    },

    "UML Diagrams": {
        icon: <SiUml />,
        color: "#000000",
    },
    "SDLC Models": {
        icon: <GrCycle />,
        color: "#000000",
    },
    "UI/UX Basics": {
        icon: <CgIfDesign/>,
        color: "#000000",
    },

}

export default icons;