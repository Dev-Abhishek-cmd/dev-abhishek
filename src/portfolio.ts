/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhishek Kumar Kalia | Portfolio",
  description:
    "Senior Software Engineer with 10+ years of expertise in Fullstack & Mobile Development (React Native, ReactJS, Next.js, Electron.js, Node.js, Cloud & DevOps).",
  og: {
    title: "Abhishek Kumar Kalia Portfolio",
    type: "website",
    url: "https://abhishekkalia.dev/",
  },
};

//Home Page
const greeting = {
  title: "Abhishek Kumar Kalia",
  logo_name: "Abhishek Kalia",
  nickname: "Senior Software Engineer",
  subTitle:
    "Seasoned IT professional with 10+ years of expertise in Fullstack & Mobile Development, specializing in React Native, ReactJS, Electron.js, Next.js, Node.js, Apollo GraphQL, PostgreSQL, Docker, and AWS.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/abhishekkalia",
  githubProfile: "https://github.com/abhishekkalia",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:kabhi1792@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Mobile & Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing cross-platform mobile applications using React Native framework (React Native 0.73.0)",
        "⚡ Building dynamic, interactive, and responsive web applications using React.js, Next.js, and Electron.js",
        "⚡ Implementing Redux, MobX, Redux-Saga, and Redux-Persist for state management across web & mobile",
        "⚡ Mobile app deployment and release management to Apple App Store and Google Play Store",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript & ES6",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "Electron.js",
          fontAwesomeClassname: "simple-icons:electron",
          style: { color: "#47848F" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
      ],
    },
    {
      title: "Backend Development & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building scalable server-side applications & RESTful APIs using Node.js and Express.js",
        "⚡ Developing GraphQL services with Apollo Server & Apollo Client",
        "⚡ Relational & NoSQL Database management using PostgreSQL and MySQL",
        "⚡ Cloud infrastructure management on AWS and Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
      ],
    },
    {
      title: "DevOps, CI/CD & Build Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Containerizing applications using Docker for consistent development & deployment environments",
        "⚡ Implementing CI/CD automation pipelines using GitHub Actions and Jenkins",
        "⚡ Managing projects and tasks using Jira, GitLab, and Trello with Agile/Scrum methodologies",
        "⚡ Package & build management with NPM, Yarn, and Webpack",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Bachelor of Engineering (Information Technology)",
      subtitle: "B.E. in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "Information Technology",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Studied core subjects of Computer Science & Information Technology including Software Engineering, DBMS, OS, Data Structures & Algorithms.",
        "⚡ Gained extensive practical knowledge in Web & Mobile Application Development, System Architecture, and Software Development Best Practices.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack & Mobile Engineering Excellence",
      subtitle: "- Senior Software Engineer Certification",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Engineering",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "10+ Years of Enterprise Engineering & Leadership",
  description:
    "A seasoned Senior Software Engineer with over a decade of hands-on expertise architecting, building, and scaling high-performance mobile and web solutions. Specialized in React Native, React.js, Next.js, Node.js, and AWS Cloud Infrastructure, with a strong commitment to clean code standards, team leadership, and delivering impactful digital products.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "IndiaNIC Infotech Ltd",
          company_url: "https://www.indianic.com/",
          logo_path: "indianic_logo.svg",
          duration: "September 2018 - Present",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Architecting and delivering enterprise-scale mobile and web applications using React Native, React.js, Next.js, TypeScript, and Node.js. Leading cross-functional teams through end-to-end SDLC, driving cloud architecture on AWS, optimizing application performance, and engineering resilient API microservices for global clients.",
          descriptionBullets: [
            "Architected and delivered 12+ production mobile & web applications serving 500k+ active users across healthcare, fintech, e-commerce, and logistics.",
            "Engineered state management and asynchronous data pipelines using Redux Toolkit, React Query, and GraphQL, reducing app re-renders by 35%.",
            "Led and mentored cross-functional engineering teams of 8+ developers, establishing code review guidelines, CI/CD automated deployments, and unit test coverage standards.",
            "Designed cloud backend microservices on AWS (EC2, S3, Lambda, CloudFront) with Node.js and PostgreSQL/MongoDB databases.",
          ],
          skills: [
            "React Native",
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "AWS",
            "Redux Toolkit",
            "GraphQL",
            "REST APIs",
            "Docker",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Ebiztrait Technolab Pvt Ltd",
          company_url: "https://www.ebiztrait.com/",
          logo_path: "ebiztrait_logo.webp",
          duration: "November 2017 - August 2018",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Engineered robust cross-platform mobile applications and scalable web modules using React Native and modern JavaScript frameworks. Optimized complex state management, implemented secure RESTful integrations, and significantly improved UI responsiveness.",
          descriptionBullets: [
            "Developed cross-platform mobile apps for iOS and Android using React Native, delivering native performance and smooth 60 FPS UI transitions.",
            "Integrated real-time WebSocket communications, payment gateway SDKs (Stripe, Razorpay), and push notification workflows.",
            "Collaborated with UI/UX designers to translate Figma mockups into modular, reusable UI component libraries.",
          ],
          skills: [
            "React Native",
            "JavaScript (ES6+)",
            "Redux",
            "RESTful APIs",
            "Firebase",
            "Stripe SDK",
            "CSS3 / Sass",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Empezar Consulting Private Ltd",
          company_url: "https://empezar.in/",
          logo_path: "empezar_logo.png",
          duration: "April 2017 - November 2017",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Delivered custom full-stack web and mobile solutions tailored to client specifications. Spearheaded frontend module development, integrated backend databases, and ensured high code quality through rigorous automated testing.",
          descriptionBullets: [
            "Built responsive single-page web applications using React.js and REST backends, improving page load times by 40%.",
            "Designed relational database schemas and optimized SQL query execution for high-concurrency client portals.",
            "Implemented unit tests and automated integration testing workflows using Jest and Enzyme.",
          ],
          skills: [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "JavaScript",
            "HTML5 / CSS3",
            "Git",
          ],
          color: "#fc1f20",
        },
        {
          title: "Junior Software Developer",
          company: "Oceans Technologies (Sahana System)",
          company_url: "https://www.sahanasystem.com/",
          logo_path: "sahana_logo.ico",
          duration: "April 2016 - December 2016",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Developed interactive web components and API services for client projects. Focused on building reusable UI components, maintaining technical documentation, resolving critical bug fixes, and supporting CI/CD deployment pipelines.",
          descriptionBullets: [
            "Created modular JavaScript & HTML5/CSS3 UI components used across multiple client web portals.",
            "Performed routine API bug fixes, cross-browser compatibility testing, and frontend performance profiling.",
            "Participated in daily agile standups, sprint planning, and client project demonstrations.",
          ],
          skills: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "jQuery",
            "REST APIs",
            "Git",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineering Intern",
          company: "Innovate Web Tech",
          company_url: "https://www.innovatewebtec.com/",
          logo_path: "innovate_logo.png",
          duration: "October 2015 - February 2016",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Gained comprehensive hands-on training in full-stack web development fundamentals, crafting responsive website layouts, integrating database models, and adhering to agile development principles.",
          descriptionBullets: [
            "Constructed responsive web pages adhering to modern W3C standards and mobile-first design principles.",
            "Assisted senior developers in backend API integration and MySQL database management.",
          ],
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP",
            "MySQL",
            "Responsive Design",
          ],
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of major mobile and web applications I have built and delivered, ranging from logistics container management, e-commerce, healthcare, social dating, booking systems, to team collaboration platforms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Featured Applications",
  description: "Key contributions and applications delivered throughout my career.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "exampic",
      name: "Exampic - Logistics Container Management",
      createdAt: "2023-01-01T00:00:00Z",
      description:
        "Cutting-edge logistics app for capturing container images, damage assessment, locking/lashing inspection, and stream-lined container monitoring.",
      url: "#",
    },
    {
      id: "zero2two",
      name: "Zero2two - Kids E-Commerce Shopping",
      createdAt: "2022-06-01T00:00:00Z",
      description:
        "Children's e-commerce platform with vendor/user apps, MyFatoorah payment gateway integration, product promotions, and cart checkout.",
      url: "#",
    },
    {
      id: "ergent",
      name: "ERgent - Emergency Medical Assistance",
      createdAt: "2022-01-01T00:00:00Z",
      description:
        "Door-to-doctor emergency medical assistance app ensuring swift care and medical response.",
      url: "#",
    },
    {
      id: "matchologists",
      name: "Matchologists - Social Dating App",
      createdAt: "2021-08-01T00:00:00Z",
      description:
        "Social media dating platform with real-time socket messaging, OpenTok video calling, speed dating events, and webinar sessions.",
      url: "https://play.google.com/store/apps/details?id=com.matchologists",
    },
    {
      id: "car-co-uk",
      name: "Car.co.uk - Vehicle Scrapping & Services",
      createdAt: "2021-03-01T00:00:00Z",
      description:
        "Comprehensive vehicle platform for car scrapping, insurance, financing, warranties, inspection, and number plate transfers.",
      url: "#",
    },
    {
      id: "sirri-co-uk",
      name: "Sirri.co.uk - Progressive Web App E-Commerce",
      createdAt: "2020-10-01T00:00:00Z",
      description:
        "Progressive Web App (PWA) with Magento backend integration for seamless fashion shopping and personalized recommendations.",
      url: "#",
    },
    {
      id: "clerk",
      name: "Clerk - Service Booking Platform",
      createdAt: "2020-05-01T00:00:00Z",
      description:
        "Service booking platform for fitness, tutoring, and dance classes with calendar integration, Elasticsearch, and provider analytics.",
      url: "#",
    },
    {
      id: "opalink",
      name: "Opalink - Online Food & Group Dine-In",
      createdAt: "2019-11-01T00:00:00Z",
      description:
        "Platform combining food ordering, group dine-in, real-time messaging, and nearby restaurant discovery.",
      url: "https://play.google.com/store/apps/details?id=com.app.opalink",
    },
    {
      id: "xenia-team",
      name: "Xenia-Team - Team Collaboration & HR",
      createdAt: "2019-06-01T00:00:00Z",
      description:
        "All-in-one team collaboration app featuring task management, checklists, employee onboarding, and messaging.",
      url: "https://play.google.com/store/apps/details?id=com.xenia.xeniaApp",
    },
    {
      id: "bring-to-me",
      name: "Bring to Me - Peer Product Travel Delivery",
      createdAt: "2018-12-01T00:00:00Z",
      description:
        "Platform connecting international travelers with local buyers to bring overseas products directly to doorsteps.",
      url: "#",
    },
    {
      id: "boka-reservation",
      name: "Boka - End-to-End Restaurant Reservation",
      createdAt: "2018-08-01T00:00:00Z",
      description:
        "Complete restaurant reservation platform featuring customer table booking, manager tablet app, and owner analytics dashboard.",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me ☎️",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available for Senior Software Engineering roles, team leadership, and fullstack/mobile solution development. Feel free to connect with me!",
  },
  blogSection: {
    title: "Technical Expertise",
    subtitle:
      "Passionate about building scalable solutions, leading development teams, and exploring modern tech trends.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    country: "India",
    region: "Gujarat",
    postalCode: "380015",
    streetAddress: "Ahmedabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "+91-88664-35911",
    subtitle: "kabhi1792@gmail.com",
  },
};

