

export default function Home() {
  return (
    <div
      className="min-h-screen text-white bg-cover py-10 bg-center"
      style={{
        backgroundImage: "url('src/assets/design/background-home.png')",
      }}
    >
      <nav className="flex font-barlow-condensed">
        <img className="ml-10" src="src/assets/brand/logo.svg" alt="Logo principal" />
        <div className="relative flex-1 ml-12">
          <div className="h-px w-full bg-white/30 absolute left-4 top-1/2 transform -translate-y-1/2 z-20"></div>
        </div>
        <ul className="flex gap-12 bg-white/10 backdrop-blur-md py-5 px-16 z-10">
          <li className="cursor-pointer uppercase">
            <span className="pr-2 font-bold font-barlow-condensed tracking-1">
              00
            </span>
            Inicio
          </li>
          <li className="cursor-pointer uppercase">
            <span className="pr-2 font-bold font-barlow-condensed tracking-1">
              01
            </span>
            Destino
          </li>
          <li className="cursor-pointer uppercase">
            <span className="pr-2 font-bold font-barlow-condensed tracking-1">
              02
            </span>
            Equipe
          </li>
          <li className="cursor-pointer uppercase">
            <span className="pr-2 font-bold font-barlow-condensed tracking-1">
              03
            </span>
            Tecnologia
          </li>
        </ul>
      </nav>

      {/* <div className="flex justify-between items-end h-[50vh] px-10">
        <h1>Então... você quer conhecer o</h1>
        <div>
          <h1>BOTÃO DE EXPLORAÇÃO</h1>
        </div>
      </div> */}

      <div className="flex flex-col items-center mt-10">
        <div className="flex space-x-6 mt-6 border-b border-gray-700 pb-2"></div>
      </div>
    </div>
  );
}
