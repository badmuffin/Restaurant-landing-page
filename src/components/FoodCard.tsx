import React from "react";
import priceImg from "../assets/icons/price.png";

interface FoodCardProps {
  img: string;
  title: string;
  desc: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ img, title, desc }) => {
  return (
    <div className="w-64 min-h-[400px] pt-32 pb-20">
      <div className=" relative">
        <img src={img} className="absolute -top-[100px] left-[22px]"/>
        <img src={priceImg} className="absolute -top-[60px] left-[160px]" />
      </div>
      <div className="bg-white text-center border rounded-tl-[40px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[40px] pt-20 pb-10">
        <h1 className="pt-16 pb-6 text-lg font-bold">{title}</h1>
        <p className="px-4 pt-0 pb-4 tracking-wider">{desc}</p>
      </div>
    </div>
  );
};

export default FoodCard;