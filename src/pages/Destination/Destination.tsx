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
    <div className="min-h-screen text-white pt-10 sm:pt-20 md:pt-20 lg:pt-40 w-full overflow-hidden bg-center bg-cover bg-[url('/src/assets/design/background-destination.png')] bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-20 md:mt-10 lg:mt-0">
        <Breadcrumb title="Selecione seu destino" page="01" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 xl:space-x-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[530px] xl:h-[530px]">
          <img
            style={{ animationDuration: '100s' }}
            src={currentDestination.image}
            alt={currentDestination.name}
            className="w-full h-full animate-spin object-contain"
          />
        </div>
        
        <div className="w-full max-w-xl lg:max-w-md xl:max-w-xl space-y-6 sm:space-y-8">
          <nav className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 md:space-x-8">
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                onClick={() => handleDestinationChange(index)}
                className={`uppercase cursor-pointer text-sm sm:text-base tracking-widest pb-2 transition-colors ${
                  selectedDestination === index
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


          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bellefair uppercase">
              {currentDestination.name}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--blue-secondary)]/70 font-barlow max-w-prose mx-auto lg:mx-0">
              {currentDestination.description}
            </p>
            <div className="md:block">
              <div className="h-px w-full bg-white/30 my-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-5 md:flex justify-between pt-5">
              <div className="text-center lg:text-left">
                <h3 className="text-sm text-[var(--blue-secondary)] uppercase tracking-widest font-barlow-condensed">
                  Distância média
                </h3>
                <span className="text-2xl font-bellefair uppercase">
                  {currentDestination.distance}
                </span>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-sm text-[var(--blue-secondary)]  uppercase tracking-widest font-barlow-condensed">
                  Tempo de viagem
                </h3>
                <span className="text-2xl font-bellefair uppercase">
                  {currentDestination.travelTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;