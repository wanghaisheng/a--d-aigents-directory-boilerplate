import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AgentDetailPage } from './pages/AgentDetailPage';
import { SubmitPage } from './pages/SubmitPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agent/:id" element={<AgentDetailPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </div>
    </Router>
  );
}