export const skillsData = [
    {
        skillType: "Languages",
        list: [
        {
            name: "JavaScript",
            progress: 90,
        },
        {
            name: "TypeScript",
            progress: 90,
        },
        {
            name: "Python",
            progress: 90,
           
        },
        {
            name: "C++",
            progress: 90,
            
        },
        {
            name: "Java",
            progress: 80,
            
        },
        {
            name: "HTML",
            progress: 90,
            
        },
        {
            name: "CSS",
            progress: 90,
            
        },
    ]
    },
    {
        skillType: "Frameworks & Library",
        list: [
        {
            name: "React.js",
            progress: 85,
           
        },
        {
            name: "Redux",
            progress: "85"
        },
        {
            name: "Express.js",
            progress: 85,
           
        }
        ,
        {
            name: "Node.js",
            progress: 60,
           
        },
        {
          name: "Bootstrap",
          progress: 90,
          
      },
        {
            name: "Django",
            progress: 70,
            
        },
        {
            name: 'Django Rest Framework',
            progress: 80,
            
        },
        {
            name: "JavaFX",
            progress: 80,
            
        },
    ]
    },
    {
        skillType: "Databases",
        list: [
        {
            name: "MongoDB",
            progress: 90,
           
        },
        {
            name: "PostgreSQL",
            progress: 90,
          
        },
        {
            // PL/SQL
            name: "Oracle",
            progress: 85,
            
        },
    ]},
    {
        skillType: "Tools",
        list: [
        {
            name: "REST API",
            progress: 90,
        },
        {
            name: "Git",
            progress: 90,
            
        },
        {
            name: "GitHub",
            progress: 90,
            
        },
        {
            name: "Bash",
            progress: 60,
            
        },
    ]},
    {
        skillType: "Others",
        list: [
        {
            name: "Data Structures and Algorithms",
            progress: 90,
           
        },
        {
            name: "Problem Solving",
            progress: 90,
            
        },
        {
            name: "Object Oriented Programming",
            progress: 90,
           
        },
        {
            name: "Competitive Programming",
            progress: 90,
           
        },
    ]},
        
];

export const lastUpdated = "December 26, 2022";

export const problemSolvingData = [
    {
        oj: "CodeForces",
        username: "F__",
        profileLink: "https://codeforces.com/profile/F__",
        solveCount : 888,
    },
    {
        oj: "CodeChef",
        username: "dreamy_tourist",
        profileLink: "https://www.codechef.com/users/dreamy_tourist",
        solveCount : 22,
    },
    {
        oj: "AtCoder",
        username: "mahbubulhaque",
        profileLink: "https://atcoder.jp/users/mahbubulhaque",
        solveCount : 21,
    },
    {
        oj: "TopCoder",
        username: "bool_bool",
        profileLink: "https://www.topcoder.com/members/bool_bool/",
        solveCount : 20,
    }
    ,
    {
        oj: "LightOJ",
        username: "mahbubulhaque",
        profileLink: "https://lightoj.com/user/mahbubulhaque",
        solveCount : 88,
    
    },
    {
        oj: "SPOJ",
        username: "dreamy_tourist",
        profileLink: "https://www.spoj.com/users/dreamy_tourist/",
        solveCount : 29,
    },
    {
        oj: "UVA",
        username: "bool_bool",
        profileLink: "https://uhunt.onlinejudge.org/id/911156",
        solveCount : 54,
    },
    {
        oj: "Vjudge",
        username: "Md_Mahbubul_Haq",
        profileLink: "https://vjudge.net/user/Md_Mahbubul_Haq",
        solveCount : 307,
    },
    {
        oj: "Timus",
        username: "Mahbubul Haque",
        profileLink: "https://acm.timus.ru/author.aspx?id=259361",
        solveCount : 16,
    },
    {
        oj: "HackerEarth",
        username: "Mahbubul Haque",
        profileLink: "https://www.hackerearth.com/@mdmahbubulhaq201711",
        solveCount : 22,
    },
    {
        oj: "LeetCode",
        username: "mahbubulhaque",
        profileLink: "https://leetcode.com/mahbubulhaque/",
        solveCount : 160,
    },
    {
        oj: "Toph",
        username: "bool_bool",
        profileLink: "https://toph.co/u/bool_bool",
        solveCount : 5,
    },
    {
        oj: "CS Academy",
        username: "mahbubulhaque",
        profileLink: "https://csacademy.com/user/mahbubulhaque/",
        solveCount : 8,
    },
    {
        oj: "POJ",
        username: "bool_bool",
        profileLink: "http://poj.org/userstatus?user_id=bool_bool",
        solveCount : 4,
    },
    {
        oj: "HackerRank",
        username: "Mahbubul Haque",
        profileLink: "https://www.hackerrank.com/mdmahbubulhaq201",
        solveCount : 2,
    },


];

