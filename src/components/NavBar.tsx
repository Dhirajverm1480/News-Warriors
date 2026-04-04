import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <nav className="w-full py-2 px-1 flex justify-between items-center border-b">
        <ul className="flex items-center gap-4">
          <NavLink to="/">
            <p className="text-md font-medium hover:text-orange-300 hover:animate-pulse">
              Home
            </p>
          </NavLink>
          <NavLink to="/Category">
            <p className="text-md font-medium hover:text-orange-300 hover:animate-pulse">
              Category
            </p>
          </NavLink>
          <NavLink to="/about">
            <p className="text-md font-medium hover:text-orange-300 hover:animate-pulse">
              About
            </p>
          </NavLink>
          <NavLink to="/contact">
            <p className="text-md font-medium hover:text-orange-300 hover:animate-pulse">
              Contact
            </p>
          </NavLink>
        </ul>

        <div className="border bg-black h-full">
          <span className="bg-black text-white font-medium text-2xl pl-2 pr-1">
            News
          </span>
          <span className="bg-white text-black font-medium text-2xl pl-1 pr-2 rounded-tl-xl">
            Warriors
          </span>
        </div>
        <div></div>
      </nav>
    </header>
  );
};
