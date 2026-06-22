import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import MovieCard from './pages/MoiveCard';

function App() {
  return (
    <Routes>
      <Route path = "/" element={< Home />} />
      <Route path = "/movie" element={<MovieCard />} />
    </Routes>
  );
}

export default App;
