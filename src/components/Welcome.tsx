import heroImg from "../assets/image/hero-img-1.png";
import bgImg2 from "../assets/bg-img/bg-img-2.png";

import leafLeft from "../assets/image/leaf-left.png";
import leafRight from "../assets/image/leaf-right.png";

import bgImg5 from "../assets/bg-img/bg-img-5.png";
import bgImg7 from "../assets/bg-img/bg-img-7.png";
import bgImg8 from "../assets/bg-img/bg-img-8.png";
import bgImg9 from "../assets/bg-img/bg-img-9.png";

const Welcome = () => {
  return (
    <section className="w-full relative min-h-[80vh] bg-gray-100 px-10 lg:px-20 xl:px-44 pt-32 pb-36">
      <div>
        <img src={bgImg7} className="absolute -top-20 left-[40rem]" />
        <img src={bgImg9} className="absolute right-0 bottom-20 " />
      </div>

      <div className="flex justify-between items-center gap-x-20">
        {/* image content */}
        <div className="relative ">
          <img src={heroImg} className=" w-[800px]" />
          <img src={leafLeft} className="absolute top-36" />
          <img src={leafRight} className="absolute top-24 -right-10" />
        </div>
        {/* text content */}
        <div className="relative flex flex-col w-1/2 ">
          <div className="justify-evenly items-center py-10">
            <p className="relative text-5xl font-bold z-10">
              Welcome to our <span className="text-[#EA6D27]">Restaurant</span>
              <img
                src={bgImg2}
                className="absolute -top-20 -left-10 w-[12rem] -z-10"
              />
            </p>
            <p className="w-[480px] text-lg tracking-wider pt-10 pb-0">
              A place where exceptional flavor, vibrant freshness, and warm
              hospitality come together to create unforgettable dining
              experiences.
            </p>
            {/* background images */}
            <img src={bgImg5} className="absolute -bottom-14 -left-20" />
            <img src={bgImg8} className="absolute -bottom-24 left-10" />
          </div>
          <div className="pb-8">
            <button className="bg-[#101A24] px-6 py-3 mr-3 border rounded-tl-xl rounded-br-xl text-white text-lg">
              Menu
            </button>
            <button className="bg-[#EA6D27] px-6 py-3 ml-3 border border-transparent rounded-tl-xl rounded-br-xl text-white text-lg">
              Book a table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;