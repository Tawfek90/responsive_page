import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import styles from "./navbar.module.scss";
export default function Navbar() {
  const [sideMenue, setSideMenue] = useState(false);
  return (
    <nav className=" ">
      <div className="nav_container mx-auto m-4 flex justify-between items-center relative w-[95%]">
        {/*logo */}
        <div className="logo">
          <img src="./images/Logo.png" className=" " alt="" />
        </div>
        {/* items */}
        <ul
          className={`${styles.items} flex items-center justify-between w-[586px] capitalize md:hidden font-[500] `}
        >
          <li>about us</li>
          <li>services</li>
          <li>for developers</li>
          <li>success stories</li>
          <li> remote jobs</li>
        </ul>
        {/*buttons */}
        <div className="btn  w-[380px] flex items-center justify-between lg:hidden">
          <button className=" w-[197px] h-[48px] rounded-[50px] text-[#00008D] border border-[#00008D] font-[500] ">
            join as a developer
          </button>
          <button className=" w-[137px] h-[48px] rounded-[50px] text-[#FFF] bg-[#00008D] border py-3 px-6">
            contact us
          </button>
        </div>
        {/*BARS */}
        <div className="small_screen">
          <FaBars
            className="  hidden md:block text-[20px] cursor-pointer relative"
            onClick={() => setSideMenue(true)}
          />
          {sideMenue && (
            <ul
              className={`${styles.itemss} hidden md:block absolute top-0 right-[-8px] bg-[#5F9EA0] h-screen w-[250px] text-right px-4 pt-4 capitalize text-[20px] z-[100]  `}
            >
              <MdCancel
                className=" cursor-pointer"
                onClick={() => setSideMenue(false)}
              />
              <li>about us</li>
              <li>services</li>
              <li>for developers</li>
              <li>success stories</li>
              <li> remote jobs</li>
              <li>join as a developer</li>
              <li>contact us</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}