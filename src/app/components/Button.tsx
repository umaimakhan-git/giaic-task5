"use client";
import { useState } from "react";
import React from "react";

const Button = () => {
    const [count , setCount] = useState(0);
    console.log(count);

    const handleClick = ()=>{
        setCount(count + 1)
    };
    return(
        <div>
        <button 
        onClick={handleClick}
        className="button border-2 border-black mt-7 p-1 ml-3 hover:text-white hover:bg-black  hover:scale-90 transition-all font-normal rounded-md">Click Here</button>
        <p className="ml-3 text-sm mt-4">Count: {count}</p>
        </div>
    );
};

export default Button;