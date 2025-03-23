import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div
      className="min-h-screen w-screen py-10 md:py-0 lg:py-10 bg-center overflow-hidden bg-cover lg:bg-[url('/src/assets/design/background-home.png')] bg-[url('/src/assets/design/background-tablet.png')] bg-no-repeat">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end lg:h-[60vh] px-6 md:px-20 lg:px-36 md:mt-28 pt-16">
        <div className="flex flex-col space-y-3 md:space-y-6 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-barlow-condensed text-lg md:text-2xl text-[var(--blue-secondary)] uppercase tracking-1">Então... você quer explorar o</h1>
          <h1 className="text-6xl md:text-8xl lg:text-10xl text-white font-bellefair uppercase">Espaço</h1>
          <div className="max-w-full md:max-w-[500px] lg:max-w-[700px]">
            <p className="text-sm md:text-lg text-[var(--blue-secondary)] font-barlow-condensed">Vamos encarar; se você quer ir para o espaço, você pode muito bem ir genuinamente para o espaço sideral e não ficar pairando na borda dele.
              Bem, sente-se e relaxe porque nós lhe daremos uma experiência verdadeiramente de outro mundo!
            </p>
          </div>
        </div>

        <div className="group self-center lg:self-end">
          <Link to="/destino" className="w-full">
            <div className="relative w-[150px] h-[150px] md:w-[272px] md:h-[272px] md:mt-10 lg:w-[272px] lg:h-[272px] cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              <nav className="flex justify-center items-center bg-white rounded-full w-full h-full">
                <h1 className="text-xl md:text-2xl lg:text-3xl uppercase text-[var(--blue-primary)] font-bellefair">Explorar</h1>
              </nav>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}