import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgSrc={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-6 text-menuColor text-14">
                <Link to={"/"}>
                  <il className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Home
                  </il>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Shop
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    About
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Contacts
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-[20px]">
        <Container>
          <Flex className={"justify-between "}>
            <div className="flex items-center gap-x-3">
              <FaBarsStaggered />
              <h3>Shop by Category</h3>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Your Product"
                className="py-4 px-5 w-[600px] bg-white outline-0 placeholder: text-[#C4C4C4]"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-1/2" />
            </div>
            <div className="flex gop-x-6">
              <div className="flex">
                <FaUser />
                <FaCaretDown />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
