import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from './components/Navbar/NavbarComp';
import RegForm from './components/pages/RegForm';
import List from './components/pages/List';



function App() {
  return (
    <div className="App">
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<RegForm/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
