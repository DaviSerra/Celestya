import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/crew/Crew";


export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destino" element={<Destination />} />
        <Route path="/equipe" element={<Crew />} />
      </Routes>
    </Layout>
  );
}