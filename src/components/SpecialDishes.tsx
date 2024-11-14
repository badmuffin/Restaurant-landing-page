import eggImg from "../assets/image/egg.png";
import fishImg from "../assets/image/fish.png";
import lumpiaImg from "../assets/image/lumpia.png";
import tofuImg from "../assets/image/tofu.png";
import FoodCard from "./FoodCard";

import imgLeft from "../assets/bg-img/bg-img-2.png";
import imgRight from "../assets/bg-img/bg-img-3.png"

const SpecialDishes = () => {
  const mockApi = [
    {
      img: lumpiaImg,
      title: "Lumpia with Sauce",
      desc: "Delicious Lumpia, crispy and golden, served with a savory dipping sauce.",
    },
    {
      img: fishImg,
      title: "Fish and Veggie",
      desc: "Fresh fish and vibrant veggies, perfectly seasoned for a delightful meal.",
    },
    {
      img: tofuImg,
      title: "Tofu Chili",
      desc: "Spicy Tofu Chili, packed with flavor and perfect for a hearty meal",
    },
    {
      img: eggImg,
      title: "Egg and Cocumber",
      desc: "Refreshing egg and cucumber dish, light and flavorful.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-200 px-10 lg:px-20 xl:px-44 pt-32">
      <div className=" flex flex-col justify-between items-center mx-auto text-center">
        <div className="absolute top-14 flex gap-96 overflow-hidden">
          <img className="w-[240px] h-[210px]" src={imgLeft} />
          <img className="w-[180px] h-[250px] -rotate-[10deg]" src={imgRight} />
        </div>
        <h1 className="text-6xl font-bold">
          Our <span className="text-[#EA6D27]">Special</span> Dishes
        </h1>
        <p className="w-[500px] text-base tracking-wider py-10 ">
          Discover the Unique Flavors of Our Special Dishes. Each dish is a
          perfect blend of tradition and innovation, crafted to delight your
          taste buds."
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-[100px] pb-10">
          {/* all the four cards */}
          {mockApi.map((data) => (
            <FoodCard img={data.img} title={data.title} desc={data.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
