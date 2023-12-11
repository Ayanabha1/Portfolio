import { Code2Icon, LayoutPanelTopIcon, WorkflowIcon } from "lucide-react";

export const hero_info = {
  hero_text: "Full-Stack Web Developer & Problem Solver",
  hero_desc:
    "I create beautiful things when I have a cup of coffee with me 🍵.",
};

export const about_details = {
  heading: "Hi, I am Ayanabha Misra. Nice to meet you 👋🏻",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis distinctio! Iure iusto necessitatibus a! Repellendus pariatur eum hic non, asperiores repellat in amet delectus. Sunt in, iusto accusamus perferendis enim dicta earum labore. Vitae modi velit tenetur esse sunt!",
  class: "A",
  image: "asdas",
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
    images: ["/project_images/sportflix/1.png"],
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
    images: ["/project_images/meetup/1.png"],
    git: "https://github.com/Ayanabha1/Meetup",
    link: "https://meetup.ayanabha.xyz",
  },
];
