import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";

import { AiOutlineCode } from "react-icons/ai";

export const links = [
  {
    name: "Services",
    hash: "#Services",
    icon: React.createElement(AiOutlineSetting),
  },
  {
    name: "Independents",
    hash: "#Independents",
    icon: React.createElement(AiOutlineTeam),
  },

  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(AiOutlinePicture),
  },
  {
    name: "Challenges",
    hash: "#Challenges",
    icon: React.createElement(AiOutlineTrophy),
  },
] as const;

export const questions = [
  {
    id: 1,
    topic: "General",
    duties: [
      {
        id: 1,
        title: "What is Anjaz platform?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 2,
        title: "How can people with skills benefit from Anjaz?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 3,
        title: "How do I ensure that my rights as a buyer are fulfilled?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 4,
        title:
          "How do I guarantee the fulfillment of my rights as an independent?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 5,
        title: "What are the levels of (independent) sellers in Anjaz?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
    ],
  },

  {
    id: 2,
    topic: "Services",
    duties: [
      {
        id: 1,
        title: "How can I purchase services from Anjaz?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 2,
        title:
          "What percentage does Anjaz deduct from me when I purchase a mini-service?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 3,
        title:
          "How much does Anjaz get if you, as a freelancer, create a microservice?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 4,
        title:
          "What is the percentage of Anjaz that you get if you, as a freelancer, sell a mini-service?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 5,
        title: "How many microservices can I provide?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
    ],
  },

  {
    id: 3,
    topic: "Projects",
    duties: [
      {
        id: 1,
        title: "How can I benefit from the projects section?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 2,
        title: "What happens after I publish my project?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 3,
        title:
          "What percentage does Anjaz deduct from me when I submit a project?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 4,
        title:
          "What percentage does a sponsor get if I, as a freelancer, complete a project?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 5,
        title:
          "Can I, as a freelancer, amend the proposal I submitted for a project?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
    ],
  },

  {
    id: 4,
    topic: "Contests",
    duties: [
      {
        id: 1,
        title:
          "What does the competitions section offer me as an entrepreneur?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 2,
        title: "What happens after I post my contest?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 3,
        title:
          "What percentage does Injaz deduct from me when I submit a competition?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 4,
        title: "What percentage do you get if you win a competition?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
        id: 5,
        title: "How many works can I participate in one competition?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
    ],
  },
] as const;

export const Departments = [
  
  {
    id: 1,
    topic: "Services",
    duties: [
      {
        id: 1,
        title: "Website programming",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 2,
        title: "Graphic Design",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 3,
        title: "Written and translated",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 4,
        title: "Business",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 5,
        title: "Audios",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 6,
        title: "Digital Marketing",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 7,
        title: "Video editing",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 8,
        title: "animation",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
    ],
  },

  {
    id: 2,
    topic: "Projects",
    duties: [
      {
        id: 1,
        title: "Business, Consulting And Management Services",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 2,
        title: "Programming, Web And Application Development",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 3,
        title: "Design, Video And Audio",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 4,
        title: "Marketing And Sales",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 5,
        title: "Writing, Content Creation, Translation And Languages",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 6,
        title: "Training, Education And Remote Assistance",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 6,
        title: "Other Things",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
    ],
  },

  {
    id: 3,
    topic: "Challenges",
    duties: [
      {
        id: 1,
        title: "One",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },

      {
        id: 2,
        title: "two",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
      {
        id: 3,
        title: "three",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },

      {
        id: 4,
        title: "four",
        icon: React.createElement(AiOutlineCode),
        info: "",
      },
    ],
  },

] as const;
