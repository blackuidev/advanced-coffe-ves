import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


const queryClient = new QueryClient();

const App = () => (
    <div className="font-sans bg-stone-950">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
