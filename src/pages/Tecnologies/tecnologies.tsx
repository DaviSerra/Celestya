import Breadcrumb from "../../components/breadcrumb/breadcrumb";

const Tecnologies: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-10 sm:pt-20 md:pt-30 lg:pt-40 w-full overflow-hidden bg-center bg-cover bg-[url('/src/assets/design/background-tecnologies.png')] bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Breadcrumb title="Lançamento espacial 101" page="03" />
      </div>

      <div className="flex flex-col justify-center container pt-20 mx-auto">
        <h3>A terminologia</h3>
        <h1>Veiculo espacial</h1>
      </div>
    </div>
  );
};

export default Tecnologies;
