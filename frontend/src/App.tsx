import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/navbar";
import ProblemsPage from "./components/problems";
import HomePage from "./components/home.tsx";
import { SmoothCursor } from "./components/ui/smooth-cursor.tsx";
import ContactMePage from "./components/contact_mepage.tsx";

function App() {
  return (

      <Router>
        <SmoothCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/problems/:difficulty" element={<ProblemsPage />} />
          <Route path="/contact-us" element={<ContactMePage />} />
        </Routes>
      </Router>

  );
}

export default App;
