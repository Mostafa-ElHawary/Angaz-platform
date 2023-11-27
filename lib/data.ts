import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";

export const links = [
  {
    name: "Services",
    hash: "#Services",
    icon : React.createElement(AiOutlineSetting)
  },
  {
    name: "Independents",
    hash: "#Independents",
    icon : React.createElement(AiOutlineTeam)
  },

  {
    name: "Projects",
    hash: "#projects",
    icon : React.createElement(AiOutlinePicture )
  },
  {
    name: "Challenges",
    hash: "#Challenges",
    icon : React.createElement(AiOutlineTrophy )
  },
] as const;
