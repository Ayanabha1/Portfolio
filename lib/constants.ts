import {
  ClipboardListIcon,
  Code2Icon,
  DownloadIcon,
  GithubIcon,
  HomeIcon,
  Laptop2Icon,
  LayoutPanelTopIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  WorkflowIcon,
  icons,
} from "lucide-react";

export const email = "ayanabha2002@gmail.com";
export const resume =
  "https://drive.google.com/file/d/1uUTJVCswV6OUKn7geCzj3lO5KQDQA7H9/view?usp=sharing";
export const phoneno = "+91 8918829811";
export const linkedin = "https://www.linkedin.com/in/ayanabha-misra-7196091b4/";
export const github = "https://github.com/Ayanabha1";
export const leetcode = "https://leetcode.com/Ayanabha1";

export const nav_links = [
  {
    name: "Intro",
    link: "/",
    icon: HomeIcon,
    desc: "A brief overview of who I am.",
  },
  {
    name: "About Me",
    link: "#about",
    icon: ClipboardListIcon,
    desc: "Elaboration on my background and technical skill set.",
  },
  {
    name: "Projects",
    link: "#projects",
    icon: Laptop2Icon,
    desc: "A few noteworthy projects I've worked on.",
  },
  {
    name: "Contact",
    link: "#contact",
    icon: PhoneCallIcon,
    desc: "Get in touch with me.",
  },
];

export const social_links = [
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.png",
    link: linkedin,
    text: "LinkedIn",
  },
  {
    name: "Github",
    icon: GithubIcon,
    link: github,
    text: "Github",
  },
  {
    name: "Leetcode",
    icon: "/icons/leetcode.png",
    link: leetcode,
    text: "Leetcode",
  },
];

export const contact_links = [
  {
    name: "ayanabha2002@gmail.com",
    icon: MailIcon,
    link: `mailto:${email}`,
    text: "Email",
  },
  {
    name: "+91 8918829811",
    icon: PhoneCallIcon,
    link: `tel:${phoneno}`,
    text: "Call Me",
  },
];

export const hero_info = {
  hero_text: "Full-Stack Web Developer & Problem Solver",
  hero_desc:
    "I create beautiful things when I have a cup of coffee with me 🍵.",
};

export const about_details = {
  heading: "Hi, I am Ayanabha Misra. Nice to meet you 👋🏻",
  desc: "I am currently a final-year student at KIIT University in Bhubaneswar. Throughout my four years in college, I have dedicated my efforts to honing my skills in web development, devops, and problem-solving. I actively practice problem-solving on platforms like LeetCode. For a more detailed overview of my qualifications and experiences, please refer to my resume.",
  links: [
    { name: "Resume", link: resume, icon: DownloadIcon },
    {
      name: "Leetcode",
      link: leetcode,
      icon: "/icons/leetcode.png",
    },
  ],
};

export const skills = [
  {
    label: "Front-end Development",
    icon: LayoutPanelTopIcon,
    desc: "I love to create beautiful responsive websites from scratch",
    skills: [
      {
        name: "HTML",
        icon: "/icons/html3d.png",
      },
      {
        name: "CSS",
        icon: "/icons/css3d.png",
      },
      {
        name: "TailwindCSS",
        icon: "/icons/tailwind.png",
      },
      {
        name: "Javascript",
        icon: "/icons/js.png",
      },
      {
        name: "Typescript",
        icon: "/icons/ts.png",
      },
      {
        name: "ReactJs",
        icon: "/icons/react.png",
      },
      {
        name: "NextJs",
        icon: "/icons/next.png",
      },
      {
        name: "Socket.io",
        icon: "/icons/socket.png",
      },
      {
        name: "WebRTC",
        icon: "/icons/webrtc.png",
      },
    ],
  },
  {
    label: "Back-end & Databases",
    icon: Code2Icon,
    desc: "I design scalable applications and build them with utmost optimisation",
    skills: [
      {
        name: "NodeJS",
        icon: "/icons/node.png",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongo.png",
      },
      {
        name: "MySQL",
        icon: "/icons/mysql.png",
      },
      {
        name: "Socket.io",
        icon: "/icons/socket.png",
      },
      {
        name: "Serverless",
        icon: "/icons/lambda.png",
      },
    ],
  },
  {
    label: "DevOps",
    icon: WorkflowIcon,
    desc: "I can automate operations for seamless workflow",
    skills: [
      {
        name: "AWS",
        icon: "/icons/aws.png",
      },
      {
        name: "Github",
        icon: "/icons/git.png",
      },
      {
        name: "Github Actions",
        icon: "/icons/gitac.png",
      },
      {
        name: "Jenkins",
        icon: "/icons/jenkins.png",
      },
      {
        name: "Docker",
        icon: "/icons/docker.png",
      },
      {
        name: "Ansible",
        icon: "/icons/ansible.png",
      },
      {
        name: "Terraform",
        icon: "/icons/terraform.png",
      },
    ],
  },
];

export const projects = [
  {
    name: "QUELLO",
    techs: [
      "NextJs",
      "Mysql",
      "Prisma",
      "OpenAI API",
      "Replica API",
      "Stripe",
      "TailwindCSS",
      "Shadcn/Ui",
    ],
    images: [
      "/project_images/quello/1.png",
      "/project_images/quello/2.png",
      "/project_images/quello/3.png",
      "/project_images/quello/4.png",
    ],
    git: "https://github.com/Ayanabha1/Quello",
    link: "https://quello.vercel.app",
  },
  {
    name: "SPORTFLIX",
    techs: [
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "Socket.io",
      "LeafletJs Api",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "AWS Cloudfront",
    ],
    images: [
      "/project_images/sportflix/1.png",
      "/project_images/sportflix/2.png",
      "/project_images/sportflix/3.png",
      "/project_images/sportflix/4.png",
      "/project_images/sportflix/5.png",
    ],
    git: "https://github.com/Ayanabha1/SportFlix",
    link: "https://sportflix.ayanabha.xyz",
  },
  {
    name: "MEETUP",
    techs: [
      "ReactJs",
      "TailwindCSS",
      "NodeJs",
      "MongoDB",
      "WebRTC",
      "Agora.IO APIs",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "AWS Cloudfront",
    ],
    images: [
      "/project_images/meetup/1.png",
      "/project_images/meetup/2.png",
      "/project_images/meetup/3.png",
      "/project_images/meetup/4.png",
    ],
    git: "https://github.com/Ayanabha1/Meetup",
    link: "https://meetup.ayanabha.xyz",
  },
];

export const footer_banner_details = {
  heading: "Let's Work Together",
  heading2: "Please have a look at my resume",
  button: {
    text: "Resume",
    icon: DownloadIcon,
    link: resume,
  },
};

export const footer_details = {
  heading: "Living, learning, & leveling up one day at a time",
  socials: [
    {
      name: "Linkedin",
      icon: LinkedinIcon,
      link: linkedin,
    },
    {
      name: "Github",
      icon: GithubIcon,
      link: github,
    },
    {
      name: "Email",
      icon: MailIcon,
      link: `mailto:${email}`,
    },
  ],
};
