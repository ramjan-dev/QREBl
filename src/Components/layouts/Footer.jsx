import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";
import logo from "/src/assets/logo.png"


const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] py-[55px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <h3>MENU</h3>
              <ul className=" text-menuColor text-14">
                <Link>
                  <il className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Home
                  </il>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Shop
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    About
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Contacts
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3>SHOP</h3>
              <ul className=" text-menuColor text-14">
                <Link>
                  <il className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Category1
                  </il>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Category2
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Category3
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Category4
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Category5
                  </li>
                </Link>
              </ul>
            </div>

            <div className="">
              <h3>HELP</h3>
              <ul className=" text-menuColor text-14">
                <Link>
                  <il className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Privacy Policy
                  </il>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Terms & Conditions
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Special E-shop
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Shipping
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-menuHoverColor hover:font-bold duration-500">
                    Secure Payments
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="text-3xl font-bold">(052) 611-5711 </h3>
              <h4 className="text-3xl font-bold">company@domain.com</h4>
              <p>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="">
              <Image imgSrc={logo}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
