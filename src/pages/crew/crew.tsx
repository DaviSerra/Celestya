import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { crew } from "../../data/mockCrew";

interface CrewProps {
    role: string;
    member: string;
    description: string;
    image?: string;
}

const Crew: React.FC = () => {
    const [selectedCrew, setSelectedCrew] = useState<number>(0);
    const currentCrew: CrewProps = crew[selectedCrew];

    const handleCrewChange = (index: number): void => {
        setSelectedCrew(index);
    }

    return (
        <div className="min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/src/assets/design/background-crew.png')] flex flex-col justify-center py-8 md:py-0">
            <div className="container mx-auto px-4 mb-8 md:mb-12">
                <Breadcrumb title="Conheça sua equipe" page="02" />
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-xl md:text-2xl md:text-center lg:text-left uppercase font-bellefair text-white/50">
                        {currentCrew.role}
                    </h2>
                    <h2 className="text-3xl md:text-4xl md:text-center lg:text-left uppercase font-bellefair text-white">
                        {currentCrew.member}
                    </h2>
                    <p className="text-base md:text-lg md:text-center lg:text-left text-[var(--blue-secondary)] font-barlow leading-relaxed">
                        {currentCrew.description}
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <img 
                        className="w-56 md:w-90 lg:w-[440px] object-contain" 
                        src={currentCrew.image} 
                        alt={currentCrew.member} 
                    />
                </div>
            </div>

            <div className="container mx-auto flex justify-center lg:justify-start space-x-10 mt-8">
                {crew.map((name, index) => (
                    <button
                        onClick={() => handleCrewChange(index)}
                        key={name.member}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors 
                            ${selectedCrew === index 
                                ? 'bg-white' 
                                : 'bg-gray-600 hover:bg-gray-400'
                            }`}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Crew;