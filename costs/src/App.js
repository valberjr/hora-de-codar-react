import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NewProject from './pages/NewProject';

import Container from './components/layout/Container';

function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Empresa</Link>
                <Link to="/newproject">Novo Projeto</Link>
            </div>
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/newproject" element={<NewProject />} />
                </Routes>
            </Container>
            <p>Footer</p>
        </Router>
    );
}

export default App;
