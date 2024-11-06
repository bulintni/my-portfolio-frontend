import React, { createContext, useContext, useState } from "react";
import htmlImg from '@/assets/HTML.png'
import cssImg from '@/assets/CSS.png'
import javascriptImg from '@/assets/Javascript.png'
import reactjsImg from '@/assets/Reactjs.png'
import nextjsImg from '@/assets/NextJs.png'
import angularImg from '@/assets/Angular.png'
import tailwindImg from '@/assets/Tailwind CSS.png'
import bootstrapImg from '@/assets/Bootstrap.png'
import mongodbImg from '@/assets/MongoDB.png'
import mySQLImg from '@/assets/MySQL.png'

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [AboutMe] = useState([
    {
      id: 1, companyName: "Pennello",
      position: "Graphic Designer / Marketing",
      dateTime: "Dec 2022 - Jan 2024",
      work: "Create Artwork for ads Facebook and Create content Facebook Assist the Marketing team in devising sales plans. Edit VDO for Social Media Create Line Richmenu"
    },
    {
      id: 3, companyName: "K&O systems and consulting co. ltd",
      position: "Frontend-Developer (Angular)",
      dateTime: "May 2024 - August 2024",
      work: "Edit and Create Ui for Website Mapping API for display website Integrate with the Backend, BA to create a website. Fixed customer issues for UI pages."
    },
  ])
  const [NavLink] = useState([
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About me" },
    { id: 5, link: "/Contact", name: "Contact" },
  ])

  const [Education] = useState([
    {
      id: 1, schoolName: "Debsirin School",
      dateTime: "2010-2014",
      major: "Artcalculation"
    },
    {
      id: 2, schoolName: "THAI-NICHIINSTITUTEOF TECHNOLOGY",
      dateTime: "2016-2019",
      major: "Information Technology-Multimediatechnology"
    },
  ])

  const [MySkills] = useState([
    { id: 1, logoImg: htmlImg, skillsName: "HTML" },
    { id: 2, logoImg: cssImg, skillsName: "CSS" },
    { id: 3, logoImg: javascriptImg, skillsName: "Javascript" },
    { id: 4, logoImg: reactjsImg, skillsName: "ReactJs" },
    { id: 5, logoImg: nextjsImg, skillsName: "NextJs" },
    { id: 6, logoImg: angularImg, skillsName: "Angular" },
    { id: 7, logoImg: tailwindImg, skillsName: "TailwindCSS" },
    { id: 8, logoImg: bootstrapImg, skillsName: "Bootstrap" },
    { id: 9, logoImg: mySQLImg, skillsName: "MySQL" },
    { id: 10, logoImg: mongodbImg, skillsName: "MongoDB" },
  ])

  const [Contact] = useState([
    {
      fullname: "Bulin Tanomwongtana",
      address: "19/5 Panichton 28 Jarun 13 Tapra Bangkok yai Bangkok 10600",
      email: "bulintni@gmail.com",
      phoneNumber: "093-453-2298",
      linkedIn: "https://www.linkedin.com/in/bulin-tanomwongtana-9a4a58252/"
    }
  ])

  return (
    <DataContext.Provider value={{ NavLink, AboutMe, Education, MySkills, Contact }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext)
}