"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";
import { navItems } from "./NavItems";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close

export default function SidebarHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Three Dots Menu Button for Small and Medium Screens */}
      <div
        className={`lg:hidden text-[#764b9b] dark:text-[#44a56b] fixed top-5 right-5 isOpen ? z-60 : z-50`}
      >
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Header Content */}
      <nav
        className={`fixed top-0 left-0 h-full flex flex-col items-center justify-between  py-6 bg-white dark:bg-[#121212] shadow-lg z-50 sm:w-[30%] w-[90px] lg:w-[90px] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo at the Top */}
        <div className="">
          <span className="w-[40px] h-[40px] font-black text-[22px] dark:text-[#d3d3d3]">
            A
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-[25px] lg:space-y-[60px]">
          {navItems.map(({ href, label, highlight }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center"
            >
              <span
                className={`text-sm rotate-0 lg:-rotate-90  transform dark:text-white ${
                  highlight
                    ? "text-[#764b9b] dark:text-[#44a56b]"
                    : "group-hover:text-[#764b9b] dark:group-hover:text-[#44a56b]"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Dark/Light Mode Switch at the Bottom */}
        <div className="">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import ThemeToggle from "../theme/ThemeToggle";
// import { navItems } from "./NavItems";

// export default function Header() {
//   return (
//     <nav className="fixed top-0 left-0 h-full flex flex-col items-center justify-between py-6 bg-white dark:bg-[#121212] shadow-lg z-50 w-[90px]">
//       {/* Logo at the Top */}
//       <div className="">
//         {/* <Image src="/path-to-logo.svg" alt="Logo" width={40} height={40} /> */}
//         <span className="w-[40px] h-[40px] font-black text-[22px] dark:text-[#d3d3d3]">
//           A
//         </span>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex flex-col items-center space-y-[60px]">
//         {navItems.map(({ href, label, highlight }) => (
//           <Link
//             key={href}
//             href={href}
//             className="group flex flex-col items-center"
//           >
//             <span
//               className={`text-sm -rotate-90 transform dark:text-white  ${
//                 highlight
//                   ? "text-[#764b9b] dark:text-[#44a56b]"
//                   : "group-hover:text-[#764b9b] dark:group-hover:text-[#44a56b]"
//               }`}
//             >
//               {label}
//             </span>
//           </Link>
//         ))}
//       </div>

//       {/* Dark/Light Mode Switch at the Bottom */}
//       <div className="">
//         <ThemeToggle />
//       </div>
//     </nav>
//   );
// }
