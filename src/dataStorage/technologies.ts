import msScreen from "../assets/ms_screen.jpg";
import patternScreen from "../assets/pattern_screen.jpg";
import securityScreen from "../assets/security_screen.jpg";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiRedux,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiRabbitmq,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiSequelize,
} from "react-icons/si";
import { CiImageOff } from "react-icons/ci";
import { FaNode } from "react-icons/fa";
import React from "react";

export interface Technology {
  id: number;
  title?: string;
  duration?: string;
  task?: string;
  source?: React.ComponentType | string;
  children?: Technology[];
}

export interface TechnologiesType {
  [key: string]: Technology[];
}

const technologies: TechnologiesType = {
  Certificate: [
    {
      id: 1,
      title: "NodeJS: Microservices 2019",
      source: msScreen,
    },
    {
      id: 2,
      title: "NodeJS: Design Patterns",
      source: patternScreen,
    },
    {
      id: 3,
      title: "NodeJS: Security",
      source: securityScreen,
    },
  ],
  Base: [
    { id: 4, title: "HTML", source: IoLogoHtml5, duration: "1+" },
    { id: 5, title: "CSS", source: IoLogoCss3, duration: "1+" },
    { id: 6, title: "JS", source: IoLogoJavascript, duration: "1+" },
  ],
  Frontend: [
    { id: 7, title: "ReactJS", duration: "1+", source: IoLogoReact },
    { id: 8, title: "Redux TK", duration: "1+", source: SiRedux },
    { id: 9, title: "Sass", duration: "1+", source: IoLogoSass },
    { id: 10, title: "TypeScript", duration: "1+", source: SiTypescript },
  ],
  Backend: [
    { id: 11, title: "NodeJS", duration: "1+", source: FaNode },
    { id: 12, title: "ExpressJS", duration: "1+", source: SiExpress },
    { id: 13, title: "TypeScript", duration: "1+", source: SiTypescript },
    { id: 14, title: "RabbitMQ", duration: "1+", source: SiRabbitmq },
  ],
  Database: [
    { id: 15, title: "MySQL", duration: "1+", source: SiMysql },
    { id: 16, title: "Postgres", duration: "1+", source: SiPostgresql },
    { id: 17, title: "MongoDB", duration: "1+", source: SiMongodb },
    {
      id: 18,
      children: [
        {
          id: 19,
          title: "Sequelize",
          duration: "1+",
          source: SiSequelize,
        },
        {
          id: 20,
          title: "Mongoose",
          duration: "1+",
          source: SiMongoose,
        },
        {
          id: 21,
          title: "TypeORM",
          duration: "1+",
          source: CiImageOff,
        },
      ],
    },
  ],
  "Problem Solving": [{ id: 22, task: "", source: "" }] as Technology[],
};

export default technologies;