const bigProjects = {
  title: "Featured Mobile & Web Applications",
  subtitle: "KEY PROJECTS AND PRODUCTS I HAVE DESIGNED, DEVELOPED, AND DELIVERED",
  projects: [
    {
      name: "Exampic (React Native)",
      description: "Logistics container image collection & inspection app.",
      link: "#",
      image: "",
    },
    {
      name: "Zero2two (React Native)",
      description: "Kids shopping platform with MyFatoorah payment gateway.",
      link: "#",
      image: "",
    },
    {
      name: "ERgent (React Native)",
      description: "Emergency medical assistance app.",
      link: "#",
      image: "",
    },
    {
      name: "MATCHOLOGISTS (React Native)",
      description: "Dating app with OpenTok video calling & socket chat.",
      link: "https://play.google.com/store/apps/details?id=com.matchologists",
      image: "",
    },
    {
      name: "Car.co.uk (React.js)",
      description: "Vehicle scrapping, insurance, and warranty platform.",
      link: "#",
      image: "",
    },
    {
      name: "Sirri.co.uk (React.js PWA)",
      description: "Progressive web e-commerce app with Magento backend.",
      link: "#",
      image: "",
    },
    {
      name: "Lugmety (React.js)",
      description: "Food delivery application.",
      link: "#",
      image: "",
    },
    {
      name: "Clerk (React.js / Laravel)",
      description: "Service booking platform with calendar & Elasticsearch.",
      link: "#",
      image: "",
    },
    {
      name: "Opalink (React Native)",
      description: "Food ordering & group dine-in community platform.",
      link: "https://play.google.com/store/apps/details?id=com.app.opalink",
      image: "",
    },
    {
      name: "Xenia-Team (React Native)",
      description: "Team collaboration & employee management platform.",
      link: "https://play.google.com/store/apps/details?id=com.xenia.xeniaApp",
      image: "",
    },
    {
      name: "Bring to Me (React Native)",
      description: "Traveler peer-to-peer product delivery platform.",
      link: "#",
      image: "",
    },
    {
      name: "Boka (React Native)",
      description: "Restaurant reservation system for customers, managers, & owners.",
      link: "#",
      image: "",
    },
  ],
};