export const projectsInfo = [
  {
    projectType: "Web Projects",
    id: "web",
    projects: [
      {
        title: "Personal Portfolio Website",
        titleLink: {
          link: "https://mahbubul-haq.github.io/",
          text: "Mahbubul Haque",
        },
        role: "Everything",
        technology: "React, Bootstrap, CSS",
        description: `This is my personal portfolio website. This website contains my professional as well as academic
                experience. 
                `,
        features: [
          "Responsive Design, Dark Mode",
          "Resume, Projects, Experience, Skills",
          "CI/CD using git & GitHub pages",
        ],
        demonstration: {
          showVideo: false,
          embedLink: "",
          imgLink: "images/website_normal.png",
          imgLinkDark: "images/website_dark.png",
        },
      },
    ],
  },
  {
    projectType: "Academic Projects",
    id: "academic",
    projects: [
      {
        title: "Travel Bug - Travel & Tourism Website",
        role: "Frontend, Backend, Host(everything), Messaging, Schema, ERD, Class Diagram",
        technology:
          " NodeJs, Express, React, MongoDB, Bootstrap, CSS, JWT, Stripe",
        description: `Travel Bug is a travel and tourism website. It is a platform for hosting
                experiences, booking experiences, and providing transport guidelines. This project was 
                made for Software Developmment Sessional course along with two other team members.
                `,
        features: [
          "Hosting experiences, Booking experiences",
          "Providing Transport Guidelines",
          "Payment Gateway through Stripe",
          "Messaging System, Authentication",
        ],
        githubLink: "https://github.com/mahbubul-haq/Travel-Bug-Airbnb",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/g-shwX9y4aI",
          imgLink: "",
        },
      },
      {
        title: "RIDER - Ride Sharing & Car Rental Website",
        role: "Everything",
        technology:
          "Django, Oracle PL/SQL, Bootstrap, Python, JavaScript, CSS, Leaflet",
        description: `RIDER is a ride sharing and car rental website. This website provides amazing
                ride sharing experience and car rental service. This project was made for Database Sessional
                course.
                `,
        features: [
          "Ride Sharing, Car Rental",
          "Map Integration using Leaflet and GeoLocation",
        ],
        githubLink: "https://github.com/mahbubul-haq/RIDER-Ride-Sharing-and-Car-Rental-Service",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/eiNzZp00KUg",
          imgLink: "",
        },
        
      },
      {
        title: "Smart Room Simulation",
        role: "Everything",
        technology: `C, Atmega32, LCD, Keypad, Buzzer, Motor, PIR Sensor, Gas Sensor,
                Flame Sensor, Temperature Sensor, GSM Module, LDR Sensor`,
        description: `Smart Room Simulation is a simulation of a smart room in Proteus Software.
                This simulation provides a smart room experience. This project was
                made for Microcontroller Sessional course.
                `,
        features: [
          "Manual, Automatic, Remote Control",
          "Detects Fire, Gas Leak, Temperature, Light, Human Entrance",
          "Sends SMS through GSM Module",
        ],
        githubLink: "https://github.com/mahbubul-haq/Smart-Room-Simulation",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/iGjB0XKjxSU",
          imgLink: "",
        },
      },
      {
        title: "Network Car Racing Game",
        role: "Everything",
        technology: `Java, JavaFX, Socket Programming, Multithreading, OOP`,
        description: `Network Car Racing Game is a multiplayer car racing game. This game is
                played between two players on the same network. This project was made for
                Object Oriented Programming Language Sessional course.
                `,
        features: [
          "Registration and login",
          "Multiplayer connection through Socket Programming",
        ],
        githubLink: "https://github.com/mahbubul-haq/Network-Car-Racing-Game",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/8uobXJ6C7NY",
          imgLink: "",
        },
      },
      {
        title: "DX BALL Game",
        role: "Creating different levels, Game logic, Design, Implementation",
        technology: `C, iGraphics.h`,
        description: `DX BALL Game is a single player multi level game. It has different levels and different types of
                bricks. This project was made for Structured Programming Language Sessional course.
                `,
        features: [
          "Different Levels, different types of bricks",
          "Smooth gameplay",
        ],
        githubLink: "https://github.com/mahbubul-haq/DX-BALL-Game",
        demonstration: {
          showVideo: true,
          embedLink: "https://www.youtube.com/embed/MobiPt_rQKo",
          imgLink: "",
        },
      },
    ],
  },
];

