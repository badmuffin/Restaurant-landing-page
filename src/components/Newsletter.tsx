import cafeBg from "../assets/image/cafe.png";

const Newsletter = () => {
  return (
    <div className="relative max-w-[600px] lg:max-w-[1000px] mx-auto z-10 min-h-[400px] border rounded-[40px]">
      <img src={cafeBg} className="absolute object-cover rounded-[40px] -z-10" />
      <div className="flex items-center justify-center mt-10">
        <div className="flex justify-center items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full px-4 py-2 pr-24 border border-gray-300 rounded-md "
          />
          <button className="px-4 py-2 text-white bg-[#EA6D27] rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
