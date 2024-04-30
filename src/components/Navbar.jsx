import Logo from "../../src/assets/logo.webp";
import { FaCoffee } from "react-icons/fa";


const Navbar = () => {
  const Menus = [
    {
      id: 1,
      title: "Blog",
      link: "/",
    },
    {
      id: 2,
      title: "Signup",
      link: "/",
    },

    {
      id: 3,
      title: "Login",
      link: "/",
    },
    {
        id: 4,
    }
  ];
  return (
    <div className="bg-[#E9853C] text-white">
      <div className="mx-auto container py-2 px-4">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div className="">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex  items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="" className="w-[50%]" />
            </a>
          </div>
          {/* Links section */}
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data) => {
                return (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
