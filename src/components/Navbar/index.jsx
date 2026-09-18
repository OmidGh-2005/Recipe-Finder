import { Link, NavLink } from "react-router";
import LoginButton from "../LoginButton";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? "text-[#db5f3d]" : "text-[#2D2420] hover:text-[#db5f3d]"
    }`;

  return (
    <div className="w-full bg-[#FFF8F0] border-b border-[#F0E4D4] shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-[#db5f3d] tracking-tight"
        >
          Recipe<span className="text-[#2D2420]">Finder</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClasses}>
            <p className="font-bold">Home</p>
          </NavLink>
          <NavLink to="/favorites" className={linkClasses}>
            <p className="font-bold">Favorite</p>
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            <p className="font-bold">About</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/login">
          <LoginButton>Login</LoginButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
