import { NavLink } from "react-router"

export default function Home() {
  return (
    <div
      className="min-h-screen py-10 bg-center bg-cover bg-[url('/src/assets/design/background-home.png')]">
      <nav className="flex text-white">
        <img className="ml-10" src="src/assets/brand/logo.svg" alt="Logo principal" />
        <div className="relative flex-1 ml-12">
          <div className="h-px w-full bg-white/30 absolute left-4 top-1/2 transform -translate-y-1/2 z-20"></div>
        </div>
        <ul className="flex gap-14 bg-white/10 backdrop-blur-md py-5 px-16 z-10">
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-[18px] ${isActive ? 'border-white' : 'border-transparent'
                }`
              }
            >
              <span className="pr-2 font-bold">00</span>
              Home
            </NavLink>
          </li>

          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1">
            <NavLink
              to="/destino"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-[19px] ${isActive ? 'border-white' : 'border-transparent'
                }`
              }            >
              <span className="pr-2 font-bold ">
                01
              </span>
              Destino
            </NavLink>
          </li>
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1">
            <NavLink
              to="/equipe"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-[19px] ${isActive ? 'border-white' : 'border-transparent'
                }`
              }            >
              <span className="pr-2 font-bold ">
                02
              </span>
              Equipe
            </NavLink>
          </li>
          <li className="cursor-pointer uppercase font-barlow-condensed tracking-1">
            <NavLink
              to="/tecnologia"
              className={({ isActive }) =>
                `cursor-pointer uppercase border-b-4 py-[19px] ${isActive ? 'border-white' : 'border-transparent'
                }`
              }            >
              <span className="pr-2 font-bold ">
                03
              </span>
              Tecnologia
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between items-end h-[75vh] px-40">
        <div className="flex flex-col space-y-6">
          <h1 className="font-barlow-condensed text-2xl text-[var(--blue-secondary)] uppercase tracking-1">Então... você quer explorar o</h1>
          <h1 className="text-left text-10xl text-white font-bellefair uppercase">Espaço</h1>
          <div className="max-w-[700px]">
            <p className="text-1xl text-[var(--blue-secondary)] font-barlow-condensed">Vamos encarar; se você quer ir para o espaço, você pode muito bem ir genuinamente para o espaço sideral e não ficar pairando na borda dele.
              Bem, sente-se e relaxe porque nós lhe daremos uma experiência verdadeiramente de outro mundo!
            </p>
          </div>
        </div>

        <div className="group relative flex justify-center items-center w-[272px] h-[272px] cursor-pointer">
          <div className="absolute w-full h-full rounded-full bg-white/10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          <div className="relative flex justify-center items-center bg-white rounded-full w-full h-full z-10">
            <h1 className="text-3xl uppercase text-[var(--blue-primary)] font-bellefair">Explorar</h1>
          </div>
        </div>

      </div>
    </div>
  );
}