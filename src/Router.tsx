import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/home/home";
import Destination from "./pages/Destination/destination";
import Crew from "./pages/Crew/crew";
import Tecnologies from "./pages/Tecnologies/tecnologies";


export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destino" element={<Destination />} />
        <Route path="/equipe" element={<Crew />} />
        <Route path="/tecnologia" element={<Tecnologies />} />
      </Routes>
    </Layout>
  );
}