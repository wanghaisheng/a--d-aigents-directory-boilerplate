import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AgentDetailPage } from './pages/AgentDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agent/:id" element={<AgentDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}