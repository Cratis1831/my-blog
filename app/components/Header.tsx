import Link from "next/link";
import React from "react";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
import SearchBox from "./SearchBox";
import Avatar from "./Avatar";

type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-y border-gray-100 bg-white p-3 shadow-md">
      <p className="sm:hidden">
        <HiOutlineMenu size={24} />
      </p>
      <div className="flex items-center">
        <Image src={"/images/logo.png"} alt="" height={35} width={35} />
      </div>
      <div className="hidden md:block">
        <p className=" font-bold tracking-widest lg:text-xl">{`<Ashkan Sotoudeh />`}</p>
      </div>
      <div className="flex">
        <div className=" hidden items-center sm:flex sm:space-x-5 sm:pr-10">
          <HeaderItem url="/" label="Home" />
          <HeaderItem url="/about" label="About" />
          <HeaderItem url="/portfolio" label="Portfolio" />
          <HeaderItem url="/contact" label="Contact Us" />
        </div>
        {/* Social Media Links */}
        <div className="flex items-center space-x-3 pr-3">
          {/* GitHub */}
          <Link href="https://github.com/Cratis1831" target="_blank">
            <FaGithub size={24} color="#171515" />
          </Link>
          {/* Facebook */}
          <Link href="">
            <FaFacebook size={24} color="#3b5998" />
          </Link>
          {/* Twitter */}
          <Link href="">
            <FaTwitter size={24} color="#55acee" />
          </Link>
          <Avatar url="" label="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
