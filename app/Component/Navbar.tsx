"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/POS preview 1.png";
import { usePathname } from "next/navigation";
import { count } from "console";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Plans", href: "/Plans" },
  { name: "FQAs", href: "/FQAs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative flex justify-between items-center  ">
      <Link
        href={"/"}
        className="flex flex-row justify-center align-middle items-center"
      >
        <svg
          width="31"
          height="43"
          viewBox="0 0 31 43"
          fill="none"
          className="h-[68px] w-[74px] rounded-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.404 0.541382C22.4523 0.607427 15.1183 1.99738 15.1183 1.99738L7.56516 0.541382L0 9.51752L3.47636 15.2785L19.7805 16.9956L4.6832 18.941L15.4906 42.6001L21.2815 29.259L13.4462 28.4305L22.8006 27.0015L30.5009 8.89009C30.5009 8.89009 14.0346 7.17292 15.1153 7.17292C16.1961 7.17292 26.6552 5.73193 26.6552 5.73193L23.404 0.541382Z"
            fill="white"
          />
        </svg>
        <span className="font-bold italic">Carrotar</span>
      </Link>
      {/* options */}
      <div>
        <ul className="relative hidden md:flex flex-row justify-center items-center gap-x-6 ">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-full
                before:h-1
                before:rounded-full
                before:opacity-100
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                "
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                hover:before:w-full
                hover:before:opacity-100"
                    href={link.href}
                    onClick={handleNav}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="text-lg bg-orange-700 rounded-full px-4 py-2">
          For Resturant
        </button>
      </div>
      <div onClick={handleNav} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-8"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </div>
      <div
        className={
          menu
            ? "sticky w-[40%] rounded-br-3xl rounded-tr-md md:hidden h-full inset-0 bg-[#fc6537] bg-opacity-40 backdrop-filter backdrop-blur-sm p-6 ease-in duration-500 left-0 "
            : "left-[-100%] hidden"
        }
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div>
              <ul className="relative flex md:hidden flex-col flex-wrap justify-start gap-y-6 ">
                {links.map((link, id) => (
                  <div key={id}>
                    {pathname === link.href ? (
                      <li>
                        <Link
                          className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-full
                before:h-1
                before:rounded-full
                before:opacity-100
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-orange-200
                before:via-orange-300
                before:to-orange-400
                "
                          href={link.href}
                          onClick={handleNav}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          className="text-lg relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-800
                before:via-blue-400
                before:to-blue-300
                hover:before:w-full
                hover:before:opacity-100"
                          href={link.href}
                          onClick={handleNav}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )}
                  </div>
                ))}
                <button className=" bg-[#ff5722] text-sm text-black rounded-s py-2">
                  For Resturant
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
