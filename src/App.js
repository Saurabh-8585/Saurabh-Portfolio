import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='mt'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </div >
      </Router>
    </>
  );
}

export default App;
