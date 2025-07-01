import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BoardPage from './pages/BoardPage';
import GridOverlay from './pages/GridOverlay';

export default function App() {
  return (
    <div className='min-h-screen w-full bg-background py-8'>
      <div className='max-w-[1280px] mx-auto px-[72px]'>
        <GridOverlay />
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/board/:id' element={<BoardPage />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}