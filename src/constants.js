
// Skills Section Logo's
// Import tech logos directly from their respective files
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Education Section Logo's
// Removed unused/missing education logos; using provided SPPU and unnamed logos instead
import sppuLogo from './assets/education_logo/SPPU_logo_wfjwrv.webp';
import unnamedLogo from './assets/education_logo/unnamed.png';

// Project Section Logo's
// Only include existing logos to avoid Vite import errors
import universityMgmtLogo from './assets/work_logo/university_management.png';
import gymMgmtLogo from './assets/work_logo/gym_management.webp';
import adventureMapLogo from './assets/work_logo/adventure_map.webp';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

export const experiences = [];

export const education = [
  {
    id: 0,
    img: sppuLogo,
    school: "SavitriBai Phule University",
    date: "2025",
    grade: "7.89 / 10 CGPA",
    desc: "Bachelor of Business Administration (Computer Applications). Completed core coursework in business, computing, and applied projects.",
    degree: "Bachelor of Business Administration (Computer Applications)",
  },
  {
    id: 1,
    img: sppuLogo,
    school: "H.H.C.",
    date: "2022",
    grade: "49%",
    desc: "Higher Secondary (12th) completed under H.H.C., focused on general stream subjects.",
    degree: "Higher Secondary (12th) - H.H.C.",
  },
  {
    id: 2,
    img: unnamedLogo,
    school: "S.S.E.",
    date: "2018",
    grade: "73.80%",
    desc: "Secondary School (10th) completed under S.S.E., foundational coursework and examinations.",
    degree: "Secondary School (10th) - S.S.E.",
  },
];

export const projects = [
  {
    id: 0,
    title: "University Management System",
    description:
      "University Management System is a Java-based desktop application designed to manage student records, academic information, examinations, fees, and administrative tasks. The system includes secure login, student management, leave management, and database integration using MySQL and JDBC, providing a user-friendly interface for efficient data handling.",
    image: universityMgmtLogo,
    tags: ["Java", "MySQL", "JDBC", "Desktop Application", "Student Management"],
    github: "https://github.com/somnathdeveloper/University-Management-System",
    webapp: "#",
  },
  {
    id: 1,
    title: "Gym Management System",
    description:
      "I developed a Gym Management System web application that helps gym owners manage their members, track business performance, and analyze growth through dashboards and analytics. The system has a modern responsive interface and uses database integration for storing user and business data.",
    image: gymMgmtLogo,
    tags: ["Web Application", "Members Management", "Analytics", "Dashboard", "Database"],
    github: "#",
    webapp: "#",
  },
  {
    id: 2,
    title: "Adventure Map System",
    description:
      "Adventure Map System is a location-based interactive application that allows users to explore global locations, visualize routes, and access geographic information using map integration technologies such as Google Maps API.",
    image: adventureMapLogo,
    tags: ["Maps", "Google Maps API", "Routes", "Location-based", "Interactive"],
    github: "#",
    webapp: "#",
  },
];