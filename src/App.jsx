import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import TrendAnalysis from "./pages/TrendAnalysis.jsx";
import CompetitorAnalysis from "./pages/CompetitorAnalysis.jsx";
import ConsumerSentiment from "./pages/ConsumerSentiment.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/trend-analysis" element={<TrendAnalysis />} />
        <Route exact path="/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route exact path="/consumer-sentiment" element={<ConsumerSentiment />} />
      </Routes>
    </Router>
  );
}

export default App;