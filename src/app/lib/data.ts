import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import MasterCard from "@/app/assets/svgImg/MasterCard.svg";
import Visa from "@/app/assets/svgImg/visa.svg";
import Paypal from "@/app/assets/svgImg/paypal.svg";
import Fawry from "@/app/assets/svgImg/fawry.webp";
import Vodafone from "@/app/assets/svgImg/vodafone.svg";
import EgyptianPost from "@/app/assets/svgImg/egyptian-post.webp";
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

export const Testimonials = [
  {
    id: 1,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: "https://avatars.hsoubcdn.com/default?s=128",
  },
  {
    id: 2,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: "https://avatars.hsoubcdn.com/default?s=128",
  },
  {
    id: 3,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: "https://avatars.hsoubcdn.com/default?s=128",
  },
  {
    id: 4,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: "https://avatars.hsoubcdn.com/default?s=128",
  },
] as const;

export const menuItems = [
  {
    title: "Projects",
    items: [
      { topic: "Programming", url: "" },
      { topic: "Design projects", url: "" },
      { topic: "Marketing projects", url: "" },
      { topic: "Project support", url: "" },
      { topic: "Training projects", url: "" },
      { topic: "Categories", url: "" },
    ],
  },
  {
    title: "Company",
    items: [
      { topic: "About Angaz", url: "" },
      { topic: "Team Of Service", url: "" },
      { topic: "Pricing", url: "" },
      { topic: "Careers", url: "" },
      { topic: "Press & Media", url: "" },
      { topic: "Points System", url: "" },
    ],
  },
  {
    title: "Support",
    items: [
      { topic: "Contact Us", url: "" },
      { topic: "Support Portals", url: "" },
      { topic: "List Of Charges", url: "" },
      { topic: "Help Center", url: "" },
    ],
  },
] as const;

export const paymentMethods = [
  { src: MasterCard, alt: "Mastercard", width: 70, height: 70 },
  { src: Visa, alt: "Visa", width: 70, height: 70 },
  { src: Paypal, alt: "Paypal", width: 40, height: 40 },
  { src: Fawry, alt: "Fawry", width: 40, height: 40 },
  { src: Vodafone, alt: "Vodafone", width: 40, height: 40 },
]as const;;

export const withdrawalMethods = [
  { src: EgyptianPost, alt: "EgyptianPost", width: 40, height: 40 },
  { src: Fawry, alt: "Fawry", width: 40, height: 40 },
  { src: Vodafone, alt: "Vodafone", width: 40, height: 40 },
]as const;;
