import { MdShoppingBasket } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Avatar from "../../img/avatar.png";
import Logo from "../../img/logo.png";
import { signByGoogle } from "../../services/firebaseAuth";

const Header = () => {
  return (
    <header className="z-10 w-screen p-5 md:px-16 ">
      {/* Desktop && tablet */}
      <div className="hidden sm:flex w-full items-center justify-between ">
        <div className="flex items-center gap-2">
          <NavLink to={"/"}>
            <img src={Logo} className="w-10 object-cover" alt="Logo" />
          </NavLink>
          <p className="text-xl font-bold">MaFood</p>
        </div>

        <ul className="flex items-center gap-5 md:gap-8  ">
          <li className="text-base text-black/70 cursor-pointer hover:text-black/100">
            Home
          </li>
          <li className="text-base text-black/70 cursor-pointer hover:text-black/100">
            Menu
          </li>
          <li className="text-base text-black/70 cursor-pointer hover:text-black/100">
            About Us
          </li>
          <li className="text-base text-black/70 cursor-pointer hover:text-black/100">
            Service
          </li>
          <li className=" relative cursor-pointer p-2">
            <MdShoppingBasket size={24} />
            <div className=" absolute flex items-center justify-center top-1 right-1 w-4 h-4 rounded-full bg-red-500">
              <p className="text-xs text-white font-semibold">3</p>
            </div>
          </li>
          <li className="relative">
            <img
              // onClick={() => signByGoogle()}
              src={Avatar}
              className="w-10 min-w-[40px] active:scale-75 duration-100 ease-out  shadow-sm hover:shadow-md rounded-full cursor-pointer"
              alt="avatar"
            />
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden w-full"></div>
    </header>
  );
};

export default Header;
