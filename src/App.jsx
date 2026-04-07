import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import PreNavbar from './components/prenavbar';
import Hero from "./components/Hero";
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import EVisitingCard from './components/EvisitingCard';
import QueryForm from './components/form';
import ServicesPage from './components/Services';
import HomeServices from './components/HomeServices';
import CalculatorApp from './components/Calculator';
import BulletinsPage from './components/Bulletins';
import UtilitiesPage from "./components/Utilities";
import ActsPage from "./components/Acts";
import RulesPage from "./components/Rules";
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 min-h-screen flex flex-col">
      <PreNavbar />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomeServices />
              <Testimonials />
            </>
          } />
          <Route path="/query" element={<QueryForm />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/e-visiting-card" element={<EVisitingCard />} /> 
          <Route path="/calculator" element={<CalculatorApp />} /> 
          <Route path="/knowledge-bank" element={<KnowledgeBankPage />} />
          <Route path="/bulletins" element={<BulletinsPage />} /> 
          <Route path="/utilities" element={<UtilitiesPage />} /> 
          <Route path="/acts" element={<ActsPage />} /> 
          <Route path="/rules" element={<RulesPage />} /> 
          <Route path="/forms" element={<FormsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;