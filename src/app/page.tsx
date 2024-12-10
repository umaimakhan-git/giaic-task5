import React from "react";
import Cards from "./components/Card";

const cardInfo = [
  {
    id: 101,
    heading: "About",
    bgColor: "bg-pink-300",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum?",
  },

  {
    id: 111,
    heading: "Services",
    bgColor: "bg-gray-400",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum?"
  },

  {
    id: "121",
    heading: "Contact Us",
    bgColor: "bg-purple-300",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum?"
  },

  {
    id: 141,
    heading: "Qualification",
    bgColor: "bg-blue-400",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum?"
  }
];

const Home = () => {
  return(
    <div>
      <div className="bg-yellow-200 m-2 flex border-[20px] border-green-800 rounded-lg p-6">
        {cardInfo.map((elem) => {
          return(
            <Cards 
            key={elem.id}
            heading= {elem.heading}
            bgColor= {elem.bgColor}
            paragraph= {elem.paragraph}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Home;