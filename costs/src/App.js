import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/project/:id" element={<Project />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
