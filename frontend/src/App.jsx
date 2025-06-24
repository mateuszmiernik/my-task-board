import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BoardPage from './pages/BoardPage';

export default function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-white py-8'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/board/:id' element={<BoardPage />} />
        </Routes>
      </Router>
    </div>
  );
}