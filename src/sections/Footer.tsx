import Image from "next/image";
import logo from "@/assets/logo-white.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialX from "@/assets/social-x.svg";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
        <div className="container">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur before:absolute">
            <Image
              src={logo}
              height={40}
              alt="Saas logo"
              className="relative"
            />
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
            <a href="#home">Bosh sahifa</a>
            <a href="#courses">Kurslar</a>
            <a href="#comments">Izohlar</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="mt-4">
            <a target="_blank" href="https://maps.app.goo.gl/MQBdje4YvhPCwMX16" className="underline flex justify-center items-center">
              <FaLocationDot />
              <span className="ml-1">
                Rashidov St, 130100, Jizzakh, Jizzakh Region, Uzbekistan
              </span>
            </a>
          </div>
          {/* <div className="flex justify-center gap-6 mt-4">
            <a href="">
              <SocialInsta />
            </a>
            <a href="">
              <SocialLinkedin />
            </a>
            <a href="">
              <SocialPin />
            </a>
            <a href="">
              <SocialYoutube />
            </a>
            <a href="">
              <SocialX />
            </a>
          </div> */}
          <p className="mt-4">
            &copy; 2024 Real Code, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
