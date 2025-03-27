import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Tecnologies from "./pages/Tecnologies/tecnologies";
import Crew from "./pages/crew/crew";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/home/Home";

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