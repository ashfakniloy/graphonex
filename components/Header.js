import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import DropDown from "./DropDown";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="fixed w-full z-10">
      <div
        className={` text-white duration-300 ${
          scroll ? "py-4 bg-custom-gray" : "py-20 bg-transparent"
        }`}
      >
        <div className="px-4 lg:container flex justify-between items-center">
          <div className="">
            <Link href="/">
              <h1 className="text-[22px] font-Raleway cursor-pointer">
                Graphonex
              </h1>
            </Link>
          </div>

          <button
            className="lg:hidden bg-white text-custom-orange text-xl p-2"
            onClick={handleToggle}
          >
            <FaBars className={!toggle ? "block" : "hidden"} />
            <FaTimes className={toggle ? "block" : "hidden"} />
          </button>

          <div className="hidden lg:flex gap-[50px] duration-300 uppercase text-sm font-Montserrat">
            <Link href="/">
              <p
                className={`header-link ${
                  pathname === "/" ? "text-custom-orange" : ""
                }`}
              >
                home
              </p>
            </Link>
            <Link href="/about">
              <p className="header-link">about us</p>
            </Link>
            <Link href="/gallery">
              <p className="header-link">gallery</p>
            </Link>
            <Link href="/services">
              <p className="header-link">services</p>
            </Link>

            <div
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <Link href="">
                <p className="header-link">pages</p>
              </Link>

              {showMenu ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-gray"></div>
                  <div className="text-white bg-custom-orange py-3  shadow-xl">
                    <Link href="/clients">
                      <p className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Clients
                      </p>
                    </Link>

                    <Link href="/our-team">
                      <p className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Our Team
                      </p>
                    </Link>

                    <Link href="/pricing">
                      <p className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Pricing
                      </p>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <Link href="/blog">
              <p className="header-link">blog</p>
            </Link>
            <Link href="/contact">
              <p className="header-link">contact</p>
            </Link>
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header;
