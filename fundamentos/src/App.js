import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/empresa" element={<Empresa />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
