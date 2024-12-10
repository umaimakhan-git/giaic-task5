import React from "react";
import Button from "./Button";

interface ICardsProps {
    heading: string;
    bgColor?: string;  //"?" for optional values
    paragraph: string
};

function Cards(props: ICardsProps){
    const {heading , bgColor , paragraph} = props; // extract values from props;
    return(
        <div className={`${bgColor} m-2 text-justify p-2 rounded-md border-8 border-red-950`}>

            <div className="card-heading flex flex-col text-amber-900 font-bold text-2xl items-center py-4 underline decoration-black">
                <h1>{heading}</h1>
            </div>

            <div className="Paragraph pl-4 text-lg py-3 leading-8">
                <p>{paragraph}</p>
            </div>

            <Button />

        </div>
    );
};

export default Cards;