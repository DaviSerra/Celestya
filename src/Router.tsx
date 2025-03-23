import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/home/Home";
import Destiny from "./pages/home/Destiny/Destiny";


export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destino" element={<Destiny />} />
      </Routes>
    </Layout>
  );
}