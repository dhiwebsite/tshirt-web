import { SignedIn, UserButton } from "@clerk/clerk-react";

import { Link, useLocation } from "react-router-dom";

import React, { useContext } from "react";

import { navLinks } from "@/constants/adminLinks";
import { ModeToggle } from "../mode-toggle";
import { ThemeProviderContext, useTheme } from "../theme-provider";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { theme } = useContext(ThemeProviderContext);
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <div href={"/"} className="sidebar-logo">
          <h5 className="font-bold text-2xl pb-[4px] ">Admin</h5>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserButton />
          </div>
        </div>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                console.log(theme);
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group 
                      ${
                        isActive
                          ? ` ${
                              theme === "light"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }`
                          : `${
                              theme === "light"
                                ? "text-gray-700"
                                : "text-white-700"
                            } `
                      }
                    `}
                  >
                    <Link to={link.route} className="sidebar-link">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        width={24}
                        height={24}
                        src={link.icon}
                        alt="logo"
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul> */}
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
