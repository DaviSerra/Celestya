import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { List, X } from "phosphor-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex text-white py-10 mx-5 lg:mx-0 md:mx-0 md:py-0 lg:py-10">
      <img className="ml-4 md:ml-10 h-8 md:h-auto" src="src/assets/brand/logo.svg" alt="Logo principal" />
      <div className="relative flex-1 ml-4 md:ml-12 over hidden md:block">
        <div className="h-px w-full bg-white/30 absolute md:hidden lg:block left-4 top-1/2 transform -translate-y-1/2 z-20"></div>
      </div>
      {isMobile && (
        <button 
          onClick={toggleMenu} 
          className="fixed top-10 right-5 z-50 "
          aria-label="Menu"
        >
          {isOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>
      )}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-white/5 backdrop-blur-md left-44 z-40 w-[285px] scale-in-hor-right">
          <ul className="flex flex-col items-start p-8 text-white space-y-8 mt-20">
            <li className="cursor-pointer uppercase font-barlow-condensed text-base w-full">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'border-r-4 border-white font-bold' : 'pr-4'}`
                }
                onClick={toggleMenu}
              >
                <span className="pr-3 font-bold">00</span>
                inicio
              </NavLink>
            </li>
            <li className="cursor-pointer uppercase font-barlow-condensed text-base w-full">
              <NavLink
                to="/destino"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'border-r-4 border-white font-bold' : 'pr-4'}`
                }
                onClick={toggleMenu}
              >
                <span className="pr-3 font-bold">01</span>
                Destino
              </NavLink>
            </li>
            <li className="cursor-pointer uppercase font-barlow-condensed text-base w-full">
              <NavLink
                to="/equipe"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'border-r-4 border-white font-bold' : 'pr-4'}`
                }
                onClick={toggleMenu}
              >
                <span className="pr-3 font-bold">02</span>
                Equipe
              </NavLink>
            </li>
            <li className="cursor-pointer uppercase font-barlow-condensed text-base w-full">
              <NavLink
                to="/tecnologia"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'border-r-4 border-white font-bold' : 'pr-4'}`
                }
                onClick={toggleMenu}
              >
                <span className="pr-3 font-bold">03</span>
                Tecnologia
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {!isMobile && (
        <ul className="flex md:w-7xl lg:w-3xl md:justify-center overflow-hidden gap-6 md:gap-16 lg:gap-14 bg-white/10 backdrop-blur-md py-3 md:py-5 px-4 md:px-8 lg:px-16 z-10 text-sm md:text-base">
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1 whitespace-nowrap mr-4 md:mr-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-3 md:py-[18px] ${isActive ? 'border-white' : 'border-transparent'}`
              }
            >
              <span className="pr-1 md:pr-2 font-bold">00</span>
              inicio
            </NavLink>
          </li>

          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1 whitespace-nowrap mr-4 md:mr-0">
            <NavLink
              to="/destino"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-3 md:py-[19px] ${isActive ? 'border-white' : 'border-transparent'}`
              }>
              <span className="pr-1 md:pr-2 font-bold">
                01
              </span>
              Destino
            </NavLink>
          </li>
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1 whitespace-nowrap mr-4 md:mr-0">
            <NavLink
              to="/equipe"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-3 md:py-[19px] ${isActive ? 'border-white' : 'border-transparent'}`
              }>
              <span className="pr-1 md:pr-2 font-bold">
                02
              </span>
              Equipe
            </NavLink>
          </li>
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1 whitespace-nowrap">
            <NavLink
              to="/tecnologia"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-3 md:py-[19px] ${isActive ? 'border-white' : 'border-transparent'}`
              }>
              <span className="pr-1 md:pr-2 font-bold">
                03
              </span>
              Tecnologia
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}