const achievementSection = {
  title: "Professional Milestones 🏆",
  subtitle: "Highlights & Achievements across 10+ years of engineering excellence",
  achivementsCards: [
    {
      title: "Senior Software Engineer Leadership",
      subtitle: "Leading development teams at IndiaNIC Infotech Ltd, delivering scalable enterprise mobile and web solutions.",
      image: "google_logo.png",
      footerLink: [
        {
          name: "IndiaNIC",
          url: "https://www.indianic.com/",
        },
      ],
    },
    {
      title: "10+ Years Engineering Impact",
      subtitle: "Successfully architected and deployed over 12+ major production applications across React Native, ReactJS, Next.js, and Node.js.",
      image: "stanford_logo.png",
      footerLink: [],
    },
  ],
};

const blogSection = {
  title: "Featured Projects & Work",
  subtitle: "Highlights of applications developed throughout my career",
  blogs: [
    {
      url: "https://play.google.com/store/apps/details?id=com.matchologists",
      title: "Matchologists App",
      description: "Social media dating app with OpenTok video calls and real-time chat.",
      image: "",
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.app.opalink",
      title: "Opalink App",
      description: "Food ordering and group dine-in community platform.",
      image: "",
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.xenia.xeniaApp",
      title: "Xenia-Team App",
      description: "Team management, checklists, and collaboration tool.",
      image: "",
    },
  ],
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project, engineering leadership opportunity, or just say hi! Inbox is open.",
  number: "+91-88664-35911",
  email_address: "kabhi1792@gmail.com",
};

const openSource = {
  githubConvertedToken: "",
  githubUserName: "abhishekkalia",
};

const podcastSection = {
  title: "Technical Highlights 🎙️",
  subtitle: "Expertise in React Native, ReactJS, Node.js, Cloud Architecture, and DevOps.",
  podcast: [],
};

const talkSection = {
  title: "Engineering Insights 💬",
  subtitle: "Sharing knowledge on Mobile & Web Development, Architecture, and Team Leadership.",
  talks: [],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  openSource,
  podcastSection,
  talkSection,
};