export const homeCards = [
  {
    title: "Full Stack Web Developer",
    description: "More than 3 years of experience in this field",
    cardClass: "home-card0",
    cardTopClass: "full-stack-top0",
    cardButtonClass: "card-btn0",
    imgSrc:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
    buttonText: "See my skills",
    navigateTo: "skills",
  },
  {
    title: "Worked on Some Amazing Projects",
    description: "I have worked on both individual and team projects",
    cardClass: "home-card0",
    cardTopClass: "full-stack-top0",
    cardButtonClass: "card-btn0",
    imgSrc:
      "https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x.png",
    buttonText: "See my projects",
    navigateTo: "projects",
  },
  {
    title: "Expert in Data Structures and Algorithms",
    description: "Experienced in implementation and analysis",
    cardClass: "home-card0",
    cardTopClass: "full-stack-top0",
    cardButtonClass: "card-btn0",
    imgSrc:
      "https://www.educative.io/v2api/editorpage/5323562194829312/image/4539157721382912",
    buttonText: "See in Github",
    link: "https://github.com/mahbubul-haq/ImplementedAlgorithms",
  },
  {
    title: "Expert in Problem Solving",
    description: "Solved 1500+ problems in different OJs",
    cardClass: "home-card0",
    cardTopClass: "full-stack-top0",
    cardButtonClass: "card-btn0",
    imgSrc:
      "https://transportfutures.institute/wp-content/uploads/2019/07/ideal_image.png",
    buttonText: "See in Github",
    link: "https://github.com/mahbubul-haq/MySolvedProblems",
  },
];


export const resumeExperience = [
  {
    type: "Problem Solving",
    list: ["Solved 1500+ problems in different Online Judges."],
    link: "https://github.com/mahbubul-haq/MySolvedProblems",
    linkText: "Github Link",
  },
  {
    type: "Competitive Programming",
    list: [
      "I was an active competitive programmer in different Online Judges especially in Codeforces.",
    ],
  },
  {
    type: "Algorithm Learning",
    list: [
      "Learned and implemented large numbers of Algorithms & Data Structures.",
    ],
    link: "https://github.com/mahbubul-haq/ImplementedAlgorithms",
    linkText: "Github Link",
  },
];

export const resumeEducation = [
  {
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "Bachelor of Science in Computer Science and Engineering",
    duration: "2017 -2022",
    address: "Dhaka, Bangladesh",
  }
]

export const resumeSkills = [
  {
    skillType: "Languages",
    skills: "JavaScript, TypeScript, Python, C++, Java, CSS, HTML",
  },
  {
    skillType: "Frameworks",
    skills: "NodeJs, Express, React, Bootstrap, Django, Django Rest Framework",
  },
  {
    skillType: "Database",
    skills: "MongoDB, Oracle, PostgreSQL",
  },
  {
    skillType: "Tools",
    skills: "REST API, Git, Github, Linux",
  },
  {
    skillType: "Others",
    skills: "Data Structures, Algorithms, Competitive Programming, Problem Solving",
  },
];

export const resumeProjects = [
  {
    title: "Travel & Tourism Website",
    technology: "NodeJS, Express, React, MongoDB, Bootstrap, CSS, Stripe",
    features: [
      `A website for hosting personal experiences, booking experiences and providing detailed 
transport guidelines for travelling a particular place.`,
      `Solves travel related inconvenience and provides an amazing experience for travelers.`,
    ],
    year: "2022",
    link: "https://github.com/mahbubul-haq/Travel-Bug-Airbnb",
    linkText: "Github Link",
  },
  {
    title: "Ride Sharing & Car Rental Website",
    technology: "Django, Oracle, Python, JavaScript, Bootstrap, CSS, HTML, Leaflet",
    features: [
      "A website for ride sharing and car rental service.",
      "Makes day to day life transportation easier for people of all ages.",
    ],
    year: "2020",
    link: "https://github.com/mahbubul-haq/RIDER-Ride-Sharing-and-Car-Rental-Service",
    linkText: "Github Link",
  },
  {
    title: "Personal Portfolio Website",
    technology: "React, Bootstrap, CSS",
    year: "2022",
    link: "https://mahbubul-haq.github.io/",
    linkText: "Website Link",
  },
  {
    title: "Smart Room Simulation",
    technology: "C, Atmega32",
    year: "2021",
    features: [
      "Simulation of a smart room with different sensors, automatic, manual and remote controls.",
    ],
    link: "https://github.com/mahbubul-haq/Smart-Room-Simulation",
    linkText: "Github Link",
  },
  {
    title: "Network Car Racing Game",
    technology: "Java, JavaFX, Socket Programming",
    year: "2018",
    features: [
      "Multiplayer 2D Car racing game which can be played by connecting two devices.",
    ]
    ,
    link: "https://github.com/mahbubul-haq/Network-Car-Racing-Game",
    linkText: "Github Link",
  },
  {
    title: "DX Ball Game",
    technology: "C, iGraphics.h",
    year: "2017",
    features: [
      "Single player multilevel 2D game developed using iGraphics library.",
    ],
    link: "https://github.com/mahbubul-haq/DX-BALL-Game",
    linkText: "Github Link",
  },
];




