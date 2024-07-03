import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    flutter,
    dart,
    firebase,
    convioo,
    conviooview,
    peckpanic,
    nextjs,
    voyverse,
    upwork
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Contract Next.js developer", 
      company_name: "Voyverse",
      icon: voyverse,
      iconBg: "#FFFFFF",
      date: "April 2024 - June 2024",
      points: [
        "Developed and maintained a digital memorial web application using Next.js, MongoDB and other related technologies.",
        "Collaborated with the Voyverse team to implement new features and functionalities.",
        "Optimized website performance for improved user experience and SEO.",
        "Successfully delivered projects on time and within budget.",
        "Participated in code reviews and provided constructive feedback to other developers.",

      ],
    },
    {
      title: "Contract Flutter developer", 
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#FFFFFF",
      date: "February 2024 - March 2024",
      points: [
        "Developed and maintained the MVP of a Carwash booking mobile application using Flutter, Firebase and other related technologies.",
        "Optimized app performance for improved user experience.",
        "Successfully delivered projects on time and within budget.",
        "Collaborated with app designers to implement new features and functionalities.",

      ],
    },

    {
      title: "Co-founder & CTO",
      company_name: "Convioo",
      icon: convioo,
      iconBg: "#FFFFFF",
      date: "June 2023 - Now",
      points: [
        "Developing and maintaining web applications using Nextjs.js, Firebase and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Convioo",
      description:
        "Convioo is a new interactive video platform. It allows users to create and share engaging video content with embedded questions and prompts, fostering a more interactive and dynamic viewing experience.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: conviooview,
      source_code_link: "https://github.com/shyver/convioo-app",
    },
    {
      name: "Peck Panic",
      description:
        "Peck Panic is a charming 2D side-scrolling platformer designed for children. Players control Pip, a lovable but clumsy kid, who must navigate vibrant levels filled with colourful platforms and obstacles to reach the exit.",
      tags: [
        {
          name: "Flutter",
          color: "orange-text-gradient",
        },
        {
          name: "Flame Engine",
          color: "pink-text-gradient",
        },
      ],
      image: peckpanic,
      source_code_link: "https://github.com/shyver/nameless_pixel_game/tree/master",
    },
    {
      name: "SAAS Template",
      description:
        "A template for a SaaS platform using Next.js, NextAuth, MongoDB and Azure. This template includes authentication, user management, and a dashboard.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nextjs,
      source_code_link: "https://github.com/azizamari/template-saas",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };