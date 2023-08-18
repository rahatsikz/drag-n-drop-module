/* eslint-disable @next/next/no-img-element */
import navBG from "../../../public/navbar.png";
import logo from "../../../public/logo.png";
import profile from "../../../public/DP.png";
import Link from "next/link";
import { FaSearch, FaRegPlusSquare, FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${navBG.src})`,
        // width: "100%",
      }}
    >
      <div className="navbar container mx-auto text-white justify-evenly">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#3B3B3B] rounded-box w-52 "
            >
              <li className="hover:bg-slate-500">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-slate-500">
                <Link href="/">Leads</Link>
              </li>
              <li className="hover:bg-slate-500">
                <Link href="/">Deals</Link>
              </li>
              <li className="hover:bg-slate-500">
                <Link href="/">Contacts</Link>
              </li>
              <li className="hover:bg-slate-500">
                <Link href="/">Activities</Link>
              </li>
              <li className="hover:bg-slate-500">
                <Link href="/">Mail</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl ">
            <img src={logo.src} alt="logo" />
          </Link>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="flex gap-8 px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Leads</Link>
            </li>
            <li>
              <Link href="/">Deals</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
            <li>
              <Link href="/">Activities</Link>
            </li>
            <li>
              <Link href="/">Mail</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-white gap-6 text-xl">
          <span>
            <FaSearch />
          </span>
          <span>
            <FaRegPlusSquare />
          </span>
          <span>
            <AiFillSetting />
          </span>
          <span>
            <FaBell />
          </span>
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src={profile.src} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
