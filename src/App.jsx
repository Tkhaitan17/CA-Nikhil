import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Example from "./components/navbar";
import Nav from './components/prenavbar';
import Hero from "./components/Hero";
import N from './components/newsletter';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import EVisitingCard from './components/EvisitingCard';
import QueryForm from './components/form';
import ServicesPage from './components/Services';
import HomeServices from './components/HomeServices'; // New import
import GSTCalculator from './components/Calculator';
import BulletinsPage from './components/Bulletins';
import UtilitiesPage from "./components/Utilities";
import ActsPage from "./components/Acts";
import RulesPage from "./components/Rules";
import AboutPage from "./components/About";
import FormsPage from "./components/Forms";
import KnowledgeBankPage from './components/KnowledgeBankPage';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isMainRoute = location.pathname === '/';
  
  return (
    <div className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 min-h-screen">
      <Nav />
      <Example />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomeServices />
              <Testimonials />
              <N />
              <Footer />
            </>
          } />
          <Route path="/query" element={<QueryForm />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/EvisitingCard" element={<EVisitingCard />} /> 
          <Route path="/Calculator" element={<GSTCalculator />} /> 
          <Route path="/knowledge-bank" element={<KnowledgeBankPage />} />
          <Route path="/Bulletins" element={<BulletinsPage />} /> 
          <Route path="/Utilities" element={<UtilitiesPage />} /> 
          <Route path="/Acts" element={<ActsPage />} /> 
          <Route path="/Rules" element={<RulesPage />} /> 
          <Route path="/Forms" element={<FormsPage />} /> 
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;