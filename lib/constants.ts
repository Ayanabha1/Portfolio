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

export const name = "Ayanabha Misra";
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
    desc: "A few notable personal projects of mine",
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
  heading: `Hi, I am ${name}. Nice to meet you 👋🏻`,
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
    name: "MEETUP",
    techs: [
      "HTML",
      "JavaScript",
      "ReactJs",
      "TailwindCSS",
      "NodeJs",
      "MongoDB",
      "WebRTC",
      "Docker",
      "Github Actions",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "AWS Cloudfront",
    ],
    images: [
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/1.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/2.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/3.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/4.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/5.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/meetup/6.png",
    ],
    git: "https://github.com/Ayanabha1/Meetup",
    link: "https://meetup.ayanabha.xyz",
    description:
      "MeetUp is a WebRTC-based video conferencing app that allows users to create rooms with multiple people and chat in real-time.",
  },
  {
    name: "QUELLO",
    techs: [
      "HTML",
      "TypeScript",
      "NextJs",
      "TailwindCSS",
      "Shadcn/Ui",
      "OpenAI API",
      "ReplicaAI API",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    images: [
      "https://ik.imagekit.io/Ayanabha1/Projects/quello/1.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/quello/2.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/quello/3.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/quello/4.png",
    ],
    git: "https://github.com/Ayanabha1/Quello",
    link: "https://quello.ayanabha.xyz",
    description:
      "Quello: Your AI-powered hub for conversation, code, images, and music—fueled by GPT-3.5 Turbo. Experience modern interaction with ease.",
  },
  {
    name: "SPORTFLIX",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "Socket.io",
      "LeafletJs Api",
      "Docker",
      "Github Actions",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS S3",
      "AWS Cloudfront",
    ],
    images: [
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/1.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/2.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/3.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/4.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/5.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/sportflix/6.png",
    ],
    git: "https://github.com/Ayanabha1/SportFlix",
    link: "https://sportflix.ayanabha.xyz",
    description:
      "Sportflix simplifies outdoor sports meetups. Create events, join others, and chat—all in one place. Say hello to hassle-free sports coordination.",
  },
  {
    name: "REELSGOOD",
    techs: [
      "HTML",
      "TailwindCSS",
      "TypeScript",
      "NextJs",
      "Shadcn/Ui",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Vercel",
    ],
    images: [
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/1.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/2.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/3.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/4.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/5.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/6.png",
      "https://ik.imagekit.io/Ayanabha1/Projects/reelsgood/7.png",
    ],
    git: "https://github.com/Ayanabha1/ReelsGood",
    link: "https://reelsgood.ayanabha.xyz",
    description:
      "ReelsGood is a modern movie ticket booking system offering a seamless and intuitive user experience with modern and responsive design tailored to meet the needs of today's users.",
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
