import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Models from '../components/Models/Models';
import ModelDetails from '../components/ModelDetails/ModelDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:id" element={<ModelDetails />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
