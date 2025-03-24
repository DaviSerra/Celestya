import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { crew } from "../../data/mockCrew";

interface CrewProps {
    role: string;
    member: string;
    description: string;
    image?: string;
};


const Crew: React.FC = () => {
    const [selectedCrew, setSelectedCrew] = useState<number>(0);
    const currentCrew: CrewProps = crew[selectedCrew];

    const handleCrewChange = (index: number): void => {
        setSelectedCrew(index);
    }

    return (
        <div className="min-h-screen pt-20 sm:pt-40 w-full overflow-hidden bg-center bg-cover bg-[url('/src/assets/design/background-crew.png')] bg-no-repeat">
            <div className="container mx-auto px-4 sm:px-0">
                <Breadcrumb title="Conheça sua equipe" page="02" />
            </div>

            <div className="flex flex-col lg:flex-row container mx-auto">
                <div className="flex flex-col justify-center space-y-4 max-w-[800px]">
                    <h2 className="text-3xl uppercase font-bellefair text-white/50">{currentCrew.role}</h2>
                    <h2 className="text-6xl font-bellefair uppercase text-white">{currentCrew.member}</h2>
                    <p className="text-lg text-[var(--blue-secondary)] font-barlow leading-relaxed">{currentCrew.description}</p>
                </div>

                <div className="flex justify-center items-center container">
                    <img className="w-[650px] h-[650px] object-contain " src={currentCrew.image} alt="Douglas Hurley" />
                </div>

            </div>

            <div className="flex space-x-6 container mx-auto justify-center lg:justify-start">
                {crew.map((name, index) => (
                    <button
                        onClick={() => handleCrewChange(index)}
                        key={name.member}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${selectedCrew === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Crew;