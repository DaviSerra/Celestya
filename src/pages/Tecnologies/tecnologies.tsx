import Breadcrumb from "../../components/breadcrumb/breadcrumb";

const Tecnologies: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-10 sm:pt-20 md:pt-30 lg:pt-40 w-full overflow-hidden bg-center bg-cover bg-[url('/src/assets/design/background-tecnologies.png')] bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Breadcrumb title="Lançamento espacial 101" page="03" />
      </div>

      <div className="flex justify-center pt-20 w-full gap-36">
        <div className="flex flex-col items-center justify-center space-y-5">
          <span className="flex justify-center items-center font-bellefair w-[80px] h-[80px] bg-white text-black rounded-full text-center text-4xl">1</span>
          <span className="flex justify-center items-center font-bellefair w-[80px] h-[80px] bg-transparent border-[0.1px] border-white/25 text-white rounded-full text-center text-4xl">2</span>
          <span className="flex justify-center items-center font-bellefair w-[80px] h-[80px] bg-transparent border-[0.1px] border-white/25 text-white rounded-full text-center text-4xl">3</span>
        </div>


        <div className="flex flex-col justify-start items-start max-w-3xl space-y-6">
          <h3 className="text-white/50 font-bellefair text-4xl uppercase">A terminologia...</h3>
          <h1 className="text-white text-5xl font-bellefair uppercase">Veículo de lançamento</h1>
          <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
      </div>






    </div>
  );
};

export default Tecnologies;
