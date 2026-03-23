import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import OurBlends from "@/pages/OurBlends";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-950">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/our-blends" element={<OurBlends />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
