import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from "./components/Footer";
import FirstComponent from './components/FirstComponent';
import './App.css';
import SecondComponent from "./components/SecondComponent";
import Home from './components/Home';
import ThirdComponent from "./components/ThirdComponent";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

export default function App() {

    

    return <Router>

        <Navbar />

        <Header />
        
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/fc" element={<FirstComponent />} />

            <Route path="/sc" element={<SecondComponent />} />

            <Route path="/tc" element={<ThirdComponent />} />

            <Route path="/*" element={<NotFound />} />

        </Routes>

        <Footer />
    </Router>
}