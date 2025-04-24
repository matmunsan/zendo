import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewTask } from './pages/NewTask';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewTask />} />
    </Routes>
  );
}

export default App;
