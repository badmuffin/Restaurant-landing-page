// import { Link } from "react-router-dom"
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const navlinks = [
    { title: "Menu", link: "/" },
    { title: "Events", link: "/" },
    { title: "Gallery", link: "/" },
    { title: "About", link: "/" },
    { title: "Contact", link: "/" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 lg:px-32 xl:px-40 py-8 min-w-full">
      {/* logo */}
      <div>
        <img src={logo} width={160} alt="logo" />
      </div>
      {/* navlinks */}
      <div className="flex justify-center text-sm">
        {navlinks.map((navlink, idx) => (
          <li key={idx} className="flex px-4">
            {navlink.title}
          </li>
        ))}
      </div>
      {/* call to action - button */}
      <div>
        <button className="bg-[#EA6D27] px-6 py-3 border rounded-tl-xl rounded-br-xl text-white text-lg">
          Book a table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
