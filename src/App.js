import './App.css';
import { Routes, Route } from 'react-router-dom'
import DetailsPage from './Pages/DetailsPage';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:username' element={<DetailsPage />} />
    </Routes>
  );
}
export default App;
