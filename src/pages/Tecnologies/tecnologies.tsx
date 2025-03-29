import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { tecnologies } from "../../data/mockTechnology";

interface TecnologiesProps {
  name: string;
  description: string;
  image: string;
}

const Tecnologies: React.FC = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<number>(0);
  const currentTechnology: TecnologiesProps = tecnologies[selectedTechnology];

  const handleTechnologyChange = (index: number): void => {
    setSelectedTechnology(index);
  }

  return (
    <div className="min-h-screen text-white pt-24 md:pt-20 w-full overflow-hidden bg-[url('/src/assets/design/background-tecnologies.png')] bg-center bg-cover bg-no-repeat" >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 md:pt-10 lg:pt-20">
        <Breadcrumb title="Lançamento espacial 101" page="03" />
      </div>

      <div className="lg:hidden flex flex-col items-center w-full md:mt-8">
        <div className="w-full">
          <img
            className="w-full h-auto object-cover md:object-contain"
            src={currentTechnology.image}
            alt={currentTechnology.name}
          />
        </div>
        
        <div className="flex justify-center space-x-3 md:space-x-4 mt-6">
          {tecnologies.map((technology, index) => (
            <button
              key={technology.name}
              onClick={() => handleTechnologyChange(index)}
              className={`flex justify-center items-center font-bellefair w-10 h-10 md:w-12 md:h-12 
                ${selectedTechnology === index
                  ? "bg-white text-black"
                  : "bg-transparent border border-white/25 hover:border-white duration-200 text-white"
                } rounded-full text-center text-lg md:text-xl cursor-pointer transition-colors`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col items-center text-center px-4 md:px-8 max-w-md mx-auto mt-6 md:mt-8 space-y-2">
          <h3 className="text-white/50 font-bellefair text-sm md:text-lg uppercase">A terminologia...</h3>
          <h1 className="text-white text-xl md:text-3xl font-bellefair uppercase">{currentTechnology.name}</h1>
          <p className="text-xs md:text-sm font-barlow text-[var(--blue-secondary)] leading-relaxed">
            {currentTechnology.description}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center w-full gap-12 mt-12">
        <div className="flex flex-col items-center ml-48 justify-start space-y-6">
          {tecnologies.map((technology, index) => (
            <button
              key={technology.name}
              onClick={() => handleTechnologyChange(index)}
              className={`flex justify-center items-center font-bellefair w-14 h-14 ${
                selectedTechnology === index
                  ? "bg-white text-black"
                  : "bg-transparent border border-white/25 hover:border-white duration-200 text-white"
              } rounded-full text-center text-2xl cursor-pointer transition-colors`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start max-w-2xl space-y-3">
          <h3 className="text-white/50 font-bellefair text-3xl uppercase">A terminologia...</h3>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bellefair uppercase text-nowrap">{currentTechnology.name}</h1>
          <p className="text-sm md:text-base lg:text-lg font-barlow text-[var(--blue-secondary)] leading-relaxed">
            {currentTechnology.description}
          </p>
        </div>

        <div className="flex justify-center items-center lg:ml-auto">
          <img
            className="max-w-full h-auto object-contain w-[500px]"
            src={currentTechnology.image}
            alt={currentTechnology.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;