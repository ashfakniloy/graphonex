import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import classNames from "classnames";

function DropDown({ pathname }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="px-3">
      <div
        className={`lg:hidden flex flex-col ${
          pathname === "/"
            ? "bg-custom-orange text-white"
            : "bg-white text-custom-orange"
        }  text-lg cursor-pointer uppercase`}
      >
        <Link href="/">
          <p
            className={`px-6 py-2 border-y ${
              pathname === "/" ? "text-custom-orange bg-white" : ""
            }`}
          >
            home
          </p>
        </Link>
        <Link href="/about">
          <p
            className={`px-6 py-2 border-b ${
              pathname === "/about" ? "text-black" : ""
            }`}
          >
            about us
          </p>
        </Link>
        <Link href="/gallery">
          <p
            className={`px-6 py-2 border-b ${
              pathname === "/gallery" ? "text-black" : ""
            }`}
          >
            gallery
          </p>
        </Link>
        <Link href="/services">
          <p
            className={`px-6 py-2 border-b ${
              pathname === "/services" ? "text-black" : ""
            }`}
          >
            services
          </p>
        </Link>

        <div className="border-b cursor-text">
          <p
            className={`flex justify-between items-center px-6 py-2 ${
              pathname === "" ? "text-custom-orange" : ""
            }`}
          >
            <p>pages</p>
            <p
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer"
            >
              <FaAngleDown />
            </p>
          </p>
          {showMenu ? (
            <div className="flex flex-col gap-2 px-10 py-2 text-sm cursor-pointer">
              <Link href="/clients">
                <p className={pathname === "/clients" ? "text-black" : ""}>
                  clients
                </p>
              </Link>
              <Link href="/our-team">
                <p className={pathname === "/our-team" ? "text-black" : ""}>
                  our team
                </p>
              </Link>
              <Link href="/pricing">
                <p className="">pricing</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <Link href="/blog">
          <p
            className={`px-6 py-2 border-b ${
              pathname === "/blog" ? "text-black" : ""
            }`}
          >
            blog
          </p>
        </Link>

        {/* <Link href="/blog">
          <p
            className={`px-6 py-2 border-b ${
              pathname === "/blog" ? "text-custom-orange bg-white" : ""
            }`}
          >
            blog
          </p>
        </Link> */}
        <Link href="/contact">
          <p
            className={`px-6 py-2 ${
              pathname === "/contact" ? "text-black" : ""
            }`}
          >
            contact
          </p>
        </Link>
        {/* <Link href="/contact">
          <p
            className={`px-6 py-2 ${
              pathname === "/contact" ? "text-custom-orange bg-white" : ""
            }`}
          >
            contact
          </p>
        </Link> */}
      </div>
    </div>
  );
}

export default DropDown;
