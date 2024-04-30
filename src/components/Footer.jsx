import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "Services",
    link: "/#services",
  },

  {
    id: 3,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Blog",
    link: "/#blog",
  },
];



const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-[#E9853C] min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive "
            >
              IAB CONCEPT.
            </a>
            <p className="pt-4">Get your affordable deals</p>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            {/* first col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Services
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p>Yaba, Lagos</p>
                <p>+234 8149282638</p>
                <p>support@iabconcept.com</p>

                {/* social links */}
                <div className="space-x-3 mt-5">
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
