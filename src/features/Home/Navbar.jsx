import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import DarkmodeToggle from "../../ui/DarkmodeToggle";
import {
  HiBadgeCheck,
  HiCalendar,
  HiHome,
  HiInformationCircle,
  HiMenu,
  HiPhone,
  HiUser,
  HiX,
} from "react-icons/hi";
import Logo from "../../ui/Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={` mx-auto w-[95%] sticky top-3 z-50 flex justify-between items-center max-w-7xl backdrop-blur-xl bg-[rgba(255,255,255,0.18)] border border-[rgba(255,255,255,0.3)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 rounded-xl`}
    >
      <div className="">
        <Logo size="small" onClick={() => navigate("/home")} />
      </div>

      <div className="hidden md:flex gap-6 items-center text-2xl">
        <NavItem
          icon={<HiHome size={16} />}
          text="Home"
          isActive={location.pathname.startsWith("/home")}
          onClick={() => navigate("/home")}
        />
        <NavItem
          icon={<HiInformationCircle size={16} />}
          text="About"
          onClick={() => navigate("/about")}
          isActive={location.pathname.startsWith("/about")}
        />
        <NavItem
          icon={<HiBadgeCheck size={16} />}
          text="Rooms"
          isActive={location.pathname.startsWith("/rooms")}
          onClick={() => navigate("/rooms")}
        />
        <NavItem
          icon={<HiCalendar size={16} />}
          text="Booking"
          isActive={location.pathname.startsWith("/room-booking")}
          onClick={() => navigate("/room-booking")}
        />
        <NavItem
          icon={<HiPhone size={16} />}
          text="Contact"
          isActive={location.pathname.startsWith("/contact")}
        />

        <button
          className="flex items-center  border border-gray-950 text-gray-950 px-4 py-2 rounded-full hover:bg-[#b8860b] hover:border-[#b8860b] hover:text-white transition"
          onClick={() => navigate("/login")}
        >
          <HiUser size={16} /> Login
        </button>
        <DarkmodeToggle />
      </div>
      {/* Mobile Burger */}
      <button
        className="md:hidden block text-gray-950 cursor-pointer border-none "
        onClick={toggleMenu}
      >
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full backdrop-blur-xl bg-[rgba(255,255,255,0.18)] border border-[rgba(255,255,255,0.3)] shadow-[0_8px_32px_0_rgba(31, 38, 135, 0.786)] rounded-b-3xl border-t-0 px-8 py-6 flex flex-col gap-6 text-2xl ">
          <NavItem
            icon={<HiHome size={16} />}
            text="Home"
            isActive={location.pathname === "/home"}
            onClick={() => navigate("/home")}
          />
          <NavItem
            icon={<HiInformationCircle size={16} />}
            text="About"
            isActive={location.pathname === "/about"}
            onClick={() => navigate("/about")}
          />
          <NavItem
            icon={<HiBadgeCheck size={16} />}
            text="Rooms"
            isActive={location.pathname === "/rooms"}
            onClick={() => navigate("/rooms")}
          />
          <NavItem
            icon={<HiCalendar size={16} />}
            text="Booking"
            isActive={location.pathname === "/room-booking"}
            onClick={() => navigate("/room-booking")}
          />
          <NavItem
            icon={<HiPhone size={16} />}
            text="Contact"
            isActive={location.pathname === "/contact"}
          />

          <button
            className="flex items-center gap-2 border w-[90px] border-gray-950 text-gray-950 px-4 py-2 rounded-full hover:bg-[#b8860b] hover:border-[#b8860b] hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            <HiUser size={16} /> Login
          </button>
          <DarkmodeToggle />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
