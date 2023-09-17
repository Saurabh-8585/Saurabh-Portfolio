import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Lottie from 'lottie-react';

const Projects = lazy(() => import('./Pages/Projects'));
const About = lazy(() => import('./Pages/About'));
const ProjectDisplay = lazy(() => import('./Pages/ProjectDisplay'));
const Contact = lazy(() => import('./Pages/Contact'));
const Error404 = lazy(() => import('./Pages/Error404'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<HomePage Lottie={Lottie} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/about" element={<About Lottie={Lottie} />} />
            <Route path="/contact" element={<Contact Lottie={Lottie} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
