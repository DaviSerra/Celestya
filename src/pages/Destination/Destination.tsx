import { useState } from 'react';
import { destinations } from '../../data/mockDestinations';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

interface DestinationsProps {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  image: string;
}

const Destination: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<number>(0);
  const currentDestination: DestinationsProps = destinations[selectedDestination];

  const handleDestinationChange = (index: number): void => {
    setSelectedDestination(index);
  };

  return (
    <div className="min-h-screen text-white pt-20 sm:pt-40 w-full overflow-hidden bg-center bg-cover bg-[url('/src/assets/design/background-destination.png')] bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-0">
        <Breadcrumb title="Selecione seu destino" page="01" />
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row mx-auto">
        <div className="md:flex justify-center items-center">
          <img
            style={{ animationDuration: '100s' }}
            src={currentDestination.image}
            alt={currentDestination.name}
            className="w-44 h-44 sm:w-64 sm:h-64 animate-spin md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px] xl:w-[530px] xl:h-[650px] object-contain" />
        </div>
        <div className="flex flex-col px-6 sm:px-20 space-y-6 sm:space-y-10">
          <nav className="flex justify-center lg:justify-start space-x-4 sm:space-x-8">
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                onClick={() => handleDestinationChange(index)}
                className={`uppercase cursor-pointer text-sm sm:text-lg tracking-1 pb-2 font-barlow-condensed transition-colors ${selectedDestination === index
                    ? "border-b-2 text-white border-white"
                    : "text-[var(--blue-secondary)] hover:text-white/70 hover:border-b-2 hover:border-white/50"
                  }`}
                aria-selected={selectedDestination === index}
                aria-controls="destination-details"
              >
                {destination.name}
              </button>
            ))}
          </nav>
          <div className="flex flex-col space-y-4">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bellefair uppercase text-center lg:text-left">{currentDestination.name}</h2>
            <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[700px]">
              <p className="text-lg text-center lg:text-left font-barlow text-[var(--blue-secondary)]">{currentDestination.description}</p>
              <div className="relative flex-1 hidden md:block">
                <div className="h-px w-full bg-white/30 absolute lg:block left-0 transform translate-y-5 z-20"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-around mt-8 sm:mt-12 lg:mt-14">
                <div className="flex flex-col gap-2 items-center sm:items-start">
                  <h2 className="font-barlow-condensed text-sm tracking-1 uppercase text-[var(--blue-secondary)]">Distância média</h2>
                  <span className="text-2xl uppercase font-bellefair">{currentDestination.distance}</span>
                </div>
                <div className="flex flex-col gap-2 items-center sm:items-start">
                  <h2 className="font-barlow-condensed text-sm tracking-1 uppercase text-[var(--blue-secondary)]">Tempo de viagem</h2>
                  <span className="text-2xl uppercase font-bellefair">{currentDestination.travelTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;