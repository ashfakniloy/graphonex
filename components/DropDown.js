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
        <Link href="/" passHref>
          <a
            className={`px-6 py-2 border-y ${
              pathname === "/" ? "text-custom-orange bg-white" : ""
            }`}
          >
            home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/about" ? "text-black" : ""
            }`}
          >
            about us
          </a>
        </Link>
        <Link href="/gallery" passHref>
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/gallery" ? "text-black" : ""
            }`}
          >
            gallery
          </a>
        </Link>
        <Link href="/services" passHref>
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/services" ? "text-black" : ""
            }`}
          >
            services
          </a>
        </Link>

        <div className="border-b cursor-text">
          <a
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
          </a>
          {showMenu ? (
            <div className="flex flex-col gap-2 px-10 py-2 text-sm cursor-pointer">
              <Link href="/clients" passHref>
                <a className={pathname === "/clients" ? "text-black" : ""}>
                  clients
                </a>
              </Link>
              <Link href="/our-team" passHref>
                <a className={pathname === "/our-team" ? "text-black" : ""}>
                  our team
                </a>
              </Link>
              <Link href="/pricing" passHref>
                <a className={pathname === "/pricing" ? "text-black" : ""}>
                  pricing
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <Link href="/blog" passHref>
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/blog" ? "text-black" : ""
            }`}
          >
            blog
          </a>
        </Link>

        <Link href="/contact" passHref>
          <a
            className={`px-6 py-2 ${
              pathname === "/contact" ? "text-black" : ""
            }`}
          >
            contact
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DropDown;
