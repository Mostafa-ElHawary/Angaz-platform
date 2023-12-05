import React from "react";
// Footer images
import MasterCard from "@/app/assets/svgImg/MasterCard.svg";
import Visa from "@/app/assets/svgImg/visa.svg";
import Paypal from "@/app/assets/svgImg/paypal.svg";
import Fawry from "@/app/assets/svgImg/fawry.webp";
import Vodafone from "@/app/assets/svgImg/vodafone.svg";
import EgyptianPost from "@/app/assets/svgImg/egyptian-post.webp";
import { AiOutlineCode } from "react-icons/ai";

// Departs images
import GraphicDesign from "@/app/assets/svgImg/undraw_designer_girl_re_h54c.svg";
import Programmer from "@/app/assets/svgImg/undraw_pair_programming_re_or4x.svg";
import Business from "@/app/assets/svgImg/undraw_business_analytics_re_tfh3.svg";
import Written from "@/app/assets/svgImg/undraw_typewriter_re_u9i2.svg";
import Marketing from "@/app/assets/svgImg/undraw_social_dashboard_re_ocbd.svg";
import Audios from "@/app/assets/svgImg/undraw_audio_player_re_cl20.svg";
import Video from "@/app/assets/svgImg/undraw_online_media_re_r9qv.svg";
import animation from "@/app/assets/svgImg/undraw_animating_re_5gvn.svg";
import Management from "@/app/assets/svgImg/undraw_software_engineer_re_tnjc.svg";
import Development from "@/app/assets/svgImg/undraw_firmware_re_fgdy.svg";
import Sales from "@/app/assets/svgImg/undraw_shopping_re_hdd9.svg";
import Design from "@/app/assets/svgImg/undraw_designer_life_re_6ywf.svg";
import ContentCreation from "@/app/assets/svgImg/undraw_placeholders_re_pvr4.svg";
import Education from "@/app/assets/svgImg/undraw_certification_re_ifll.svg";
import Other from "@/app/assets/svgImg/undraw_undraw_website_o7n3_bucy.svg";
import chaling1 from "@/app/assets/svgImg/undraw_undraw_selectoption_y9cm_mx7w.svg";
import chaling2 from "@/app/assets/svgImg/undraw_selected_box_09k4.svg";
import femaleAvatar from "@/app/assets/svgImg/undraw_female_avatar_efig.svg";



export const links = [
  {
    id: 1,
    name: "الخدمات",
    hash: "#Services",
  },
  {
    id: 2,
    name: "المستقلون",
    hash: "#Independents",
  },

  {
    id: 3,
    name: "مشاريع",
    hash: "#projects",
  },
  {
    id: 4,
    name: "تحديات",
    hash: "#Challenges",
  },
];

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
        icon: Programmer,
        info: "",
      },
      {
        id: 2,
        title: "Graphic Design",
        icon: GraphicDesign,
        info: "",
      },
      {
        id: 3,
        title: "Written and translated",
        icon: Written,
        info: "",
      },
      {
        id: 4,
        title: "Business",
        icon: Business,
        info: "",
      },
      {
        id: 5,
        title: "Audios",
        icon: Audios,
        info: "",
      },
      {
        id: 6,
        title: "Digital Marketing",
        icon: Marketing,
        info: "",
      },
      {
        id: 7,
        title: "Video editing",
        icon: Video,
        info: "",
      },
      {
        id: 8,
        title: "animation",
        icon: animation,
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
        icon: Management,
        info: "",
      },
      {
        id: 2,
        title: "Programming, Web And Application Development",
        icon: Development,
        info: "",
      },
      {
        id: 3,
        title: "Design, Video And Audio",
        icon: Design,
        info: "",
      },
      {
        id: 4,
        title: "Marketing And Sales",
        icon: Sales,
        info: "",
      },
      {
        id: 5,
        title: "Writing, Content Creation, Translation And Languages",
        icon: ContentCreation,
        info: "",
      },
      {
        id: 6,
        title: "Training, Education And Remote Assistance",
        icon: Education,
        info: "",
      },
      {
        id: 6,
        title: "Other Things",
        icon: Other,
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
        icon: chaling1,
        info: "",
      },

      {
        id: 2,
        title: "two",
        icon: chaling2,
        info: "",
      },
      {
        id: 3,
        title: "three",
        icon: chaling1,
        info: "",
      },

      {
        id: 4,
        title: "four",
        icon: chaling2,
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
    image: femaleAvatar,
  },
  {
    id: 2,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: femaleAvatar,
  },
  {
    id: 3,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: femaleAvatar,
  },
  {
    id: 4,
    name: "Fake User",
    position: "Title position",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum exercitationem illum fuga quos ex aliquam rerum aliquid doloribus? Eveniet, eligendi itaque. Mollitia nobis quidem commodi ullam nesciunt sit consequatur?",
    image: femaleAvatar,
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
] as const;

export const withdrawalMethods = [
  { src: EgyptianPost, alt: "EgyptianPost", width: 40, height: 40 },
  { src: Fawry, alt: "Fawry", width: 40, height: 40 },
  { src: Vodafone, alt: "Vodafone", width: 40, height: 40 },
] as const;
