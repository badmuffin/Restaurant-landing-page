const Newsletter = () => {
  return (
    <div className="max-w-[600px] h-[400px] lg:max-w-[1000px] bg-[url('assets/image/cafe.png')] mx-auto z-10 min-h-[400px] border rounded-[40px]">
      <div className="flex h-[400px] gap-4 flex-col justify-center items-center">
        <p className="text-5xl text-gray-200 font-bold text-center w-[70%]">Get a Promo Code by Subscribing to our Newsletter.</p>
        <div className="relative flex justify-center items-center">
          <input type="text" placeholder="Enter your email" className="px-16 py-6 rounded-3xl"/>
          <button className="absolute right-0 block bg-[#EA6D27] px-6 py-4 m-2 rounded-full">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
