import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LeftContainer from './components/LeftContainer';
import Survey from "./components/Survey";
import Settings from "./components/Settings";

function App() {
  
  return (
   <Router>
      <Routes> 
        <Route path ="/" element={<LeftContainer/>} />
        <Route path ="/survey" element={<Survey/>} />
        <Route path ="/settings" element={<Settings/>} />
      </Routes>
   </Router>
  );
}

export default App;
