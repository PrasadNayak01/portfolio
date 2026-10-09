export const profile = {
  name: "Prasad Nayak",
  role: "Full Stack Developer (MERN)",
  tagline:
    "I build responsive, scalable web apps with React, Node.js, Express and MongoDB.",
  email: "worknayakprasad@gmail.com",
  location: "Kalyan, Maharashtra, India",
  github: "https://www.github.com/PrasadNayak01",
  linkedin: "https://www.linkedin.com/in/nayakprasad",
  resume: "/Prasad_Nayak_Resume.pdf",
  summary:
    "MCA student and Full Stack Developer (MERN) with hands-on experience building full-stack applications like AtithiStay and ExpenseEase. Skilled in REST API development, database integration, authentication, CRUD operations and responsive UI/UX, with a focus on scalable, user-friendly web applications.",
};

export const stats = [
  { label: "Projects built", value: "3+" },
  { label: "BSc IT CGPA", value: "8.98" },
  { label: "MCA SGPA", value: "8.66" },
];

export const skills = {
  Frontend: [
    "JavaScript",
    "React.js",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "EJS",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Mongoose", "MySQL"],
  "Tools & Design": ["Git & GitHub", "Figma", "UI & UX"],
};

export const projects = [
  {
    title: "ExpenseEase",
    subtitle: "Personal Expense Tracker",
    date: "Aug 2026",
    description:
      "Responsive expense tracker with transaction CRUD, income/expense management and category-based transactions. Includes financial summaries, dark mode and LocalStorage persistence for offline-friendly use.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    live: "https://expenseease-1qf1.onrender.com/",
    github: "https://github.com/PrasadNayak01/ExpenseEase",
  },
  {
    title: "AtithiStay",
    subtitle: "Hotel Booking Web Application",
    date: "Jun 2026 - Aug 2026",
    description:
      "Full-stack hotel booking app with authentication, property listing CRUD and reviews. Added image uploads, server-side validation and interactive maps using MapLibre GL JS and MapTiler.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap"],
    live: "https://atithistay-zvce.onrender.com/",
    github: "https://github.com/PrasadNayak01/AtithiStay",
  },
  {
    title: "HealthHub",
    subtitle: "Digital Health Record Management System",
    date: "Nov 2025 - Apr 2026",
    description:
      "Built for Smart India Hackathon 2025. Secure authentication, appointment booking, digital health records, Stripe payment integration and role-based dashboards.",
    tech: ["Node.js", "Express.js", "MySQL", "JavaScript", "Stripe"],
    live: null,
    github: "https://github.com/PrasadNayak01/HealthHub",
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Navinchandra Mehta Institute of Technology and Development, Dadar",
    period: "2025 - Present",
    score: "SGPA: 8.66",
  },
  {
    title: "B.Sc. Information Technology",
    place: "VPM's B. N. Bandodkar College of Science, Thane",
    period: "2022 - 2025",
    score: "CGPA: 8.98",
  },
  {
    title: "HSC",
    place: "Model College of Science and Commerce, Kalyan",
    period: "2021 - 2022",
    score: "72.00%",
  },
  {
    title: "SSC",
    place: "Sai English High School, Kalyan",
    period: "2019 - 2020",
    score: "76.20%",
  },
];

export const certificates = [
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "Apna College",
    image: "/certificates/mern-apna-college.jpg",
  },
  {
    title: "Fundamentals of Object Oriented Programming",
    issuer: "NPTEL, IIT Roorkee",
    image: "/certificates/nptel-oop.jpg",
  },
  {
    title: "Data Base Management System",
    issuer: "NPTEL, IIT Kharagpur",
    image: "/certificates/nptel-dbms.jpg",
  },
];
