const Newsletter = () => {
  return (
    <section className="bg-[#F3F4F4]">
      {/* newsletter section */}
      <div className=" max-w-[600px] lg:max-w-[900px] h-[300px] object-cover bg-[url('assets/image/restImg.png')] mx-auto z-10 min-h-[400px] border rounded-[40px]">
        <div className="flex h-[400px] gap-4 flex-col justify-center items-center">
          <p className="text-4xl md:text-5xl text-gray-200 font-bold text-center w-[70%]">
            Get a Promo Code by Subscribing to our Newsletter.
          </p>
          <div className="relative flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-10 py-3 md:px-16 md:py-6 rounded-3xl"
            />
            <button className="absolute right-0 block bg-[#EA6D27] px-4 py-3 md:px-6 md:py-4 m-2 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
